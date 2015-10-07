$(document).ready(function() {
	$('#contact_name').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

// Email must be an email
$('#contact_email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

// Website must be a website
$('#contact_tel').on('input', function() {
    var input=$(this);
	var re = "\\b\\d{3,14}\\b"; // regex for telephone number that are 3 to 14 digits long
	var is_tel=re.test(input.val());
	if(is_tel){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

// Message can't be blank
$('#contact_message').keyup(function(event) {
	var input=$(this);
	var message=$(this).val();
	console.log(message);
	if(message){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}	
});

$("#contact_submit button").click(function(event){
}); 
});