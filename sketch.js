  // variavies
  let cor;
  let circuloX;
  let circuloY;
  
  
    //config program e nomeação variaveis
  function setup() {
    
    createCanvas(500, 500);
    background(color(55, 45, 66));
    cor = color(random(0, 255), random(0, 255), random(0, 255));
    
    circuloX = [10, 10, 10, 10];
    circuloY = [random(0,500), random(0, 500), random(0, 500), random(0, 500)];
    
    
    
    
    textFont('Comic Sans MS');
      textAlign(CENTER, TOP);
      textSize(40); 
      textStyle(BOLD)
  }
  
  
  
  
    //ordem de desenhar na tela
  function draw() {
    fill(cor);
    
    for(let contador in circuloX) {
      circle(circuloX[contador], circuloY[contador], 50);
      circuloX[contador] += random(0, 3);
      circuloY[contador] += random(-2, 2);
      
      
      
      if(circuloX[contador] >= width){
        circuloX[contador] = 0;
        circuloY[contador] = random(height);
      }
      
    }
    
    
    
    // mouse clicou, mudou de cor e escreveu.
    if (mouseIsPressed){ 
      line("black")
     text("Mudou de cor!", 250, 50);
    cor = color(random(0, 255), random(0, 255), random(0, 255)); 
    }
  }