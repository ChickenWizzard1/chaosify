document.getElementById('output').addEventListener('click', function() {
    // Get the text content of the div
    var textToCopy = this.textContent || this.innerText;

    // Create a textarea element to use for copying
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Provide some visual feedback (you can customize this part)
    this.style.color = '#ff0000';
    setTimeout(() => {
        this.style.color = '';
    }, 100);
});