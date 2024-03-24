//https://teachablemachine.withgoogle.com/models/a2NQTkbi5/
function clicker(){

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a2NQTkbi5/model.json",modelReady);
    
    }
    
    function modelReady(){
    classifier.classify(gotResults);
    }
    
var dog=0;
var cat=0;
var lion=0;
var cow=0;

function gotResults(error,results){
if(error){

    console.log(error);

    }
else{
            
    console.log(results);

    var randomR = Math.floor(Math.random() * 255)+1;
    var randomG = Math.floor(Math.random() * 255)+1;
    var randomB = Math.floor(Math.random() * 255)+1;
    
document.getElementById("detectedNumberC").innerHTML="No. of times detected cat-"+cat;
document.getElementById("detectedNumberD").innerHTML="No. of times detected dog-"+dog;
document.getElementById("detectedNumberL").innerHTML="No. of times detected lion-"+lion;
document.getElementById("detectedNumberM").innerHTML="No. of times detected cow-"+cow;

document.getElementById("whatSound").innerHTML=results[0].label;
console.log((results[0].confidence*100 ).toFixed(2) +"%");

document.getElementById("detectedAudio").style.color="rgb("+randomR+","+randomG+","+randomB+")" ;
document.getElementById("detectedNumberC").style.color="rgb("+randomR+","+randomG+","+randomB+")" ;
document.getElementById("detectedNumberD").style.color="rgb("+randomR+","+randomG+","+randomB+")" ;
document.getElementById("detectedNumberL").style.color="rgb("+randomR+","+randomG+","+randomB+")" ;
document.getElementById("detectedNumberM").style.color="rgb("+randomR+","+randomG+","+randomB+")" ;

if(results[0].label=="Barking"){

    document.getElementById("imagee").src="dogBarking.gif";
    dog+=1;

}
else if(results[0].label=="Meowing"){

    document.getElementById("imagee").src="catMeowing.gif";
    cat+=1;

}
else if(results[0].label=="Mooing"){

    document.getElementById("imagee").src="cowMooing.gif";
    cow+=1;

}
else if(results[0].label=="Roaring"){

    document.getElementById("imagee").src="lionRoaring.gif";
    lion+=1;

}
else{

    document.getElementById("imagee").src="HearingImage.png";

}
 }
  }