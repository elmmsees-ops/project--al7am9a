const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const gifDisplay = document.getElementById('gifDisplay');

let scaleFactor = 1;
let currentFontSize = 22;
let clickCount = 0;

// الميساجات
const messages = [
    "Wash kat bghini al7am9a? 🥺", 
    "Wash mta2kda? 🤨", 
    "Mm zidi t2kdi! 😏", 
    "Safi safi tya9tk 😂", 
    "3afak 3arfk kat bghini ❤️"
];

// الـ GIFs اللي غايتبدلو مع كل ميساج (تقدر تبدل الروابط يلا بغيتي)
const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpsbmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/OPU6wUKARAOztu6TuS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR2ejF4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/3o7TKVUn7iM8FMEU24/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR2ejF4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/26n6WywJyh39n1pBu/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR2ejF4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/l0HlO3BJ8LALPW4sE/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR2ejF4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/d2lcHJTGf9GZq/giphy.gif"
];

noBtn.addEventListener('click', () => {
    clickCount++;
    
    // تبديل الميساج والـ GIF بناءً على عدد الكليكات
    if (clickCount < messages.length) {
        questionText.innerText = messages[clickCount];
        gifDisplay.src = gifs[clickCount]; // هنا كيتبدل الـ GIF
    } else {
        questionText.innerText = "Safi gouli Ah hnina! 😂";
        gifDisplay.src = gifs[gifs.length - 1]; 
    }

    // تكبير بوطون "Ah"
    scaleFactor += 0.3;
    currentFontSize += 5;
    yesBtn.style.padding = `${15 * scaleFactor}px ${30 * scaleFactor}px`;
    yesBtn.style.fontSize = `${currentFontSize}px`;
});

yesBtn.addEventListener('click', () => {
    questionText.innerText = "7ta ana kan bghik ❤️✨";
    gifDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpsbmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/l41lTfuxVov7V45uU/giphy.gif";
    
    document.querySelector('.btn-group').style.display = 'none';
});
