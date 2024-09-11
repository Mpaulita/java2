const mayorOiguales=(a,b,c)=>{
    if(a>b && a>c){
        return `el mayor es:  ${a} `;
    }else if(b>a && b>c){
        return `el mayor es:  ${b} `;
    }else if(c>a && c>b){
        return `el mayor es:  ${c} `;
    }

    
    if(a==b && b==c){
        return `los 3 son iguales ${a} `;
    }else if(a==b){
        return `${a} y ${b} son iguales. `;
    }else if(a==c){
        return `${a} y ${c} son iguales. `;
    }if(c==b){
        return `${b} y ${c} son iguales. `;
    }
}

const numeros= mayorOiguales(12,6,5);
document.write(numeros)
