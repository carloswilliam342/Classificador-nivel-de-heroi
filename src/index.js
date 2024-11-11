nomeUsuario  = "Carlos";
xpUsuario = 1500;
nivelUsuario = "";

if (xpUsuario < 1000){
    nivelUsuario = "Ferro";
}else if( xpUsuario > 1000 && xpUsuario <= 2000){
    nivelUsuario = "Bronze";
}else if(xpUsuario > 2000 && xpUsuario <= 5000){
    nivelUsuario = "Prata";
}else if(xpUsuario > 5000 && xpUsuario <= 7000){
    nivelUsuario = "Ouro";
}else if(xpUsuario > 7000 && xpUsuario <= 8000){
    nivelUsuario = "Platina";
}else if(xpUsuario > 8000 && xpUsuario <= 9000){
    nivelUsuario = "Ascendente";
}else if(xpUsuario > 9000 && xpUsuario <= 10000){
    nivelUsuario = "Imortal";
}else if(xpUsuario >= 10001){
    nivelUsuario = "Radiante";
}

console.log(`O herói de nome ${nomeUsuario} está no nível ${nivelUsuario}`);

