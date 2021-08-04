Webcam.set(
    {
     width:350,
     height:300,
    }
    )
camera=document.getElementById("camera");
Webcam.attach('#camera');
console.log('ml5 version:',ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]model.json',modelLoaded);
    function modelLoaded()
    {
      console.log('modelLoaded');
    }

    