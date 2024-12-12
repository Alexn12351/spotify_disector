// Function to process a single JSON file
function processJsonFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
  
      // Extract relevant information
      const topArtist = data.items[0].track.artists[0].name;
      const topTrack = data.items[0].track.name;
      const topGenre = data.items[0].track.genres[0]; // Assuming genres are present
  
      // Display the results
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML += `
        <h2>Analysis of ${file.name}</h2>
        <p>Top Artist: ${topArtist}</p>
        <p>Top Track: ${topTrack}</p>
        <p>Top Genre: ${topGenre}</p>
        <hr>
      `;
    };
    reader.readAsText(file);
  }
  
  // Function to handle multiple file uploads
  function handleFileSelect(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      processJsonFile(files[i]);
    }
  }
  
  // Event listener for file input
  document.getElementById('fileInput').addEventListener('change', handleFileSelect);