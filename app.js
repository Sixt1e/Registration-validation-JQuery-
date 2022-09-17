$(document).ready(function() {
$('#registration').validate ({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            rangelength: [10,16]
        },
        confirm_password: {
            equalTo: '#password'
        }
    },

    messages: {
        email: {
            required: 'Please enter your email address.',
            email: 'Incorrect email address.'
        },
    password: {
        required: 'Enter password.',
        rangelength: 'Password must be between 10 and 16 characters.'
    },
    confirm_password: {
        equalTo: 'Passwords do not match.'
    }
    }
})
});