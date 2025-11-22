type ResultadoConversion={
    valor:number
    exito:boolean
}
function toEnteroPositivo(cadenaTexto:string):ResultadoConversion{
    const valor=parseInt(cadenaTexto)
    const exito= !isNaN(valor)&& valor >0
    return{valor,exito} 
}

async function calcularDivisores(numero:number):Promise<Array<number>>{
    return new Promise ((resolve,reject) => {
        const lista=[]
        for(let i=1;i<=numero;i++){
            if(numero%i==0){
                lista.push(i)
            }
        }
        resolve(lista)
    })
    
}
export {calcularDivisores}
export {toEnteroPositivo}