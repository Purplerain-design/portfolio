// get id's of buttons
const stopBtn = document.querySelectorAll(".speech-stop-btns");
const startBtn = document.querySelectorAll(".speech-btns");


// text to speech API and get all elements to be spoken
const textToSpeech = window.speechSynthesis;
const content = document.querySelectorAll(".speech");


//read content

for(let i = 0; i < startBtn.length;i++){

    
startBtn[i].onclick = function() {
    //prevent overlap, if read btn has already been clicked
    if(textToSpeech.speaking){
        console.warn("already speaking...");
        return;
    }
    //stores all text to be read
    let fullText = "";

    // check button has a specific target section to read & get the data attribute( and use its text)
    const targetid = startBtn[i].getAttribute("data-target");
    if(targetid){
        const targetElement = document.getElementById(targetid);
        if(targetElement){
            const speechElems = targetElement.querySelectorAll(".speech");

            for(let i = 0; i < speechElems.length; i++){
                fullText += speechElems[i].innerText + ". ";
            }
        }
    }
    // create utterance object
    let utterance = new SpeechSynthesisUtterance(fullText);
    textToSpeech.speak(utterance);
};

}

// stop reading content
for(let i = 0; i < stopBtn.length;i++){
    stopBtn[i].onclick = function() {
    if(textToSpeech.speaking){
        textToSpeech.cancel();
    }
    };
}

