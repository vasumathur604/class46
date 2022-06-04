var backgroungImg;
var jet,jetImg;
var gun,gunImg;
var city,cityImg;
var bombmb,bombImg;
var bombShoot,shootImg;
var score=0;

function preload(){
backgroungImg=loadImage("images/background.jpg");
jetImg=loadImage("images/jet.png")
gunImg=loadImage("images/tope.png")
cityImg=loadImage("images/city.webp")
bombImg=loadImage("images/bomb.png")
shootImg=loadImage("images/shoot.png")
blastImg=loadImage("images/blast.png")
shootSound=loadSound("sound.mp3")
}

function setup(){
createCanvas(1580,850)

city=createSprite(1820,420)
city.addImage(cityImg)
city.scale=1.19
city.debug=true;

gun=createSprite(500,770)
gun.addImage(gunImg);
gun.scale=0.70

jetGroup=new Group();
bombGroup=new Group();

}


function draw(){
background(backgroungImg)
fill("black")
textSize(30)
text("score:"+score,90,105)

drawSprites();

//tope moving
    if(keyDown ("LEFT_ARROW")){
    gun.x-=5;}

    if(keyDown ("RIGHT_ARROW")){
    gun.x+=5;}

// shooting bomb
if(keyWentDown ("R")){
    

   bomb=createSprite(gun.x-28,gun.y-138)
     bomb.addImage(bombImg)
     bomb.velocityY=-10;
     bomb.scale=0.43;

     bombGroup.add(bomb);
 
    }

//jet touch city
//if(jetGroup.isTouching(city)){
  //  
    //  
        //city.destroy();
     //   bomb.destroy();
        //bombShoot.destroy();
      //  gun.destroy();
        //jetGroup.destroy();
    //r rr}

//bomb and jet

if(bombGroup.isTouching(jetGroup)){
    for(var i=0;i<jetGroup.length;i++){
    
    
        if(jetGroup[i].isTouching(bombGroup)){
            jetGroup[i].destroy();
            bombGroup.destroyEach();
        score=score+1;
        
           
    }
    }
    }
    



if(keyWentDown ("R")){
    bombShoot=createSprite(gun.x-38,gun.y-138)
    bombShoot.addImage(shootImg);
    bombShoot.scale=0.80
}
if(keyWentUp ("R")){
    bombShoot.destroy();
}
multijet();

drawSprites();
}


// mutiple jet
function multijet(){
    if(frameCount % 45===0){
        
var jet=createSprite(40,150)
    jet.addImage(jetImg);
    jet.scale=0.60

    jet.debug=true;
jet.velocityX=6
jet.y=Math.round(random(60,250))

jet.setCollider("rectangle",0,0,290,50)
jet.lifetime=1581

jetGroup.add(jet); 
}

}
