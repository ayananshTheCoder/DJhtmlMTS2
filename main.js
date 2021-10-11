var CHSong = "";
var RHSong = "";

function preload()
{
    CHSong = loadSound('CaptainHookInstrumental.mp3');
    RHSong = loadSound('RichInstrumental.mp3');
}

function setup()
{
    canvas = createCanvas(200,300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 200, 300);
}