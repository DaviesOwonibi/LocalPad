// Get the textarea element
const textarea = document.getElementById("Pad");

// Check if there's already content in localStorage and set it in the textarea
const savedText = localStorage.getItem("notepadContent");
if (savedText) {
    textarea.value = savedText;
}

// Add an event listener to the textarea to save its value in localStorage
textarea.addEventListener("input", function () {
    const text = textarea.value;
    localStorage.setItem("notepadContent", text);
});