var sword, swordImg, fruitGroup, enemyGroup, appleFruit, pearFruit, enemy1, enemy2, randomDisplay, orangeFruit, bananaFruit;

var orangeImg, appleImg, pearImg, bananaImg, enemy1Img, enemy2Img;

var score = 0,
  gameOver, gameOverImg;

var knifeSound, gameOverSound

var position


//Game States
var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload() {
  //All the images will be loaded here
  swordImg = loadAnimation("sword.png");

  orangeImg = loadAnimation("fruit1.png");

  appleImg = loadAnimation("fruit2.png");

  pearImg = loadAnimation("fruit3.png");

  bananaImg = loadAnimation("fruit4.png");

  enemy1Img = loadAnimation("alien1.png");

  enemy2Img = loadAnimation("alien2.png");

  gameOverImg = loadAnimation("gameover.png");

  knifeSound = loadSound("knifeSwooshSound.mp3")

  gameOverSound = loadSound("gameover.mp3")
}

function setup() {

  createCanvas(400, 400);


  fruitGroup = createGroup();
  enemyGroup = createGroup();


  sword = createSprite(200, 100, 10, 10);
  sword.setCollider("rectangle", 25, -30, 50, 50, 35);
  sword.scale = 0.5;
  sword.addAnimation("sword", swordImg);


}

function draw() {
  background("lightblue");

  if (gameState === PLAY) {
    sword.y = mouseY;
    sword.x = mouseX;
    fruit();
    enemies();

    if (sword.isTouching(fruitGroup)) {
      knifeSound.play();
      score++;
      fruitGroup.destroyEach();
    }

    if (sword.isTouching(enemyGroup)) {
      gameOverSound.play();
      gameState = END;

    }

  }

  if (gameState === END) {
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    gameOver = createSprite(200, 200, 20, 20);
    gameOver.addAnimation("over", gameOverImg);

  }

  drawSprites();

  fill("gold");
  stroke("black");
  textSize(20);
  text("Score: " + score, 300, 20); //the score is displayed

  randomDisplay = Math.round(random(30, 370));
  var position = Math.round(random(1, 2));

  function orange() {

    position = Math.round(random(1, 2));
    orangeFruit = createSprite(randomDisplay, 420, 100, 2);
    orangeFruit.scale = 0.2;
    orangeFruit.velocityY = -8;
    orangeFruit.addAnimation("orange", orangeImg);
    orangeFruit.velocityY = -(7 + (score / 4));
    orangeFruit.lifetime = 220;
    fruitGroup.add(orangeFruit);


    if (position == 1) {
      orangeFruit.y = 400;
      orangeFruit.velocityY = +(7 + (score / 4));
    } else if (position == 2) {
      orangeFruit.y = 0;
      orangeFruit.velocityY = -(7 + (score / 4));
    }


  }

  function apple() {

    position = Math.round(random(1, 2));
    appleFruit = createSprite(randomDisplay, 420, 10, 10);
    appleFruit.scale = 0.2;
    appleFruit.addAnimation("apple", appleImg);
    appleFruit.velocityY = -8;
    appleFruit.velocityY = -(8 + (score / 4));
    appleFruit.lifetime = 220;
    fruitGroup.add(appleFruit);

    if (position == 1) {
      appleFruit.y = 400;
      appleFruit.velocityY = -(7 + (score / 4));
    } else if (position == 2) {
      appleFruit.y = 0;
      appleFruit.velocityY = (7 + (score / 4));
    }

  }

  function pear() {

    position = Math.round(random(1, 2));
    pearFruit = createSprite(randomDisplay, 420, 10, 10);
    pearFruit.scale = 0.2;
    pearFruit.addAnimation("pear", pearImg);
    pearFruit.velocityY = -8;
    pearFruit.velocityY = -(8 + (score / 4));
    pearFruit.lifetime = 220;
    fruitGroup.add(pearFruit);

    if (position == 1) {
      pearFruit.y = 400;
      pearFruit.velocityY = -(7 + (score / 4));
    } else if (position == 2) {
      pearFruit.y = 0;
      pearFruit.velocityY = (7 + (score / 4));
    }

  }

  function banana() {

    position = Math.round(random(1, 2));
    bananaFruit = createSprite(randomDisplay, 420, 10, 10);
    bananaFruit.scale = 0.18;
    bananaFruit.addAnimation("banana", bananaImg);
    bananaFruit.velocityY = -8;
    bananaFruit.velocityY = -(8 + (score / 4));
    bananaFruit.lifetime = 220;
    fruitGroup.add(bananaFruit);

    if (position == 1) {
      bananaFruit.y = 400;
      bananaFruit.velocityY = -(7 + (score / 4));
    } else if (position == 2) {
      bananaFruit.y = 0;
      bananaFruit.velocityY = (7 + (score / 4));
    }


  }

  function enemy_1() {
    position = Math.round(random(1, 2));

    enemy1 = createSprite(randomDisplay, 420, 10, 10);
    enemy1.addAnimation("enemy1", enemy1Img);
    enemy1.velocityY = -(8 + (score / 10));
    enemy1.velocityY = -8;
    enemy1.lifetime = 220;
    enemyGroup.add(enemy1);

    if (position == 1) {
      enemy1.y = 400;
      enemy1.velocityY = -(7 + (score / 4));
    } else if (position == 2) {
      enemy1.y = 0;
      enemy1.velocityY = (7 + (score / 4));
    }

  }

  function enemy_2() {
    position = Math.round(random(1, 2));

    enemy2 = createSprite(randomDisplay, 420, 10, 10);
    enemy2.addAnimation("enemy2", enemy2Img);
    enemy2.velocityY = -8;
    enemy2.velocityY = -(8 + (score / 10));
    enemy2.lifetime = 220;
    enemyGroup.add(enemy2);
    if (position == 1) {
      enemy2.y = 400;
      enemy2.velocityY = -(7 + (score / 4));
    } else if (position == 2) {
      enemy2.y = 0;
      enemy2.velocityY = (7 + (score / 4));
    }

  }

  function fruit() {

    if (frameCount % 40 === 0) {
      var select_fruit = Math.round(random(1, 4));
      switch (select_fruit) {
        case 1:
          orange();
          break;
        case 2:
          apple()
          break;
        case 3:
          pear();
          break;
        case 4:
          banana();
          break;
        default:
          break;

      }

    }

  }

  function enemies() {

    if (frameCount % 200 === 0) {
      var select_enemy = Math.round(random(1, 2));
      switch (select_enemy) {
        case 1:
          enemy_1();
          break;
        case 2:
          enemy_2();
          break;
        default:
          break;

      }

    }

  }

}