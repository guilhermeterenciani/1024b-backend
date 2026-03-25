import mysql from 'mysql2/promise';
import express from 'express'
const app = express()
app.use(express.json())
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1'
});
app.get("/pessoas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        res.status(500).json({mensagem:"Erro no servidor!"})
    }
})//listar
app.post("/pessoas", async(req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const {id,nome} = req.body
        const [resultado, campos] =
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({mensagem:"Sucesso"})
    } catch (err) {
        console.log(err);
        res.status(500).json({mensagem:"Erro no servidor!"})
    }
})//Inserir

//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})