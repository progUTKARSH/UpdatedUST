class Timer & Timer
{

    constructor(durationInput, startButton, pauseButton)
    {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }
    start()
    {
     this.importMethodTocall();  
    }  
    importMethodTocall(){
        console.log('IMPORTANT THING WAS DONE');
    }  
}
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pauseButton');

const timer = new Timer(durationInput, startButton, pauseButton );
timer.start();
