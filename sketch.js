//Create variables here
var dog, happyDog;
var database;
var foodS, foodstock;
function preload(){
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
 
	createCanvas(500, 500);

  database=firebase.database();
  d=createSprite(250, 300, 20, 20);
  d.scale=(0.1);
  d.addImage(dog);


  foodstock=database.ref('Food')
  foodstock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  
  textSize(20);
  fill("black");
  stroke("black");
  text("food remaining="+ foodS, 200, 250);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    d.addImage(happyDog);
    writeStock(foodS);
   foodS-=1;
   if(foodS<1){
    foodS=0;
  }
  }

  

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


