// get id's of buttons
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");


// text to speech API and get all elements to be spoken
const textToSpeech = window.speechSynthesis;
const content = document.querySelectorAll(".speech");


//read content
startBtn.onclick = function() {
    //prevent overlap, if read btn has already been clicked
    if(textToSpeech.speaking){
        console.warn("already speaking...");
        return;
    }
    // combines txt from multiple elements with class = speech
    let fullText = "";

    // looop through the txt to be spoken and add space btn elements and append it to full text
    for(let i = 0; i < content.length; i++){
        fullText += content[i].innerText + ". ";
    }
    let phoneticTxt = fullText.replace(" MALAWU NWABISA", " mah-lah-wuh-wah-b-sah");
    // create utterance object
    // let utterance = new SpeechSynthesisUtterance(fullText);
    let utterance = new SpeechSynthesisUtterance(phoneticTxt);
    textToSpeech.speak(utterance);
};
// stop reading content
stopBtn.onclick = function() {
    if(textToSpeech.speaking){
        textToSpeech.cancel();
    }
};
