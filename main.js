

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
})

Webcam.attach("#camera")

function capimage(){
    Webcam.snap(function(datapic){
        document.getElementById("snapshot").innerHTML = "<img id='imagecap' src='"+ datapic + "'>"
    })
}

console.log("ml5 version:",ml5.version)

classifyer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tolN4638h/model.json",modelloaded)

function modelloaded(){
    console.log("model has loaded")
}

function idimage(){
    img=document.getElementById("imagecap")
    classifyer.classify(img, gotresult)
}

function gotresult(error, results){
    if(error){
       console.log(error) 
    }
    else {
        console.log(results)
        document.getElementById("object").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}