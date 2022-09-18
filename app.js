$(document).ready(function() {
$('#registration').validate ({
    rules: {

        name: {
            required: true,
        },

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
        },

        tel: {
            required: true,
            rangelength: [11, 15]
        },
    },

    messages: {

    name: {
        required: 'Please enter your name.'
    },
        
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
    },

    tel: {
        required: 'Please enter your phone number.',
        rangelength: 'Incorrect phone number.'
    }
    }
    
})
});