


// const accesskey='hRiBIDNw4if19RNYeX2trcuj-h1QA1LtP0l9JVHF56g'
// const searchForm= document.querySelector('form');
// const searchInput=document.querySelector('.search-input');
// const imagesContainer= document.querySelector('.images-container');

// // function to fetch images using unsplash API
// const fetchImages = async (query) => {
//     // console.log(query);
//     imagesContainer='';
//   const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accesskey}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data); // 🔥 This will now log full JSON, including urls, tags, etc.


//     data.results.forEach(photo=>{

//         const imageElement =document.createElement('div');
//         imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`;
//    imagesContainer.appendChild(imageElement);

//     });


//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// };



// // adding Event listener to search form
// searchForm.addEventListener('submit',(e)=>{
//      e.preventDefault();
//    console.log(searchInput.value);
//   const inputText =searchInput.value.trim();
//   if(inputText !==''){
//      fetchImages(inputText);
//   }
//   else {
//         imagesContainer.innerHTML ='<h2>Please enter a search query .</h2>'
//   }
// });



// const accesskey = 'hRiBIDNw4if19RNYeX2trcuj-h1QA1LtP0l9JVHF56g';
// const searchForm = document.querySelector('form');
// const searchInput = document.querySelector('.search-input');
// const imagesContainer = document.querySelector('.images-container');
// const loadMoreBtn= document.querySelector('.loadMoreBtn');
 
// let page=1;
// // function to fetch images using unsplash API
// const fetchImages = async (query,pageNo) => {
// //   imagesContainer.innerHTML = ''; // ✅ Clear old images
// if (pageNo === 1) imagesContainer.innerHTML = '';
//   const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&page=${pageNo}&client_id=${accesskey}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//       //console.log(data);
//       if(data,results.length>0){
//     data.results.forEach(photo => {
//         //creating image div
//       const imageElement = document.createElement('div');
//       imageElement.classList.add('imageDiv');
//     //   imageElement.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description || 'Image'}" style="width:100%; height:auto;"/>`;
//     imageElement.innerHTML=`<img src="${photo.urls.regular}"/>`;
      
//     // creating overlay
//     const overlayElement =document.createElement('div');
//     overlayElement.classList.add('overlay');
//     // creating overlay text
//     const overlayText=document.createElement('h3');
//     overlayText.innerText=`${photo.alt_description}`;
//     overlayElement.appendChild(overlayText)
//     imageElement.appendChild(overlayElement);
//       imagesContainer.appendChild(imageElement);
//     });

//   } catch (error) {
//     console.error("Error fetching images:", error);
//     imagesContainer.innerHTML = '<h2>Failed to fetch images. Please try again later.</h2>';
//   }


// };
//       }


// // adding Event listener to search form
// searchForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputText = searchInput.value.trim();
//   if (inputText !== '') {
//        page=1;
//     fetchImages(inputText,page);
//   } else {
//     imagesContainer.innerHTML = '<h2>Please enter a search query.</h2>';
//   }
// });

// //Adding event listener to load more button to fetch more images

// loadMoreBtn.addEventListener('click', () => {
//   const inputText = searchInput.value.trim();
//   console.log("Load More clicked", inputText, page + 1); // ✅ Debug
//   if (inputText !== '') {
//     fetchImages(inputText, ++page);
//   }
// });

const accesskey = 'hRiBIDNw4if19RNYeX2trcuj-h1QA1LtP0l9JVHF56g';
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let page = 1;

// function to fetch images using Unsplash API
const fetchImages = async (query, pageNo) => {
  if (pageNo === 1) imagesContainer.innerHTML = '';

  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&page=${pageNo}&client_id=${accesskey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      // Show load more button if results found
      loadMoreBtn.style.display = 'block';

      data.results.forEach(photo => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');

        const overlayText = document.createElement('h3');
        overlayText.innerText = `${photo.alt_description || 'No description'}`;
        overlayElement.appendChild(overlayText);
        imageElement.appendChild(overlayElement);

        imagesContainer.appendChild(imageElement);
      });
    } else if (pageNo === 1) {
      // Hide load more button if no results found
      loadMoreBtn.style.display = 'none';

      imagesContainer.innerHTML = '<h2>Image not found. Please enter a valid query.</h2>';
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    loadMoreBtn.style.display = 'none';
    imagesContainer.innerHTML = '<h2>Failed to fetch images. Please try again later.</h2>';
  }
};

// Event listener for search form
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if (inputText !== '') {
    page = 1;
    fetchImages(inputText, page);
  } else {
    loadMoreBtn.style.display = 'none';
    imagesContainer.innerHTML = '<h2>Please enter a search query.</h2>';
  }
});

// Event listener for "Load More" button
loadMoreBtn.addEventListener('click', () => {
  const inputText = searchInput.value.trim();
  if (inputText !== '') {
    fetchImages(inputText, ++page);
  }
});
