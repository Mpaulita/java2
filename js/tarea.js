const mayorOiguales=(a,b,c)=>{
    if(a>b && a>c){
         document.write("el mayor es: ",a,"<br>")
    }else if(b>a && b>c){
         document.write("el mayor es: ",b,"<br>")
    }else if(c>a && c>b){
         document.write("el mayor es: ",c,"<br>")
    }

    
    if(a==b && b==c){
        return document.write("los 3 numeros son iguales: ",a)
    }else if(a==b){
        return document.write("este numero se repite 2 veces: ",a)
    }else if(a==c){
        return document.write("este numero se repite 2 veces: ",a)
    }if(c==b){
        return document.write("este numero se repite 2 veces: ",b)
    }
}

const numeros= mayor(5,5,7);
document.write(numeros)
