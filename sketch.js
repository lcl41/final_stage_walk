let chara;

let x = 400;
let y = 800;
let w = 600;
let h = 60;

let stage = 0;

//----여기에 room1,3,4에 대한 변수 설정값을 넣었었는데, 충돌일어나서 없애논 상태암 
//---마우스클릭해서 넘어가지 않고, 특정 지점에 마우스를 갖다대면 저절로 넘어가게 작동되고 있음
//---

function setup() {
  createCanvas(800, 800);
  strokeWeight(7);

  chara = createSprite(400, 150, 50, 100);
  let myAnimation = chara.addAnimation('floating', 'standing1.png', 'standing2.png', 'standing3.png');
  myAnimation.offY = 18;
  chara.addAnimation('moving', 'leftwalk.png');
  chara.position.a = width / 2;
  chara.position.b = height / 2;
}

function draw() {

  if (stage == 0) {
  //--passage space--
    console.log(chara.position.x, chara.position.y); //326, 400

    background(200);
    fill(20, 20, 100);
    line(0, 600, 1200, 600);

    fill(150, 20, 20);
    rect(200, 300, 150, 300, 10);
    fill(20, 50, 150);
    rect(400, 300, 150, 300, 10);
    // line(200,550,400,550);
    fill(10);
    rect(600, 300, 150, 300, 10);
  

//--chara animation--
    if (mouseX < chara.position.x - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      chara.mirrorX(-1);
      //negative x velocity: move left
      chara.velocity.x = -2;
    } else if (mouseX > chara.position.x + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.mirrorX(1);
      chara.velocity.x = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.x = 0;
    }

    if (mouseY < chara.position.y - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      //negative x velocity: move left
      chara.velocity.y = -2;
    } else if (mouseY > chara.position.y + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.velocity.y = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.y = 0;
    }

    if (chara.position.x < 200)
      chara.position.x = 200;
    if (chara.position.y < 400)
      chara.position.y = 400;
    if (chara.position.x > width - 200)
      chara.position.x = width - 200;
    if (chara.position.y > height - 200)
      chara.position.y = height - 200;

    drawSprites();

    //--next stage click--
    console.log(dist(chara.position.x, chara.position.y, 300, 400));
    if (dist(chara.position.x, chara.position.y, 300, 400) < 30) {
      console.log("가까이 갔는데 왜", stage);
      stage = 1;
    }
  } else if (stage == 1) {
    
    //---------------------------------------room1-----------------------------------
    
    let GRAVITY = -0.2;
    rectMode(CENTER);
    strokeWeight(7);  
    background(200);
    fill(20, 20, 100);
    line(0, 0, width, height);
    line(0, 800, 800, 0);
    fill(200);
    rect(400, 400, 500, 500, 10, 10);
    fill(20, 50, 150);
    rect(405, 405, 440, 440);

    
    //fish_draw
    fill(153);

    noStroke();
    arc(350, 300, 80, 80, 0, radians(270));
    strokeJoin(ROUND);
    rect(290, 290, 60, 60, 20);
    triangle(291, 350, 250, 330, 280, 370);

    fill(102);
    arc(400, 500, 80, 80, radians(180), radians(450));
    rect(410, 450, 70, 70, 20);
    triangle(460, 480, 500, 470, 510, 530);

    fill(230);
    arc(250, 580, 80, 80, radians(190), radians(150));
    rect(260, 565, 70, 70, 20);
    triangle(320, 590, 350, 600, 350, 560);

    fill(250);
    ellipse(340, 300, 10, 10);
    ellipse(410, 490, 10, 10);
    ellipse(260, 600, 10, 10);
    stroke(0);

    fill(0);
    ellipse(400, 20, 600, 200);

    push();
    fill(0);
    textAlign(CENTER);
    text('Spit out', width / 2, height - 20);


    for (var i = 0; i < allSprites.length; i++) {
      var mySprite = allSprites[i];

      //adding a speed at 90 degrees (down)
      //equivalent to: mySprite.velocity.y += GRAVITY;
      mySprite.addSpeed(GRAVITY, 90);

      //even if they are out of the canvas, sprites keep getting updated
      //consuming precious memory
      //use Sprite.remove() to remove a sprite from the sketch
      if (mySprite.position.y > height + 100)
        mySprite.remove();
    }

    if (frameCount % 10 == 0)
      print('Sprite in the scene: ' + allSprites.length);

    //draw the sprites
    drawSprites();
    
    
   

    //--next stage--
    // fill(120);
    // rect(300,500,500,800);
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      fill(50);
    } else {
      fill(150, 50, 50);
    }
    rect(x, y, w, h);
    // console.log(dist(chara.position.x, chara.position.y, 300, 50));
    // if (dist(chara.position.x, chara.position.y, 300, 50) < 30) {
    //   console.log("가까이 갔는데 왜", stage);
    //   stage = 0;    

  } else if (stage == 2) {
//--우선 작동안되서 빼놓음--------------

  } else if (stage == 3) {
  //------------------------------room3-----------------------------------------------------
    console.log(chara.position.x, chara.position.y);
    let stretchy;
    let face;
    let tear;
    let a = [];
    let b = [];

    background(0);
    stroke(255);
    line(450, 0, 450, 800);
    triangle(900, 800, 450, 600, 20, 800,10);
  
    fill(0);
    textAlign(CENTER);
    text('so sad', width/2, height-20);

    face = loadImage('eye.png');
    push();
    fill(255);
    for (let i = 0; i < 3000; i++) {
        a[i] = random(800, 0);
        b[i] = random(1000, 100);
    
      }
    pop();
    stretchy = createSprite(400, 200, 10, 10);

    stretchy.draw = function() {
      fill(0);
  
      push();
      rotate(radians(this.getDirection()));
      ellipse(5, 5, 100+this.getSpeed(), 100-this.getSpeed());
      pop();
  
     
      image(face, this.deltaX*2, this.deltaY*2);
    };
  
    stretchy.maxSpeed = 20;
  
    for(let i = 0; i < a. length; i++){
      b[i] += random(5);
      // let b = i ;
      if(b[i]> height){
          b[i] = b[i]- height;
      }
      
      rect(a[i], b[i], 0.5, 20);
    }
  
    //mouse trailer, the speed is inversely proportional to the mouse distance
    stretchy.velocity.a = (mouseX-stretchy.position.a)/5;
    stretchy.velocity.b = (mouseY-stretchy.position.b)/10;
  
    drawSprites();

    //--next stage click--
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      fill(50);
    } else {
      fill(50, 100, 150);
    }
    rect(x, y, w, h);
  //  -----------------------------여기 충돌일어남, room4도 마찬가지---------
    // if (dist(chara.position.x, chara.position.y, 450, 430) < 30) {
    //   console.log("가까이 갔는데 왜", stage);
    //   stage = 3;

  } else if (stage == 4) {
    //----------------------------------------room4--------------------------------
    // var ghost;
    // var direction = 90;

          //create the sprites
      ghost = createSprite(600, 200, 50, 100);
      ghost.addAnimation('floating', 'blue1.png', 'blue2.png', 'blue3.png');
  
      for(let y = 0; y <= height; y += 40){
      for (let x = 0; x <= width; x += 40){
      fill(random(100, 100, 250) , random(10,200,200) , random(150, 255, 255));
      rect (x, y, 40,40);
          } 
        }


    fill(20, 20, 100);
    line(0, 0, width, height);
    line(0, 800, 800, 0);
    fill(0);
    // noFill();
    rect(400, 400, 500, 500, 10, 10);
    // fill(20, 50, 150);
    rect(405, 405, 440, 440);


    push();
    ghost.attractionPoint(0.2, mouseX, mouseY);
    ghost.maxSpeed = 7;
    pop();

    drawSprites();
 
       //--next stage click--
       if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill(50);
      } else {
        fill(50, 100, 150);
      }
      rect(x, y, w, h);
      // if (dist(chara.position.x, chara.position.y, 400, 700) < 30) {
      //   console.log("가까이 갔는데 왜", stage);
      //   stage = 4;
}

}



//--room1---
function mousePressed() {
  if (stage == 1) {
    //I create a sprite at mouse position
    var newSprite = createSprite(mouseX, mouseY);

    //assign an animation
    newSprite.addAnimation('normal', 'images/g1.png', 'images/g2.png', 'images/g3.png', 'images/g4.png', 'images/g5.png', 'images/g6.png');

    //and set it to a random frame
    newSprite.animation.stop();
    var f = round(random(0, newSprite.animation.getLastFrame()));
    newSprite.animation.changeFrame(f);
    pop();


    if (mouseX < chara.position.x - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      chara.mirrorX(-1);
      //negative x velocity: move left
      chara.velocity.x = -2;
    } else if (mouseX > chara.position.x + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.mirrorX(1);
      chara.velocity.x = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.x = 0;
    }

    if (mouseY < chara.position.y - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      //negative x velocity: move left
      chara.velocity.y = -2;
    } else if (mouseY > chara.position.y + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.velocity.y = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.y = 0;
    }

    if (chara.position.x < 200)
      chara.position.x = 200;
    if (chara.position.y < 470)
      chara.position.y = 470;
    if (chara.position.x > width - 200)
      chara.position.x = width - 200;
    if (chara.position.y > height - 200)
      chara.position.y = height - 200;

    drawSprites();

  } else if (stage == 3) {
    
  
    //---------chara animation-------------------
    if (mouseX < chara.position.x - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      chara.mirrorX(-1);
      //negative x velocity: move left
      chara.velocity.x = -2;
    } else if (mouseX > chara.position.x + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.mirrorX(1);
      chara.velocity.x = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.x = 0;
    }
  
    if (mouseY < chara.position.y - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      //negative x velocity: move left
      chara.velocity.y = -2;
    } else if (mouseY > chara.position.y + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.velocity.y = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.y = 0;
    }
  
    if (chara.position.x < 200)
      chara.position.x = 200;
    if (chara.position.y < 600)
      chara.position.y = 600;
    if (chara.position.x > width-200)
      chara.position.x = width-200;
    if (chara.position.y > height-200)
      chara.position.y = height-200;
  
    drawSprites();

  } else if (stage == 4) {
    if (mouseX < chara.position.x - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      chara.mirrorX(-1);
      //negative x velocity: move left
      chara.velocity.x = -2;
    } else if (mouseX > chara.position.x + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.mirrorX(1);
      chara.velocity.x = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.x = 0;
    }
  
    if (mouseY < chara.position.y - 10) {
      chara.changeAnimation('moving');
      //flip horizontally
      //negative x velocity: move left
      chara.velocity.y = -2;
    } else if (mouseY > chara.position.y + 10) {
      chara.changeAnimation('moving');
      //unflip
      chara.velocity.y = 2;
    } else {
      //if close to the mouse, don't move
      chara.changeAnimation('floating');
      chara.velocity.y = 0;
    }
  
    if (chara.position.x < 200)
      chara.position.x = 200;
    if (chara.position.y < 500)
      chara.position.y = 500;
    if (chara.position.x > width-200)
      chara.position.x = width-200;
    if (chara.position.y > height-200)
      chara.position.y = height-200;
  
    drawSprites();
  }
  
}
