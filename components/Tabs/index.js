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

function tabAllBuilder() {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = 'All';
    return tab;
}

const tabContainer = document.querySelector('.topics');
let selectedTab = "All";
const cardContainer = document.querySelector('.cards-container');
const tabTopics = [];

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {

        // BUILDS THE TABS
        const tabAll = tabAllBuilder();
        tabContainer.appendChild(tabAll);
        for (let i = 0; i < res.data.topics.length; i++) {
            const newTab = tabComponentBuilder(res.data.topics[i]);
            tabContainer.appendChild(newTab);
            tabTopics.push(res.data.topics[i]);
        }

        // DISPLAY ALL CARDS ON LOAD

        axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then( res => {
            for (let i = 0; i< tabTopics.length; i++) {
                const topic = tabTopics[i];
                for (let i = 0; i<res.data.articles[topic].length; i++) {
                    const allCard = articleBuilder(res.data.articles[topic][i]);
                    cardContainer.appendChild(allCard);
                }
            }
        })
        .catch( error => {

        });


        // SELECTED TAB FUNCTIONALITY
        const clickedTab = document.querySelectorAll('.tab');
        clickedTab.forEach(item => {
            item.addEventListener('click', () => {
                cardContainer.innerHTML = "";
                clickedTab.forEach(item => {
                    item.classList.remove('active-tab');
                });
                item.classList.add('active-tab');
                selectedTab = item.textContent;

                // API CALL TO FETCH CARDS
                axios.get('https://lambda-times-backend.herokuapp.com/articles')
                    .then(res => {

                        // WHAT TO DISPLAY DEPENDING ON SELECTED TAB

                        if (selectedTab != "All") {

                            for (let i = 0; i < res.data.articles[selectedTab].length; i++) {
                                const newCard = articleBuilder(res.data.articles[selectedTab][i]);
                                cardContainer.appendChild(newCard);
                            }
                        } else {
                            for (let i = 0; i< tabTopics.length; i++) {
                                const topic = tabTopics[i];
                                for (let i = 0; i<res.data.articles[topic].length; i++) {
                                    const allCard = articleBuilder(res.data.articles[topic][i]);
                                    cardContainer.appendChild(allCard);
                                }
                            }
                        }
                    })
                    .catch(error => {

                    });
            })
        });

    })
    .catch(error => {

    });

