import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'

const app = express()
app.use(express.json())


//1......
//Crie uma rota '\cliente_data_pedido' que retorne os clientes e a data que os mesmos fizeram 
// o pedido. Para realizar isso, utilize o comando inner join para juntar as tabelas. 
// Utilize o banco de dados chamado  dbteremercado

//SELECT nome,datapedido FROM clientes c 
//                      INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes

//2 Crie uma rota chamada '\pedidos_2026' que retorne 
// idclientes, nome, cidade, idade,idpedidos,datapedido dos pedidos feitos no ano
// de 2026.

//3.Crie uma rota chamada '\quantidade_pedidos' que retorne 
// um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados
// na tabela pedidos. USE O COMANDO COUNT(*) para contar as quantidades.

//4 Crie uma rota chamada '\quantidade_pedidos_clientes' que retorne
// um json no formato '[{nome:"tere",quantidade_pedidos:1000}]' que retorne 
// todos os clientes e a quantidade de pedidos que cada cliente fez






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