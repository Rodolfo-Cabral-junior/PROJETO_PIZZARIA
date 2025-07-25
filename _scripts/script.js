var quantidade  = $('div#testemunhos ul').length;
var limite      = (quantidade * 336) * -1; 
var largura     = limite + 336;
var view_largura= $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width',limite*-1);

$('div#testemunha-direita').click( function() {
    
    posicao_atual   = $('div#testemunhos').position().left;
    nova_posicao    = posicao_atual - view_largura;
        
    if ( limite < posicao_atual - view_largura ) {

        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( limite > ( nova_posicao - view_largura)) {
        $('div#testemunha-direita ion-icon').css('opacity',0.5);
        $('div#testemunha-direita ion-icon').css('cursor','not-allowed');        
    }

    $('div#testemunha-esquerda ion-icon').css('opacity',1);
    $('div#testemunha-esquerda ion-icon').css('cursor','pointer');

})

$('div#testemunha-esquerda').click( function() {
    posicao_atual   = $('div#testemunhos').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $('div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');      
})

//CÓDIGOS DE CLICK PARA ASSINAR
$('div.planos-bottom').click(function () {
    alert('clicou');
})
//CÓDIGOS PARA LINKS DAS REDES SOCIAIS
$('ion-icon#facebook').click(function () {
    window.open("https://www.facebook.com/login.php","_blank");
})
$('ion-icon#twitter').click(function () {
    window.open("https://x.com/login?","_blank");
})
$('ion-icon#instagram').click(function () {
    window.open("https://www.instagram.com/accounts/login/?hl=en","_blank");
})
$('ion-icon#whatsapp').click(function () {
    window.open("https://web.whatsapp.com/","_blank");
})
$('ion-icon#youtube').click(function () {
    window.open("https://www.youtube.com/watch?v=fCWvZisydrE&list=RDfCWvZisydrE&start_radio=1&rv=fCWvZisydrE","_blank");
})
     /*-------------------*/
    /*CÓDIGOS DE ANIMAÇÃO*/
   /*-------------------*/
  $('section#domingo-perfeito').waypoint(function(direcao ) {
      if (direcao == "down") {
          console.log('descendo!!!');
        }
        if (direcao == "up") {
            console.log('subindo!!!');
        }
        
  },{
     offset:'100px;'
  })
  