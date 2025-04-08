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