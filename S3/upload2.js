function uploadAndClasifyImage(){
    var fileInput = document.getElementById('resnet34fileupload').files;
    if(!fileInput.length){
        return alert('Please choose a file to upload first');
}
    var file = fileInput[0];
    var filename=file.name;
    var formData=new FormData();
    formData.append(filename,file);
    console.log(filename);
    $.ajax({
         async: true,
         crossDomain : true,
         method: 'POST',
         url: 'https://s852dttr4c.execute-api.ap-south-1.amazonaws.com/dev/clasify_mobilenet', 
         
         data: formData,
         processData: false,
         contentType: false,
         mimeType: "multipart/form-data"
    })
    .done(function(response){
    console.log(response);
    document.getElementById("result").textContent=response;
    })
    .fail(function(){alert ("There was an error while sending prediction request to prediction model");});
 };
 $('#btnResnetUpload').click(uploadAndClasifyImage);
 
 
 
 function uploadAndClasifyImage_resnet(){
    var fileInput = document.getElementById('mobfileupload').files;
    if(!fileInput.length){
        return alert('Please choose a file to upload first');
}
    var file = fileInput[0];
    var filename=file.name;
    var formData=new FormData();
    formData.append(filename,file);
    console.log(filename);
    $.ajax({
         async: true,
         crossDomain : true,
         method: 'POST',
         url: 'https://8m6wsbefui.execute-api.ap-south-1.amazonaws.com/dev/clasify', 
         
         data: formData,
         processData: false,
         contentType: false,
         mimeType: "multipart/form-data"
    })
    .done(function(response){
    console.log(response);
    document.getElementById("result2").textContent=response;
    })
    .fail(function(){alert ("There was an error while sending prediction request to prediction model");});
 };
 $('#btnMobnetUpload').click(uploadAndClasifyImage_resnet);
 
 
 
 
 function uploadAlign_face(){
    var fileInput = document.getElementById('faceupload').files;
    if(!fileInput.length){
        return alert('Please choose a file to upload first');
}
    var file = fileInput[0];
    var filename=file.name;
    var formData=new FormData();
    formData.append(filename,file);
    console.log(filename);
    $.ajax({
         async: true,
         crossDomain : true,
         method: 'POST',
         url: 'https://4abhcwqp1k.execute-api.ap-south-1.amazonaws.com/dev/align_face', 
         
         data: formData,
         processData: false,
         contentType: false,
         mimeType: "multipart/form-data"
    })
    .done(function(response){
        console.log(response);
        var image = document.getElementById('result3');
        image.src = "https://face-rcognition-dev-serverlessdeploymentbucket-14i6n1pn5sxso.s3.ap-south-1.amazonaws.com/test1.png?t=" + new Date().getTime();
        
    })
    .fail(function(){alert ("There was an error while sending prediction request to prediction model");});
 };
 $('#btnFaceUpload').click(uploadAlign_face);