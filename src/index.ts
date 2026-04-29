import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'
import type { RowDataPacket } from 'mysql2'

const app = express()
app.use(express.json())

interface IQuantidadePedido extends RowDataPacket{
    quantidade_pedidos:number
}
//1......
//Crie uma rota '\cliente_data_pedido' que retorne os clientes e a data que os mesmos fizeram 
// o pedido. Para realizar isso, utilize o comando inner join para juntar as tabelas. 
// Utilize o banco de dados chamado  dbteremercado

//
app.get("/cliente_data_pedido", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT nome,datapedido FROM clientes c 
                      INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
//2 Crie uma rota chamada '\pedidos_2026' que retorne 
// idclientes, nome, cidade, idade,idpedidos,datapedido dos pedidos feitos no ano
// de 2026.
app.get("/pedidos_2026", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT idclientes, nome, cidade, idade,idpedidos,datapedido FROM clientes c  
                      INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes WHERE datapedido BETWEEN '2026-01-01' AND '2026-12-31'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
//3.Crie uma rota chamada '\quantidade_pedidos' que retorne 
// um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados
// na tabela pedidos. USE O COMANDO COUNT(*) para contar as quantidades.
app.get("/quantidade_pedidos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute<IQuantidadePedido[]>(`SELECT COUNT(*) as quantidade_pedidos FROM pedidos`)
            const [quantidadePedidos] = [...resultado]
        console.log(quantidadePedidos)
        res.status(200).json(quantidadePedidos)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
//4 Crie uma rota chamada '\quantidade_pedidos_clientes' que retorne
// um json no formato '[{nome:"tere",quantidade_pedidos:1000}]' que retorne 
// todos os clientes e a quantidade de pedidos que cada cliente fez
app.get("/quantidade_pedidos_clientes", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT c.nome as nome,COUNT(*) as quantidade_pedidos FROM clientes c  
                      INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes GROUP BY c.nome`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})

/**
 * 5) ROTA    /quantidade_produtos_por_cliente
 * Crie um código que retorne o nome do cliente e a quantidade de produtos que cada pedido tem
 *    formato    [{nome:"Nome Cliente",idpedido:1,quantidade_produtos:1000}]
 * 
 * 6)    /valor_pedido_total
 * Crie um código que retorne o nome do cliente e o valor total de cada pedido
 *    [{nome:"Nome Cliente",valor_total:1000}]
 */



// app.get("/pessoas", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM pessoa`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })//listar
// app.post("/pessoas", async (req, res) => {
//     try {
//         const { id, nome } = req.body
//         if (!id || !nome)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id ou nome estão incorretos!" })
//         const [resultado, campos] =
//             await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })//Inserir
// app.post("/cadastro_produto", async (req, res) => {
//     try {
//         const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body
//         if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
//             return res.status(500).json({ mensagem: "Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!" })
//         const [resultado, campos] =
//             await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao])
//         console.log(resultado)
//         res.status(201).json({ mensagem: "Sucesso" })
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })
// app.get("/listar_produtos", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })

// app.get("/listar_produtos_informatica", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
//         console.log(resultado)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })

// app.get("/listar_produtos_caros", async (req, res) => {
//     try {
//         const [resultado, campos] =
//             await connection.execute(`SELECT * FROM produto WHERE preco>100`)
//         res.status(200).json(resultado)
//     } catch (err) {
//         const mysqlErrorHandle = new MysqlErrorHandle(err,res)
//         mysqlErrorHandle.validar()
//     }
// })
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})