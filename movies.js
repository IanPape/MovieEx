$(document).ready(function() {
    $("#button").click(function() {
        let title = $("#title").val();
        let rating = $("#rating").val();

        if ( title.length >= 2 ) {

            if ( rating >=1 && rating <= 10 ) {
                console.log ("hi");
                let newLi = $("<li>" + title + " (" + rating + ") <button class='removeBtn'> X </button></li>");
               newLi.find('.removeBtn').click(function() {
    $(this).parent().remove(); // Remove the parent <li> when the remove button is clicked
});

        
                $("#newList").append(newLi);
                $('#title').val("");
                $('#rating').val("");} 
            else {
                alert ("Rating must be between 1 and 10");
        } } 
        else {
            alert (" Title must have at least 2 characters.")
        }
    });

    $("#sort").change(function() {
        let selectedOption = $(this).val();
        let items = $("#newList > li").get();

        // Sort the list based on the selected criteria
        if (selectedOption === "title") {
            items.sort(function(a, b) {
                return $(a).text().localeCompare($(b).text());
            });
        } else if (selectedOption === "rating") {
            items.sort(function(a, b) {
                let ratingA = Number($(a).text().match(/\d+/));
                let ratingB = Number($(b).text().match(/\d+/));
                return ratingA - ratingB;
            });
        }

        // Reorder the list items
        $("#newList").empty();
        for (let i = 0; i < items.length; i++) {
            $("#newList").append(items[i]);
        }
    });
});
