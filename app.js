const $valorL = document.getElementById('valorL'),
      $containerBody = document.getElementById('containerBody'),
      $end = document.getElementById('end'),
      $valorN = document.getElementById('valorN'),
      $deleteL =document.getElementById('deleteL'),
      $deleteN =document.getElementById('deleteN');

let i=1;
let j;

const order = (e) =>{
    if(i<50){
        if(i > 10){
            getValue2(e,'1','2','3','4','5','6','7','8','9','0');
        }else{
            getValue1(e,'A','B','C','D','E','F','G','H','I','J');  
        }
    }
}
const counter1 = (text, value ) =>{
    if(value == i){
        $valorL.innerHTML += text;
            i++;
    }else{
        alert('Faltan letras');
    } 
}
const counter2 = (text, value ) =>{
    if(value == i){
        $valorN.innerHTML += text;
        i++;
        if(i == 21){
        $end.innerHTML = 'Fin del programa';
        i=100;
        }
    }else{
        alert('Faltan numeros');
    } 
}
const getValue2 = (element,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10) =>{
    switch (element) {
        case 'A/1':counter2(`${value1}`, 11);
            break;
        case 'B/2':counter2(`${value2}`, 12);
            break;
        case 'C/3':counter2(`${value3}`, 13);
            break;
        case 'D/4':counter2(`${value4}`, 14);
            break;
        case 'E/5':counter2(`${value5}`, 15);
            break;
        case 'F/6':counter2(`${value6}`, 16);
            break;
        case 'G/7':counter2(`${value7}`, 17);
            break;
        case 'H/8':counter2(`${value8}`, 18);
            break;
        case 'I/9':counter2(`${value9}`, 19);
            break;
        case 'J/0':counter2(`${value10}`, 20);
            break;
        default:
            break;
    }
}
const getValue1 = (element,value1,value2,value3,value4,value5,value6,value7,value8,value9,value10) =>{
    switch (element) {
        case 'A/1':counter1(`${value1}`, 1);
            break;
        case 'B/2':counter1(`${value2}`, 2);
            break;
        case 'C/3':counter1(`${value3}`, 3);
            break;
        case 'D/4':counter1(`${value4}`, 4);
            break;
        case 'E/5':counter1(`${value5}`, 5);
            break;
        case 'F/6':counter1(`${value6}`, 6);
            break;
        case 'G/7':counter1(`${value7}`, 7);
            break;
        case 'H/8':counter1(`${value8}`, 8);
            break;
        case 'I/9':counter1(`${value9}`, 9);
            break;
        case 'J/0':counter1(`${value10}`, 10);
            break;
        default:
            break;
    }
}

$containerBody.addEventListener('click', (e)=>{
    if(e.target.id == 'deleteL'){
        i=1;
        $valorL.innerHTML = '';
    }
    if(e.target.id == 'deleteN'){
        i=11;
        $valorN.innerHTML = '';
    }
    order(e.target.id);
});