import { validarCEP, contarPalavras, verificarSenhaForte, ehPar, converterParaBinario, mediaArray} from "./controllers/ApiController";


console.log("=== Teste manual ===");

console.log("Validador de CEP");

validarCEP("12345-678"); //true
validarCEP("AE514-981"); //false

console.log("\nContador de Palavras");

contarPalavras("Isso é um teste simples"); //5
contarPalavras("  ESPAÇOS EXTRAS  "); //2


console.log(verificarSenhaForte("Senha123!"));   
console.log(verificarSenhaForte("senha123!"));   
console.log(verificarSenhaForte("Senha!"));      
console.log(verificarSenhaForte("SenhaForte"));  

console.log(ehPar(10));  
console.log(ehPar(7));   
console.log(ehPar(0));   
console.log(ehPar(-2));  

mediaArray([1,2,3,4]);
converterParaBinario(10);


