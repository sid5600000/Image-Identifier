Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("photo_captured").innerHTML = "<img id='photo_captured' src='" + data_uri + "'/>";
    });
}
console.log("ML5 Version : " , ml5.version);

function modelLoaded(){
    console.log('modelLoaded');
};

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M2s5Baf_l/model.json',modelLoaded);



function check(){
    img = document.getElementById("photo_captured");
    classifier.classify(img,gotResult);
};

function gotResult(error,results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}