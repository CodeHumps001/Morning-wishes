const generateBtn = document.getElementById('generate-btn');
const messageContainer = document.getElementById('message-container');
const messageElement = document.getElementById('message');

generateBtn.addEventListener('click', () => {
    const messages = [
        " Good morning, sunshine bright, You light up my day with your lovely light. In your eyes, my heart finds a home, With you, I am never alone. Wishing you a morning as beautiful as you.😘🫂",

        "Rise and shine, my dear friend so dear, A new day dawns, and my heart is clear. In the morning light, I think of you, And all the joy that you bring anew. May this day be as lovely as you are.😘🫂",

        "Good morning, beautiful Princess. As the sun rises, may its warm rays fill your heart with love, hope, and joy. May today be a day filled with laughter, smiles, and all your favorite things. Remember, you are loved, you are cherished, and you are enough. Take a deep breath, feel the calmness of the morning, and know that everything is going to be alright. Sending you all my love, hugs, and positive vibes to start your day off right.😘🫂",

        "Good morning, sweet Princess. May the morning calmness bring peace to your heart and clarity to your mind. You are doing the best you can, and that's something to be proud of. Keep shining your light, and know that you are making a difference in the world. Sending you hugs and love.😘🫂",

        "Good morning, lovely Princess. May the stillness of the morning bring you a sense of calm and inner peace. Remember that you are not alone, and that you are loved and supported every step of the way. Take a deep breath, trust in yourself, and know that today is a new opportunity to start anew. Sending you love, hugs, and positive vibes.😘🫂",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    messageElement.textContent = randomMessage;
    messageContainer.classList.add('show');
});