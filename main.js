//https://teachablemachine.withgoogle.com/models/yo4rdNNI_/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yo4rdNNI_/mode.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.log(error)
    } else {
        
    }
}