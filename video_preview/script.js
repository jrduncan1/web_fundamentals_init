console.log("page loaded...");

function over(video){
    video.controls = true;
    video.play();
}

function out(video){
    video.controls = false;
    video.pause();
}

