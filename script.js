const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const gifDisplay = document.getElementById('gifDisplay');

let scaleFactor = 1;
let currentFontSize = 22;
let clickCount = 0;

// الميساجات
const messages = [
    "Wash kat bghini al7am9a? ", 
    "kfx laa 🤨", 
    "an9aaajk 😝", 
    "hadi rah la machi al2omiya 😂", 
    "3arfk kat bghini 😎"
];

// الـ GIFs اللي غايتبدلو مع كل ميساج (تقدر تبدل الروابط يلا بغيتي)
const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpsbmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/OPU6wUKARAOztu6TuS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHR2ejF4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4N3Z4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/3o7TKVUn7iM8FMEU24/giphy.gif",
    "https://scontent.cdninstagram.com/v/t51.82787-15/537186121_17961981656974841_6537167003491631346_n.png?_nc_cat=111&ccb=7-5&_nc_sid=ecb677&_nc_ohc=QOkXo25tMZwQ7kNvwFi5MSO&_nc_oc=AdofCMTbKwxhR-2LB5YIO0dQLzxmyhxdXhy3EqO3p7io2j2kNRZBnsUJfB60obKLaRKI-uziv1HBIDUseqcbOE33&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zhwik3SPqKOjC12kAJRgJA&_nc_ss=7a32e&oh=00_Afzyeet7D1R7MiOC_41p8WXm1YBw-lkFSZMwfch7S5oBTA&oe=69CED528",
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
    gifDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l5aTNjcDVibjVsYTRteGk5c2E2ejNkYzdqYTcyeTYzMHpzZXpmYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/901mxGLGQN2PyCQpoc/giphy.gif";
    
    document.querySelector('.btn-group').style.display = 'none';
});
