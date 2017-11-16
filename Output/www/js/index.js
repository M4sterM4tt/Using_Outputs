
$(document).on("pagecreate","#pageone",function(){   
  $('#submitButton').on("click", buttonClicked);       
});            


function buttonClicked() {
    var randomresult = random();
    document.getElementById("Output").innerHTML = randomresult;
    if (randomresult == "true"){
        navigator.notification.beep(1); 
    }
    if (randomresult == "false"){
        navigator.notification.beep(2); 
    }
}


function random() {
	return !Math.round(Math.random());  
}



