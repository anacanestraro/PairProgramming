import server from "../server";
import { validarCEP, contarPalavras} from "../controllers/ApiController";

describe("Testes da API", () => {
  it("Deve validar cep", async () =>{
    expect(validarCEP("12345-678")).toBe(true);
    expect(validarCEP("AE514-981")).toBe(false);
  });

  it("Deve contar palavras", async () => { 
    expect(contarPalavras("Isso é um teste simples")).toEqual(5);
    expect(contarPalavras("  ESPAÇOS EXTRAS  ")).toEqual(2);
  });

});



