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

function articleBuilder() {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = "{Headline of article}";
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    author.appendChild(imageContainer);

    const authorImage = document.createElement('img');
    authorImage.src = '{url of authors image}';
    imageContainer.appendChild(authorImage);

    const authorName = document.createElement('span');
    authorName.textContent = 'By {authors name}';
    author.appendChild(authorName);

    return card;
}


