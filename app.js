$(document).ready(function() {
$('#registration').validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    },
})
});