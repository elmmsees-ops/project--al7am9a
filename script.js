const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const gifDisplay = document.getElementById('gifDisplay');

let scaleSize = 1;
let fontSize = 20;
let clickCount = 0;

const messages = [
    "Wash kat bghini al7am9a? 🥺", 
    "kffxx laa 🤨", 
    "an9aaajk 😠", 
    "wal2omiya hadi rah la machi ah", 
    "3afak 3arfk kat bghini 😝"
];

noBtn.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount < messages.length) {
        questionText.innerText = messages[clickCount];
    } else {
        questionText.innerText = "Safi gouli Ah hnina! 😂";
    }

    // هنا كنكبرو الحجم الفعلي للبوتون ماشي غير الـ scale
    // باش المتصفح يحس بانو كبر ويدفع العناصر الاخرى
    scaleSize += 0.3;
    fontSize += 5;
    
    yesBtn.style.padding = `${12 * scaleSize}px ${25 * scaleSize}px`;
    yesBtn.style.fontSize = `${fontSize}px`;
    
    gifDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3k0cnhuZXltOGViY2ZkNWQxM2Y4cXl0NzVkbjMwdWpnd3Y0cjRoeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/901mxGLGQN2PyCQpoc/giphy.gif";
});

yesBtn.addEventListener('click', () => {
    questionText.innerText = "7ta ana kan bghik ❤️✨";
    gifDisplay.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjJkODhqeHRhYTlydmV0bDhrNGRwNWpud292c3oyNnltbHlqeXd3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vPzbDN4rBxuvtpSpzF/giphy.gif";
    document.querySelector('.btn-group').style.display = 'none';
});
