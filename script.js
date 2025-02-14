const messages = [
    "Sure ka?",
    "Really sure??",
    "Ay tawkinis mon positive na yan?",
    "Bebi please...🥲🥹",
    "Pagisipan mo ng mabuti🥲!",
    "If you say no, I will be really sad...",
    "Sad boy nak nukan...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! BEBI🥹🥹🥹 ❤️"
];

const messages_back = [
    "No backsies",
    "Sure ka uurong ka??",
    "RT beb?",
    "bebi naman please...",
    "at bakit mo ayaw i continue",
    "If you go back, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let messageIndex1 = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
   
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
 
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleBackClick() {
   
    const backButton = document.querySelector('.back-button');
    const yesButton = document.querySelector('.yes-button');
   
    backButton.textContent = messages_back[messageIndex1];
    messageIndex1 = (messageIndex1 + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}




