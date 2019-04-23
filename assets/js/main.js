// import $ from 'jquery';

$(function () {
    $(".form_reg").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            last_name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20
            },
            confirm_password: {
                required: true,
                equalTo: '#password'
            },
            check: "required"
        },
        messages: {
            first_name: {
                required: "Please enter your first name.",
                minlength: "The name must be at least 2 characters long.",
                lettersonly: "Please, enter only letters."
            },
            last_name: {
                required: "Please enter your last name.",
                minlength: "The name must be at least 2 characters long.",
                lettersonly: "Please, enter only letters."
            },
            email: {
                required: "Please enter an email.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Please enter a password.",
                minlength: "Your password must be at least 8 characters long.",
                maxlength: "Your password must be maximum 20 characters."
            },
            confirm_password: {
                required: "Please confirm your password.",
                equalTo: "The password must be the same as above."
            },
            check: "You cannot submit unless you agree with the conditions."
        },
        submitHandler: function (form) {
            $(form).submit();
        }
    });
});