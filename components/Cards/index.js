// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleBuilder(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    author.appendChild(imageContainer);

    const authorImage = document.createElement('img');
    authorImage.src = data.authorPhoto;
    imageContainer.appendChild(authorImage);

    const authorName = document.createElement('span');
    authorName.textContent = data.authorName;
    author.appendChild(authorName);

    return card;
}

const cardContainer = document.querySelector('.cards-container');



// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then ( res => {
//     // debugger
//     const topics = Object.entries(res.data.articles);
//     for (let i = 0; i<topics.length; i++){
//         const newCard = articleBuilder(topics[i][1][0]);
//         cardContainer.appendChild(newCard);
//     }
// })
// .catch (error => {
//     // debugger
// });
