    alert ('Boas Vindas ao jogo do número secreto');
let numeroMaximo = 10;
    let numeroSecreto = parseInt((Math.random()*numeroMaximo+1));
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1;

    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        if (numeroSecreto == chute){
            break;
        }else{
            if(chute>numeroSecreto){
                alert(`O número secreto é  menor que ${chute}`)
            }else{
                alert(`O número secreto é  maior que ${chute}`)
            }
            tentativas++;
        }
    }

let palavraTentativa = tentativas>1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
  //  if(tentativas<=1){
      //  alert(`Isso ai! Você acertou! ${numeroSecreto} com ${tentativas} tentativa`);
  //  }else{
       // alert(`Isso ai! Você acertou! ${numeroSecreto} com ${tentativas} tentativas`);
  //  }
    