/*var button1 = new Audio();
button1.src = "button1.mp3";*/

function play(sound) {
	var audio = document.getElementById("audio");
	audio.setAttribute("src", sound);
	audio.play();
	audio.loop= true;
}	

function pause(sound){
	var audio = document.getElementById("audio");
	audio.setAttribute("src", sound);
	audio.pause();
}
/* function drawvolumecontroller(length,height,nowselected){    
    document.getElementById("volumcontroller").innerHTML = "";
    for (i=0;i<length;i++){
        magassag = 7 + Math.round((1.4)*(length - i)); 
        margintop = height-magassag;
        if (margintop <= 0) {margintop=0;}
        if (i >= nowselected){        
            document.getElementById("volumcontroller").innerHTML = 
            document.getElementById("volumcontroller").innerHTML + 
            '<div  onmouseup="volumecontrolchanged(' + i + 
            ')" style="background-color:Maroon;height:' + magassag + 
            'px;margin-top:'+margintop+'px;" class="volumecontrollerbar"></div>';
        } else {
            document.getElementById("volumcontroller").innerHTML = 
            document.getElementById("volumcontroller").innerHTML + 
            '<div  onmouseup="volumecontrolchanged(' + i + 
            ')" style="height:'+magassag+'px;margin-top:' + margintop + 
            'px;"class="volumecontrollerbar"></div>';
        }        
    }    
}
function volumecontrolchanged(newvolume){
    drawvolumecontroller(20,60,newvolume);
    document.getElementById("volumeindicator").innerHTML = newvolume;
} */

/* class Sound {
  
  constructor(context) {
    this.context = context;
  }
  
  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
            
    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime);
  }
  
  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
  }
 
}

let context = new (window.AudioContext || window.webkitA udioContext)();*/
