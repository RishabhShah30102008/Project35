var dog, dogImage, happyDog, database, foodS, foodStock;

function preload()
{

  dogImage = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");

}

function setup() {

  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(250,300,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  foodS = 20

}


function draw() {
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
     
    foodS = foodS-1;
    dog.addImage(happydog);

  }

  drawSprites();

  fill("red");
  textSize(20);
  text("Food Left : " + foodS,150,150);
  text("Note : Press UP_ARROW to Feed Drago Milk",50,50);

}

function readStock(data){


}

function writeStock(x){

  if(x <= 0){
   
    x = 0;
    
  }

  else{

    x = x - 1;

  }

  database.ref('/').update({

    Food : x

  })

}
