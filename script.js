const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click",()=> {
    const dropdownMenu = document.querySelector("#dropdown> .menu");
    
    dropdownMenu.classList.toggle("open");
    dropdownToggle.classList.toggle("open");

});

document.addEventListener('DOMContentLoaded', function() {
    // Place Order Button
    const placeOrderButton = document.querySelector('.order-button');
    placeOrderButton.addEventListener('click', function() {
        // Add logic to validate and process order
        alert('Your order has been placed!');
        // Reset form or redirect user
    });

    // Cancel Order Button
    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel your order?')) {
            // Add logic to cancel order
            alert('Your order has been cancelled.');
            // Reset form or redirect user
        }
    });
});