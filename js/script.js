$(document).ready(function() {
    // Open the modal when the subscribe button is clicked
    $('#subscribe-btn').click(function() {
        $('#newsletter-modal').fadeIn();  // Show modal with fade effect
    });

    // Close the modal when the close button is clicked
    $('#close-btn').click(function() {
        $('#newsletter-modal').fadeOut();  // Hide modal with fade effect
    });

    // Optional: Close the modal if the user clicks outside the modal
    $(window).click(function(event) {
        if ($(event.target).is('#newsletter-modal')) {
            $('#newsletter-modal').fadeOut();
        }
    });

    // Handle form submission
    $('#newsletter-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        var email = $('#email').val(); // Get the email value

        if (email) {
            // Show confirmation message
            $('#confirmation').fadeIn(); 

            // Hide the modal after subscribing
            $('#newsletter-modal').fadeOut();

            // Clear the email field
            $('#email').val('');
        }
    });
});