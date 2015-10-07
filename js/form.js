$(document).ready(function() {
<<<<<<< HEAD
	$('#contact_name').on('input', function() {
		var input = $(this);
		var is_name = input.val();
		if (is_name) {
			input.removeClass("invalid").addClass("valid");
		}
		else {
			input.removeClass("valid").addClass("invalid");
		}
	});

	// Email must be an email
	$('#contact_email').on('input', function() {
		var input = $(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email = re.test(input.val());
		if (is_email) {
			input.removeClass("invalid").addClass("valid");
		}
		else {
			input.removeClass("valid").addClass("invalid");
		}
	});

	// Website must be a website
	$('#contact_tel').on('input', function() {
		var input = $(this);
		var re = "\\b\\d{3,14}\\b"; // regex for telephone number that are 3 to 14 digits long
		var is_tel = re.test(input.val());
		if (is_tel) {
			input.removeClass("invalid").addClass("valid");
		}
		else {
			input.removeClass("valid").addClass("invalid");
		}
	});

	// Message can't be blank
	$('#contact_message').keyup(function(event) {
		var input = $(this);
		var message = $(this).val();
		console.log(message);
		if (message) {
			input.removeClass("invalid").addClass("valid");
		}
		else {
			input.removeClass("valid").addClass("invalid");
		}
	});

	$("#contact_submit button").click(function(event) {});
=======
    $('#contact_name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
            $("#nameDetails").text("");
            
        }
        else {
            input.removeClass("valid").addClass("invalid");
            $("#nameDetails").text("This field is required");
        }
    });

    // Email must be an email
    $('#contact_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
             $("#emailDetails").text("");
            
            
        }
        else {
            input.removeClass("valid").addClass("invalid");
            $("#emailDetails").text("A valid email address is required");
        }
    });


    $('#contact_tel').on('input', function() {
        var input = $(this);
        var re = /^\d{3,14}$/; // regex for telephone number that are 3 to 14 digits long
        var is_tel = re.test(input.val());
        if (is_tel) {
            input.removeClass("invalid").addClass("valid");
             $("#telDetails").text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            $("#telDetails").text("A valid number is required");
        }
    });

    // Message can't be blank
    $('#contact_message').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid");
            $("#messageDetails").text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            $("#messageDetails").text("This field is required");
        }
    });

    $("#contact_submit button").click(function(event) {});
>>>>>>> ae459e0e03dc6337e6d7a77775497f2658918f80
});