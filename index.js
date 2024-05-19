let night=0;

let root=document.documentElement;



function day_night(){
   const moon=document.getElementById("night");
   const nigspan=document.getElementById("nigspan");
   if(night==0){
    moon.style.marginLeft="50%";
    moon.style.backgroundColor="black"
    nigspan.style.color="white";
    nigspan.innerHTML="Day"
    root.style.setProperty("--day-backgroundcolor","black");
    root.style.setProperty("--day-color","white");
    root.style.setProperty("--day-border","gray");
    night=1;
   }else{
    moon.style.marginLeft="0%";
    moon.style.backgroundColor="rgb(201, 201, 225)"
    nigspan.style.color="black";
    nigspan.innerHTML="Night"
    root.style.setProperty("--day-backgroundcolor","rgb(188, 220, 237)");
    root.style.setProperty("--day-color","black");
    root.style.setProperty("--day-border","rgb(24, 3, 3)");
    night=0;
   }
   
}