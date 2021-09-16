function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.querySelector("#imagem");
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    
    //22/12 a 21/03 verão
    //22/03 a 21/06 outono
    //22/06 a 21/09 inverno
    //22/09 a 21/12 primavera

    if(dia >=22 && mes == 11){ let estacao = "Verão";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "verao.png";
    } else if ( dia <=21 && mes <=02){let estacao = "Verão";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "verao.png";
    } else if(dia >=22 && mes == 02){let estacao = "Outono";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "outono.png";
    } else if(dia <=21 && mes <=05){
    let estacao = "Outono";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "outono.png";
    } else if(dia >=22 && mes ==05){let estacao = "Inverno";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "inverno.png";
    } else if(dia <=21 && mes <=08){let estacao = "Inverno";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "inverno.png";
    } else if(dia >=22 && mes ==08){
    let estacao = "Primavera";
    msg.textContent = `Hoje,  a estação do ano é ${estacao}. `;
    img.src= "primavera.png";} else {
    msg.textContent = `Hoje,  a estação do ano é Primavera. `;
    img.src= "primavera.png";
    }
}
    

