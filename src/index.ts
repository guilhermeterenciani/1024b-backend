let x:number = 10

let nome:string = "Guilherme"

let vetor:number[] = [1,2,3,4,5]

let nomes:string[] = ["oi","olá"]
console.log(nomes)

//Teste

let bol:boolean = true;

bol = false

const variavel:any = "oi"

const a:undefined = undefined;

const obj:{id:number;nome:string;idade:number} = {
    id:1,
    nome:"Guilherme",
    idade:31
}
obj.id=2
obj.nome = "Tere"
obj.idade=32

// obj={
//     id:2,
//     nome:"Tere",
//     idade:31
// }

const x1 = 10

const vetor1: number[] = [0,1,2,3,4]
vetor1[0] = 10

// asdfasdg = [0,1,2,3,4]

let vetor2: number[] = [0,1,2,3,4]
vetor2 = [0,1,2,3,4]

let outraletra: number|string = 10 ;
outraletra="GUilherme"

const obj1:{id?:number;nome:string;idade:number} = {
    id:1,
    nome:"Guilherme",
    idade:31
}

type Pessoa = {id?:number;nome:string;idade:number}

const p:Pessoa={
    id:10,
    nome:"Qualquer coisa",
    idade:32
}
const p1:Pessoa={
    id:10,
    nome:"Qualquer coisa",
    idade:32
}
