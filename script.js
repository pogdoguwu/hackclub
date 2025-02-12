document.querySelector(".contact-form").addEventListener("submit", function(event) {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let fileInput = document.querySelector("#file-upload");
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
        return;
    }
    
    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let fileSize = file.size / 1024 / 1024; // Convert bytes to MB
        let fileType = file.type;

        if (!fileType.startsWith("image/")) {
            alert("Only image files are allowed.");
            event.preventDefault();
            return;
        }

        if (fileSize > 5) { // Restrict file size to 5MB
            alert("File size must be less than 5MB.");
            event.preventDefault();
            return;
        }
    }

    alert("Commission request submitted successfully!");
});
