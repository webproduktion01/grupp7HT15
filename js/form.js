$(document).ready(function() {
    $("#contact_name").blur('input', function() {
        $(this).addClass("invalid");
    });
    
    $('#contact_name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");

        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("This field is required");
        }
    });

    // Email must be an email
    $("#contact_email").blur('input', function() {
        $(this).addClass("invalid");
    });
    
    $('#contact_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");


        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("A valid email address is required");
        }
    });
    
    // Must be a valid telephone number
    $("#contact_tel").blur('input', function() {
        $(this).addClass("invalid");
    });


    $('#contact_tel').on('input', function() {
        var input = $(this);
        var re = /^\d{3,14}$/; // regex for telephone number that are 3 to 14 digits long
        var is_tel = re.test(input.val());
        if (is_tel) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("A valid number is required");
        }
    });

    // Message can't be blank
    $("#contact_message").blur('input', function() {
        $(this).addClass("invalid");
    });
    
    $('#contact_message').keyup(function() {
        var input = $(this);
        var message = $(this).val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next('SPAN').text("This field is required");
        }
    });

    $("#contact_submit button").click(function(event) {});
});