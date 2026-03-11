// let x:number = 10

// let nome:string = "Guilherme"

// let vetor:number[] = [1,2,3,4,5]

// let nomes:string[] = ["oi","olá"]
// console.log(nomes)

// //Teste

// let bol:boolean = true;

// bol = false

// const variavel:any = "oi"

// const a:undefined = undefined;

// const obj:{id:number;nome:string;idade:number} = {
//     id:1,
//     nome:"Guilherme",
//     idade:31
// }
// obj.id=2
// obj.nome = "Tere"
// obj.idade=32

// // obj={
// //     id:2,
// //     nome:"Tere",
// //     idade:31
// // }

// const x1 = 10

// const vetor1: number[] = [0,1,2,3,4]
// vetor1[0] = 10

// // asdfasdg = [0,1,2,3,4]

// let vetor2: number[] = [0,1,2,3,4]
// vetor2 = [0,1,2,3,4]

// let outraletra: number|string = 10 ;
// outraletra="GUilherme"

// const obj1:{id?:number;nome:string;idade:number} = {
//     id:1,
//     nome:"Guilherme",
//     idade:31
// }

// type Pessoa = {id?:number;nome:string;idade:number}

// const p:Pessoa={

//     id:10,
//     nome:"Qualquer coisa",
//     idade:32
// }
// const p1:Pessoa={
//     id:10,
//     nome:"Qualquer coisa",
//     idade:32
// }

// // Funções em Javascript/typescript

// // O que é uma função?
// /**
//  * Um bloco de código que executa uma tarefa 
//  * (Tarefa é uma sequência de comandos de código)?
//  * 
//  * Benefício: Não repetir código
//  */

// const f =  (variavel:number):number=>10
// const f3 = f(10)
// console.log("O valor de x é "+f3.toString())

// //Terminem essa função para retornar a soma de todos
// //Os elementos de um vetor.
// // somaVetor([1,2,3])   => 6
// // somaVetor([1,2,3,4]) => 10
// function somaVetor(vetor:number[]):number{
//     let soma = 0
//     for (let i = 0; i < vetor.length; i++) {
//         soma = soma +  vetor[i]!
//     }
//     return soma
// }
// console.log(`O valor da soma do vetor é ${somaVetor([1,2,3])}`)

// //2 - Some as posições de um vetor que são pares
// // Ex  somaPares([1,2,3,4])  => 6
// // Ex  somaPares([1,2,3,4,5])=> 6
// // Ex  somaPares([1,2,3,4,8])=> 14


// //3 - Faça uma função que receba 2 vetores e 
// // faça a operação de merge entre eles
// //EX:   => [1,2,3,4,5,6]

// function mergeVetor(v:number[],x:number[]){
//     const x2 = [...v,...x] 
//     return x2
// }
// const v1 = [1,2,3,7]
// const v2 = [4,5,6]
// console.log(mergeVetor(v1,v2))
// console.log(...v1,v2)


//Promessas
//síncronas e assíncronas
//Paralelismo  -> paralelo.


console.log("Início da execução do código")
//async function funcao(){
const funcao = async () => {
    const prom =
        new Promise<string>((resolve, reject) => {
            setTimeout(function handle() {
                reject("Executei a função")
            }, 5000)
        })
    return prom
}
try{
    const resultado = await funcao()
    console.log(resultado)
}
catch(erro){
    console.log("Minha mensagem de erro:"+erro)
}

console.log("Fim da execução do código")


Math.random()>=0.5{}

// Crie uma função que tenha 50% de chance de retornar "tere" após 
// 5 segundos ou a função devolve o valor null
// function devolveTere()
//E faça o tratamento do erro com o try e catch.

