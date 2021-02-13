var dog, sadDog, happyDog;

var FeedTheDogButton, AddTheFoodButton;

var food, foodS;

var foodStock = 0;

var database;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() 
{
  
  createCanvas(1000,400);

  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food();

  FeedTheDogButton = createButton("Feed The Dog");
  FeedTheDogButton.position(250, 100);
  AddTheFoodButton = createButton("Add The Food");
  AddTheFoodButton.position(400, 100);

}

function draw() 
{
  
  background(46,139,87);

  food.display();

  FeedTheDogButton.mousePressed(function()

    {

      feedDog();

    }

  )
  AddTheFoodButton.mousePressed(function()

    {

      addFood();

    }

  )
  
  drawSprites();

}

//function to read food Stock


//function to update food stock and last fed time
function feedDog()
{

  dog.addImage(happyDog);

  if(food.getFoodStock() <= 0)
  {

    food.updateFoodStock(food.getFoodStock() * 0);

  }
  else
  {

    food.updateFoodStock(food.getFoodStock() * -1);

  }

}

//function to add food in stock
function addFood()
{

  foodStock++;

  database.ref('/').update(

    {

      foodStock: foodStock

    }

  )

}