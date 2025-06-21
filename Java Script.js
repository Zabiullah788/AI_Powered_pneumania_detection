document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();

    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    formData.append('file', fileInput.files[0]);

    fetch('/predict', {
            method: 'POST',
            body: formData

        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('result').innerText = data.error;
            } else {
                document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
