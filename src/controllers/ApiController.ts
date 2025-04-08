import { Request, Response } from "express";

// Função para testar
export const apiSaudacao = (req: Request, res: Response) => {
  return res.json({ mensagem: "Olá, bem-vindo à API!" });
};


export function validarCEP (cep:string):boolean{
  const regexConst = new RegExp(/^\d{2}\d{3}[-]\d{3}$/gm);

  let resultado = regexConst.test(cep);

  if (resultado){
    console.log("true");
    return true;
  }
  console.log("false")
  return false;
}

export function contarPalavras(frase:string):number{

  const fraseSemEspaco = frase.trim();
  
  let resultado = fraseSemEspaco.split(" ").length;
  console.log(resultado); 
  return resultado; 
}

export const ehPar = (numero: number): boolean => {
  return numero % 2 === 0;
};

export const verificarSenhaForte = (senha: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
};

export function converterParaBinario(numero: number): string{
  let resultado = numero.toString(2);

  console.log(resultado);
  return resultado;
};

export function mediaArray(numeros:number[]):number{
  let total = 0;
  for ( var i = 0; i < numeros.length; i++ ){
    total += numeros[i];
  }
  console.log(total);
  return total;
}
