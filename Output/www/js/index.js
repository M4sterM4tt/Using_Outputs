
$(document).on("pagecreate","#pageone",function(){   
  $('#submitButton').on("click", buttonClicked);       
});            


function buttonClicked() {
    var randomresult = random();
    document.getElementById("Output").innerHTML = randomresult;
    navigator.notification.beep(1);
}


function random() {
	return !Math.round(Math.random());  
}

