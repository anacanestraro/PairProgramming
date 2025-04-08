import server from "../server";
import { validarCEP, contarPalavras, verificarSenhaForte, ehPar} from "../controllers/ApiController";

describe("Testes da API", () => {
  it("Deve validar cep", async () =>{
    expect(validarCEP("12345-678")).toBe(true);
    expect(validarCEP("AE514-981")).toBe(false);
  });

  it("Deve contar palavras", async () => { 
    expect(contarPalavras("Isso é um teste simples")).toEqual(5);
    expect(contarPalavras("  ESPAÇOS EXTRAS  ")).toEqual(2);
  });

  it("Deve verificar se a senha é forte", async () =>{
    expect(verificarSenhaForte("Senha123!")).toBe(true);
    expect(verificarSenhaForte("senha")).toBe(false);
  });

  it("Deve verificar se o número é par", async () =>{
    expect(ehPar("4")).toBe(true);
    expect(ehPar("3")).toBe(false);
  });

  it("Converter para binario", () => {
    expect(converterParaBinario(1)).toBe("1");
  });

  it("Media array", () => {
    expect(mediaArray([1,2,3,4])).toBe(10);
  });


});




