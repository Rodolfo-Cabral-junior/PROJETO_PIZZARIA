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
   $('div#testemunhos ul:eq(0)').css('opacity ,0')
   $('div#testemunhos ul:eq(1)').css('opacity ,0')
   $('div#testemunhos ul:eq(2)').css('opacity ,0')
   
   $('section#domingo-perfeito').waypoint(function(direcao ) {
      if (direcao == "down") {
          $('div.folha1').addClass('animate__animated animate__fadeInUp ');
          $('div.folha3').addClass('animate__animated animate__fadeInUp ');
          $('div.camarao').addClass('animate__animated animate__fadeInUp  animate__slow');
          $('div.tomate').addClass('animate__animated animate__fadeInUp   anomate__slow ');
          $('div.queijo').addClass('animate__animated animate__fadeInUp  animate__slower');
          $('div.folha2').addClass('animate__animated animate__fadeInUp  animate__slower');
         
        }
        if (direcao == "up") {
          $('div.folha1').removeClass('animate__animated animate__fadeInUp ');
          $('div.folha3').removeClass('animate__animated animate__fadeInUp ');
          $('div.camarao').removeClass('animate__animated animate__fadeInUp  animate__slow');
          $('div.tomate').removeClass('animate__animated animate__fadeInUp   anomate__slow ');
          $('div.queijo').removeClass('animate__animated animate__fadeInUp  animate__slower');
          $('div.folha2').removeClass('animate__animated animate__fadeInUp  animate__slower');
        }
        
  },{
     offset:'450px;'
  })
  $('section#pizza').waypoint(function(direcao){
       if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated  animate__fadeInUp   animate__slow');
        
       }
       if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated  animate__fadeInUp   animate__slow');
       }
  },{
    offset:'450px;'
})
 $('section#testemunha').waypoint(function (direcao){
     if (direcao == 'down'){
          $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
          $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slowe');
          $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
     }
     if (direcao == 'up'){
          $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
          $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slowe');
          $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
     }
 },{
   offset:'450px;' 
 })
 $('div#transicao-testemunha-plano').waypoint(function (direcao) {
    if (direcao =='down' ) {
         $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow');
         $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow');
         $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        $('div#decoracao1').removeClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeIn animate__slow');
        $('div#decoracao3').removeClass('animate__animated animate__fadeInRight animate__slow');
    }
 },{
  offset:'700px;'   
 });