
$(document).on("pagecreate","#pageone",function(){   
  $('#submitButton').on("click", buttonClicked);       
});            


function buttonClicked() {
    var randomresult = random();
    document.getElementById("Output").innerHTML = randomresult;
}


function random() {
	return !Math.round(Math.random());  
}

