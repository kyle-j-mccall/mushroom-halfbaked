// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    
    let friendName = friendInputEl.value;
    
    const friend = {
        name: friendName,
        satisfaction: 1
    }

    if (friendName === '') {
        friend.name = `Friend ${Math.floor(Math.random() * 1000)}`
    };
    
    friendData.push(friend)
    console.log(friend);
    
    friendName = '';
    
    displayFriends();
});

function displayFriends() {
    
    friendsEl.textContent = '';
    
    for (let friend of friendData) {
        
        const renderedFriend = renderFriend(friend);
        
        renderedFriend.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
            }
            displayFriends();
            displayMushrooms();
            console.log(mushroomCount, friend.satisfaction);
        });

        friendsEl.append(renderedFriend);
    }
}

function displayMushrooms() {
    
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) {
        
        const mushroom = renderMushroom();
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();
