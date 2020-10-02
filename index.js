/*for (var i=0; i<document.querySelectorAll('button').length; i++){
    
    document.querySelectorAll('button')[i].addEventListener('click',function(){alert('I got clicked')})
}*/

i=0
while(i<document.querySelectorAll('.drum').length){

    console.log(i);
    document.querySelectorAll('button')[i].addEventListener('click',/*makesound(this.innerHTML)*/function(){
        makesound(this.innerHTML);  buttonanimation(this.innerHTML)});
    
    
    i++;}

    
    
        
   
    
        
    
document.addEventListener('keydown',/*makesound(event.key)*/function(event){
    makesound(event.key);buttonanimation(event.key)}
);



function makesound(key){  
    console.log(key);          
    switch(key){
        case "w":
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play()
        break;
        case "a":
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play()
        break;
        case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play()
        break;
        case "d":
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play()
        break;
        case "j":
        var snare=new Audio('sounds/snare.mp3');
        snare.play()
        break;
        case "k":
        var crash=new Audio('sounds/crash.mp3');
        crash.play()
        break;
        case "l":
        var kickbass =new Audio('sounds/kick-bass.mp3');
        kickbass.play()
        break;
        default:console.log(this.innerHTML)}};


        function buttonanimation(activekey){
            console.log(activekey);
            document.querySelector('.'+activekey).classList.add('pressed');
            setTimeout(function(){document.querySelector('.'+activekey).classList.remove('pressed')},100);
        }


        
    
   
   


