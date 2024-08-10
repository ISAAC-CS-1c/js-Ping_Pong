let xBolinha = 350;
let yBolinha = 200;
let diametro = 24;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro / 2 ;
let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
let Raquetada;
let Ponto;
let Trilha;

let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let xRaquete = 5;
let yRaquete = 150;

let RaqueteOponenteComprimento = 10;
let RaqueteOponenteAltura = 90;
let xRaqueteOponente = 584;
let yRaqueteOponente = 150;

function preload (){
  Trilha = loadSound("trilha.mp3");
  Ponto = loadSound("ponto.mp3");
  Raquetada = loadSound("raquetada.mp3");
  
}


function setup() {
  createCanvas(600, 400);
  Trilha.loop();
}

function draw() {
  background("DarkBlue");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete();
  mostrarRaqueteDeOponente();
  movimentoDaMinhaRaquete();
  colisaoRaqueteOponenteBiblioteca();
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoDeOponente();
  colisaoMinhaRaqueteBiblioteca();
  incluirPlacar ();
  contarPontos ();
}


 function mostraBolinha(){
     circle(xBolinha, yBolinha, diametro);
 }

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
   
 }
function verificaColisaoBorda(){
   
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    
  } 
  if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }
    }
  function mostrarRaquete (){
     rect(xRaquete,yRaquete , RaqueteComprimento, RaqueteAltura);
  }
  
  function movimentoDaMinhaRaquete () {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
    
  }                         
         if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
         }         
  }
 function mostrarRaqueteDeOponente (){
     rect(xRaqueteOponente,yRaqueteOponente , RaqueteComprimento, RaqueteAltura);
  }
 function movimentoDeOponente () {
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
    
  }                         
         if(keyIsDown(83)) {
    yRaqueteOponente += 10;
         }         
 }

function colisaoMinhaRaqueteBiblioteca () {
  colidiu =
  collideRectCircle(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    Raquetada.play();
  }
}
function colisaoRaqueteOponenteBiblioteca () {
  colidiu =
  collideRectCircle(xRaqueteOponente, yRaqueteOponente, RaqueteOponenteComprimento, RaqueteOponenteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    Raquetada.play();
  }
}
 function incluirPlacar (){
   stroke (255);
   textSize (16);
   fill("Darkorange");
   rect(150, 10, 40, 20);
   fill (255);
   text(meusPontos, 170, 26);
   fill (255);
   fill("Darkorange")
    rect(450, 10, 40, 20);
   fill (255);
   text(pontosOponente, 470,26);
 }
 function contarPontos (){
   if (xBolinha + raio > 598){
   Ponto.play();
   meusPontos += 1; 
 }
   {
     if (xBolinha + raio < 23){
   Ponto.play();
   pontosOponente +=1;
   }
 }
 }