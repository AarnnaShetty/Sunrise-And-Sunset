const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(30);
    if(hour>=12){ text("Time : "+ hour%12 + " PM", 50,100);
}else if(hour==0){ text("Time : 12 AM",100,100);
}else{ text("Time : "+ hour%12 + " AM", 50,100);
}


}

async function getBackgroundImg(){

 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
        
    if(hour>=0400 && hour<=0600){
        bg = "sunrise1.png";
    }
    else if(hour>=0600 && hour<=0800){
        bg = "sunrise2.png";
    }
    else if(hour>=0800 && hour<=1100){
        bg = "sunrise3.png";
    }
    else if(hour>=1100 && hour<=1300){
        bg = "sunrise4.png";
    }
    else if(hour>=1300 && hour<=1500){
        bg = "sunrise5.png";
    }
    else if(hour>=1500 && hour<=1700){
        bg = "sunrise6.png";
    }
    else if(hour>=1700 && hour<=1800){
        bg = "sunset7.png";
    }
    else if(hour>=1800 && hour<=2000){
        bg = "sunset8.png";
    }
    else if(hour>=2000 && hour<=2300){
        bg = "sunset9.png";
    }
    else if(hour>=2300 && hour<=000){
        bg = "sunset10.png";
    }
    else if(hour>=0000 && hour<=0300){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }


    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
    
