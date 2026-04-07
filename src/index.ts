import mysql from 'mysql2/promise';
import express from 'express'
const app = express()
app.use(express.json())
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
});
app.get("/pessoas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar
app.post("/pessoas", async (req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const { id, nome } = req.body
        //Valide se o id e o nome foram passados corretamente. (Algum valor)
        //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
        //Não deixe o código executar a parte de baixo quando for inválido.
        if(!id||!nome)
            return res.status(500).json({mensagem:"Erro: Os dados de id ou nome estão incorretos!"})

        const [resultado, campos] =
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir
app.post("/cadastro_produto", async (req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const { id,nome,categoria,preco,data_criacao,data_modificacao } = req.body
    
        //Valide se o id e o nome foram passados corretamente. (Algum valor)
        //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
        //Não deixe o código executar a parte de baixo quando for inválido.
        if(!id||!nome||!categoria||!preco||!data_criacao||!data_modificacao)
            return res.status(500).json({mensagem:"Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!"})

        const [resultado, campos] =
            await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id,nome,categoria,preco,data_criacao,data_modificacao])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir

app.get("/listar_produtos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE preco>100`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

/**
 * 
 * Crie uma rota chamada `listar_produtos_caros` que retorne os produtos
 * que custem mais de R$: 100,00
 * 
 */






//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})