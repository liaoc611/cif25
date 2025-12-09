document.getElementById('closeCheckbox').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.display = "none";
    }
});