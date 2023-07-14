// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){

const takeoff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground")
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
const landing = document.getElementById("landing")
const missionAbort = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
let imgObj = document.getElementById("rocket");
imgObj.style.position = "absolute";
imgObj.style.left = "0px";
imgObj.style.bottom = "0px";
let heightOfShuttle = 0;
//When the "Take off" button is clicked,

takeoff.addEventListener("click",function (){

   let takeoffButtom = window.confirm("Confirm that the shuttle is ready for takeoff");
   

   if(takeoffButtom === true){
    flightStatus.innerHTML = "Shuttle in flight."
    shuttleBackground.style.backgroundColor = "blue"
    spaceShuttleHeight.innerHTML = Number((heightOfShuttle + 10000));

   } 
  
   
})


landing.addEventListener("click",function(){

    if(flightStatus.innerHTML === "Shuttle in flight."){

        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = ("The shuttle has landed.");
        shuttleBackground.style.backgroundColor = "green"
        heightOfShuttle += 0;
        spaceShuttleHeight.innerHTML = heightOfShuttle
        imgObj.style.position = "absolute";
        imgObj.style.left = "0px";
        imgObj.style.bottom = "0px";
    
    }


})


missionAbort.addEventListener("click",function(){

    let userConfirmation = window.confirm("Confirm that you want to abort the mission.");
//     A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.

if (userConfirmation === true && flightStatus.innerHTML === "Shuttle in flight."){
    flightStatus.innerHTML = "Mission aborted";  
    shuttleBackground.style.backgroundColor = "green";
    heightOfShuttle += 0;
    spaceShuttleHeight.innerHTML = heightOfShuttle
    imgObj.style.position = "absolute";
    imgObj.style.left = "0px";
    imgObj.style.bottom = "0px";


}

})

upButton.addEventListener("click", function(){

    if (flightStatus.innerHTML === "Shuttle in flight."){

        if (parseInt(imgObj.style.bottom) < 250){

            movement = parseInt(imgObj.style.bottom)+10+"px"
            imgObj.style.bottom = movement;
            
    
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000;
        }
        
    }

})

downButton.addEventListener("click", function(){

    if (flightStatus.innerHTML === "Shuttle in flight."){

        if(parseInt(imgObj.style.bottom )> 0){

            movement = parseInt(imgObj.style.bottom)-10+"px"
            imgObj.style.bottom = movement;
            
    
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;
        }
        
    }

})

leftButton.addEventListener("click", function(){

    if (flightStatus.innerHTML === "Shuttle in flight."){
        if (parseInt(imgObj.style.left) > -30)
    
        movement = parseInt(imgObj.style.left)-10+"px"
        imgObj.style.left = movement;
        
    }

})

rightButton.addEventListener("click", function(){

    if (flightStatus.innerHTML === "Shuttle in flight."){
        if (parseInt(imgObj.style.left) < 270)
    
        movement = parseInt(imgObj.style.left)+10+"px"
        imgObj.style.left = movement;
        console.log(imgObj.style.left)
        
    }


})














})
