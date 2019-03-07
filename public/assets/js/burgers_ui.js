// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

    $(".change-devoured").on("click", function (event) {
        console.log('devour clicked');
        var id = $(this).data("id");
        console.log(id);
        var newDevour = 1;
        console.log(newDevour);


        var newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                // console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newDevour = {
            burger_name: $("#burger_name").val().trim()
        };

        // console.log(burger_name);

        // Send the POST request.
                        // Reload the page to get the updated list
        $.ajax("/api/burgers", {
            type: "POST",
            data: newDevour
        }).then(
            function () {
                // console.log("created new burger");
                location.reload();
            }
        );
    });

});
