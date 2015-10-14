$(document).ready(function() {
    $("#contact_name").blur('input', function() {
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
        var input = $(this);
        var re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,5}$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("Example: janedoe@example.com");
        }
    });


    $('#contact_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,5}$/;
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

    /* Blur listener(when user exits inputfield */
    $("#contact_tel").blur('input', function() {
        var input = $(this);
        // regex for telephone number that are 3 to 14 digits long
        var re = /^\d{3,14}$/;
        var numberAndSpace = /^(\d|\s){3,18}$/;
        var inputIsNumbersAndSpaces = numberAndSpace.test(input.val());
        console.log("is " + input.val() + "digits&spaces? : " + inputIsNumbersAndSpaces);
        //regex to find all numbers in a string
        var findNumbers = /\d/g;
        //console.log(findNumbers.test(inputIsNumbersAndSpaces));
        if (inputIsNumbersAndSpaces) {
            //Sets input text to the numbers we find with the regex.(aka removes spaces)
            //var onlyNumbers = input.val().replace(findNumbers.match(input.val()),'');
            var newString = "";
            $(input.val().match(findNumbers)).each(function() {
                newString += this;
            });
            //console.log("Only numbers: "+newString);
            if (re.test(newString))
                input.val(newString);
        }
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

    // /^(\d{3,14}|\s{0,4})$/

    // ^(\(?\d{3}\)?\-?\d{3}\-?\d{4})$


    $('#contact_tel').on('input', function() {
        var input = $(this);
        // regex for telephone number with spaces
        var re = /^(\d|\s){3,18}$/;
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
        var input = $(this);
        var message = input.val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("This field is required");
        }
    });

    $('#contact_message').keyup(function() {
        var input = $(this);
        var message = input.val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
            input.next().text("");
        }
        else {
            input.removeClass("valid").addClass("invalid");
            input.next().text("This field is required");
        }
    });
    //Function listener
    $("#contact_submit button").click(function(event) {
        var correct = true;

        /*
            Iterates through all input fields in form to
            check if their value either is nothing("") or
            if they are invalid.
            If so sets correct to false.(hence form is not valid)
        */
        $("#contact_form").find(":input").each(function() {
            var input = $(this);
            //We do not want to check the submit buttons value
            if (this.id === "submit_button") {

            }
            else if (input.val() === "" || input.hasClass("invalid")) {
                console.log(this.id + " : " + this + "=" + input.val());
                correct = false; //if a invalid input is found
                input.next().text("Check this input");
            }
        });

        //prevents event that submits form from realizing
        event.preventDefault();
        /* If something is incorrectly filled in*/
        if (!correct) {
            return false;
        }
        /* If everything is correctly filled in*/
        else {
            //warning message that form is not valid next to submit button
            //$("#contact_submit button").next().text("");
            $("#nameValue").text($("#contact_name").val());
            $("#emailValue").text($("#contact_email").val());
            $("#telValue").text($("#contact_tel").val());
            $("#messageValue").text($("#contact_message").val());
            console.log($("#telValue").val());


            /* Set all fields to readonly so user does not edit them while popup is up*/
            $("#contact_form").find(":input").each(function() {
                var input = $(this);
                //Button sets to clickable(need to be done since if someone cancels its unclickable)
                if (this.id === "submit_button") {
                    input.prop("disabled", true);
                }
                else {
                    //Sets readonly on all input fields
                    input.prop("readonly", true);
                }
            });
            //Fades out everything visible except our popupmessage
            $("main").fadeTo(200, 0.2, function() {
                $("#popupMessage").show();
            });

            //return true;
        }

    });
    /* Click listener on confirm button */
    $("#confirm").click(function(event) {
        /* Submit form */
        $("#contact_form").submit();

    });
    /* Click listener on cancel button */
    $("#cancel").click(function(event) {
        /* Hide confirm popup*/
        $("#popupMessage").hide();
        //Fades in main again
        $("main").fadeTo(200, 1, function() {
            //Iterates all input fields in form
            $("#contact_form").find(":input").each(function() {
                var input = $(this);
                //We want the input button to be unclickable
                if (this.id === "submit_button") {
                    input.prop("disabled", false);
                }
                else {
                    //Sets readonly on all input fields
                    input.prop("readonly", false);
                }
            });
        });
    });
});
