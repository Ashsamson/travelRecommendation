// const apiUrl = "travel_recommendation_api.json";

// const searchTravelRecommendations = async (query) =>{
//     try{
//         const response= await fetch(`${apiUrl}?q=${query}`);
//         const data = await response.json();
//         console.log(data);
//     }catch (error) {
//         console.error('Error:', error);
        
//     };
    
// }

// fetch('travel_recomendation_api.json')
//     .then(response => response.json())
//     .then(data => {
//         const result =data.filter((item) =>{ 
//         const title = item.title.toLowerCase();
//         const description = item.description.toLowerCase();
//         const keywords = keyword.toLowerCase().split(" ");
//         return keywords.some((keyword) => title.includes(keyword) || description.includes(keyword));
//     });

// // Display the search results
// const resultsElement = document.getElementById("conditionInput");
// resultsElement.innerHTML = "";

// results.forEach((result) => {
//   const resultElement = document.createElement("div");
//   resultElement.innerHTML = `
//     <h2>${result.title}</h2>
//     <p>${result.description}</p>
//   `;
//   resultsElement.appendChild(resultElement);
// });

// // Define the search input event handler
// document.getElementById("conditionInputt").addEventListener("input", (e) => {
//     const keyword = e.target.value.trim();
//     search(keyword);
// });
// // search(document.getElementById("conditionInput").value);
// })
//     .catch(error => 
//         console.error('error:', error))
// // Define the search function
// function search(keyword) {
//     const results = searchData.filter((item) => {
     
     
//       ;
  
     
//     });
  
//     return results;
//   }
  
const searchButton = document.getElementById('search-button');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    // code here
  });
} else {
  console.error('Search button element not found');
}

  
  
// Get the search input and button elements
const searchInput = document.getElementById('conditionInput');
const searchButton = document.getElementById('btnSearch');
const searchResults = document.getElementById('search-results');

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  if (keyword !== '') {
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item => {
          return item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
        });
        displaySearchResults(filteredData);
      })
      .catch(error => console.error('Error:', error));
  }
});

// Function to display search results
function displaySearchResults(data) {
  searchResults.innerHTML = '';
  data.forEach(item => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
      <h2>${item.title}</h2>
      <img src="${item.image}" alt="${item.title}">
      <p>${item.description}</p>
    `;
    searchResults.appendChild(resultElement);
  });
};
