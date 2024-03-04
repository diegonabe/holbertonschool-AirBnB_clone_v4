$(document).ready(function() {
    // Variable to store the checked amenities
    var checkedAmenities = {};

    // Function to update the list of checked amenities
    function updateCheckedAmenities() {
        // Clear the previous content
        $('div#Amenities h4').empty();

        // Get the checked amenity IDs and names
        var checkedIDs = Object.keys(checkedAmenities);
        var checkedNames = Object.values(checkedAmenities);

        // Update the h4 tag with the list of checked amenities
        $('div#Amenities h4').text("Amenities: " + checkedNames.join(", "));
    }

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        // Get the Amenity ID and name from the data attributes
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Add the Amenity ID to the variable
            checkedAmenities[amenityID] = amenityName;
        } else {
            // Remove the Amenity ID from the variable
            delete checkedAmenities[amenityID];
        }

        // Update the list of checked amenities
        updateCheckedAmenities();
    });
});
