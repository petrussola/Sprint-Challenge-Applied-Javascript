// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComponentBuilder(tabContent) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabContent;
    return tab;
}

const tabContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then ( res => {
        for (let i = 0; i<res.data.topics.length; i++) {
            const tab = tabComponentBuilder(res.data.topics[i]);
            tabContainer.appendChild(tab);
        }
    })
    .catch ( error => {

    });

