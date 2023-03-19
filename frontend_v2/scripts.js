$(document).ready(function() {
    $('#create-project-button').click(function() {
        alert("Project created successfully with name: "
            + $('#project-name').val()
            + " and user: "
            + $('#user-name').val()
        )
    });
});