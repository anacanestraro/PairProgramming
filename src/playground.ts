import { validarCEP, contarPalavras} from "./controllers/ApiController";

console.log("=== Teste manual ===");

console.log("Validador de CEP");

validarCEP("12345-678"); //true
validarCEP("AE514-981"); //false

console.log("\nContador de Palavras");

contarPalavras("Isso é um teste simples"); //5
contarPalavras("  ESPAÇOS EXTRAS  "); //2




