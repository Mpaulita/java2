const evaluar=()=>{
    const edad=prompt("cual es tu edad");
    if(edad>=18){
        document.write("legal para discotk");
    }else{
        document.write("vaya a misa");
    }
}

setTimeout(evaluar,5000);