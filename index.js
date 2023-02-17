var numDrum=document.querySelectorAll(".drum").length;


var audio = new Audio("sounds/OH MY GOD Sound Effect.mp3");

for (var looper=0;looper<numDrum;looper++){
    document.querySelectorAll(".drum")[looper].addEventListener("click",function(){
        
        var buttoninnerhtml=this.innerHTML;
        
        switch(buttoninnerhtml){
            case "w":
                var audio= new Audio("sounds/ohmygoddd.mp3");
                audio.play();
            break;
            
            case "a":
                var audio= new Audio("sounds/omg bruh oh hell Naw man wtf man.mp3");
                audio.play();
            break;
            
            case "s":
                var audio= new Audio("sounds/What the hell Oh my God no Way Sound Effect.mp3");
                audio.play();
            break;
            
            case "d":
                var audio= new Audio("sounds/Boi what the hell boi.mp3");
                audio.play();
            break;
            
            case "j":
                var audio= new Audio("sounds/Vine boom sound effect.mp3");
                audio.play();
            break;
            
            case "k":
                var audio= new Audio("sounds/Bing Chilling vine boom.mp3");
                audio.play();
            break;

            case "l":
                var audio= new Audio("sounds/full quandale dingle lore.mp3");
                audio.play();
            break;

            case "P":
                var audio= new Audio("sounds/siren meme  sound effect.mp3");
                audio.play();
            break;
            
            
            
            
            
            default:
                console.log(buttoninnerhtml);
        }
        
    });
}


