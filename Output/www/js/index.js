
$(document).on("pagecreate","#pageone",function(){   
  $('#submitButton').on("click", buttonClicked);       
});            


function buttonClicked() {
    var randomresult = random();
    document.getElementById("Output").innerHTML = randomresult;
    if (document.getElementById("Output").innerHTML == "true"){
        alert("hi");
        navigator.notification.beep(1); 
    }
    if (document.getElementById("Output").innerHTML == "false"){
        navigator.notification.beep(2); 
    }
}


function random() {
	return !Math.round(Math.random());  
}


