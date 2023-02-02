const select = document.querySelector('#Selector');
const resultado = document.querySelector('#resultado');
let encuesta = document.querySelector('#encuesta');

console.log(encuesta.textContent);

console.log(select);
console.log('hola mundo');


eventos();

function eventos(){

  select.addEventListener('click', mostrarSeleccionado);

}



function mostrarSeleccionado (e){

    let x = e.target.value;
    console.log(x);


    switch(true){

        case (x<=3):mostrarHtml('Muy deficiente');
                    break;
        case (x>3 && x<=5): mostrarHtml('Insuficiente');
                     break;
        case (x>5 && x<=6): mostrarHtml('Suficiente');
                    break;
        case (x>6 && x<=7): mostrarHtml('Bien');
                    break;
        case (x>7 && x<=9): mostrarHtml('Notable');
                    break;
        case (x>9): mostrarHtml('Sobresaliente');
                    break;
        default: mostrarHtml('Seleccione una opción');
                break

    }

}

function mostrarHtml(valor){


    resultado.textContent = valor;

    
}