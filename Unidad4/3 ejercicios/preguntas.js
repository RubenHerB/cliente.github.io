var preguntas=[];

function pregunta(p,v,f1,f2,f3){
    this.pregunta = p;
    this.verdadera=v;
    this.falsa1=f1;
    this.falsa2=f2;
    this.falsa3=f3;
}

function añadir(p,v,f1,f2,f3){
    preguntas.push(new pregunta(p,v,f1,f2,f3));
}

añadir("¿Cuál de los siguientes NO es un tipo de dato en JavaScript?","Decimal","String","Boolean","Object");
añadir("¿Cuál es la forma correcta de comentar una línea de código en JavaScript?"," // Comentario"," /* Comentario */"," # Comentario #"," -- Comentario --");
añadir("¿Cuál es la función principal de la declaración \"var\" en JavaScript?"," Declarar una variable local"," Declarar una variable global"," Declarar una constante"," Declarar una función");
añadir("¿Qué método se utiliza para añadir un elemento al final de un array en JavaScript?"," push()"," append()"," addToEnd()"," insertLast()");
añadir("¿Cuál es la función de la sentencia \"if\" en JavaScript?"," Controlar el flujo condicional"," Iterar sobre un bucle"," Definir una función"," Importar bibliotecas externas");
añadir("¿Qué hace el operador \"===\" en JavaScript?"," Compara valores y tipos"," Asigna un valor"," Compara solo tipos"," Compara solo valores");
añadir("¿Cuál de las siguientes opciones es una forma válida de declarar una función en JavaScript?"," function = miFuncion() {}"," const miFuncion = function() {}"," let miFuncion = () => {}"," var miFuncion: function() {}");
añadir("¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?"," pop()"," removeLast()"," deleteLast()"," spliceLast()");
añadir("¿Cuál es el propósito del método \"parseInt()\" en JavaScript?"," Convertir una cadena a un número entero"," Redondear un número decimal"," Obtener la parte decimal de un número"," Convertir un número entero a una cadena");
añadir("¿Cuál es la manera correcta de referenciar un elemento HTML en JavaScript utilizando su ID?"," getElementById()"," getElementByTagName()"," selectElementById()"," querySelector()");
añadir("¿Qué es el DOM en el contexto de JavaScript?"," Un modelo de objetos para representar documentos HTML"," Una biblioteca externa"," Un lenguaje de programación"," Un tipo de dato en JavaScript");
añadir("¿Cuál es el resultado de la expresión: 3 + \"3\" en JavaScript?"," \"33\""," 6"," 33"," Error");
añadir("¿Cuál es la función del operador ternario \"? :\" en JavaScript?"," Asignar un valor condicionalmente"," Concatenar cadenas"," Elevar un número a una potencia"," Comparar dos valores");
añadir("¿Cómo se declara una variable constante en JavaScript?"," const myVar = 10;"," let myVar = 10;"," var myVar = 10;"," constant myVar = 10;");
añadir("¿Cuál es la forma correcta de escribir un bucle \"for\" en JavaScript?"," for (i = 0; i < 10; i++)"," loop (i = 0; i < 10; i++)"," for (i = 10; i > 0; i--)"," iterate (i = 0; i < 10; i++)");

preguntas=preguntas.sort((a, b) => 0.5 - Math.random());
for(var i=0; i<5; i++){
    preguntas.pop();
}