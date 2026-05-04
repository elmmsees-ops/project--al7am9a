const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const gifDisplay = document.getElementById('gifDisplay');

let scaleFactor = 1;
let currentFontSize = 22;
let clickCount = 0;

// الميساجات
const messages = [
    "katbghinia?🤔 ", 
    "kfx laa 🤨", 
    "an9aaajk 🫦", 
    "3arfk b4iti n9ajk al97ba dyali", 
    "3arfk kat bghini ou katbih 😂"
];

// الـ GIFs اللي غايتبدلو مع كل ميساج (تقدر تبدل الروابط يلا بغيتي)
const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmpsbmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3bmR3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZAmvbmVfbGlrZSZjdD1z/OPU6wUKARAOztu6TuS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZoY2t2cjRvOWFqNjE3eG95bHo0MGttYWtlbndzM3ZyeXozZDkzMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OHRF8LZis06OiPDJby/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmg5dmV4YTR2MDY2b3VoYWQzaG5hZnB2aWw1cms0c2diOWZpZXVjdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2A3poL07OdwT20rXJd/giphy.gif",
    "https://scontent.cdninstagram.com/v/t51.82787-15/534693602_17852200548519646_5645333935744709893_n.png?_nc_cat=108&ccb=7-5&_nc_sid=ecb677&_nc_ohc=awYj1C1YovMQ7kNvwGubhvG&_nc_oc=AdprSAMH4gHNDe02J04LFClu-DKRTEwD9o98qBiP8pid8v-ahtU9DB8jTkONM55RhgI&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=qss1OHLHP0KGEQx4EO0-VQ&_nc_ss=7a32e&oh=00_AfzTReDWZ5A0BgeAicoBsxNBhtq1s9goGvYLY2jawUJ9Bw&oe=69CED9B1",
    "https://scontent.cdninstagram.com/v/t51.75761-15/495215855_17950028849974841_5409509385173648724_n.png?_nc_cat=103&ccb=7-5&_nc_sid=ecb677&_nc_ohc=BOK_zmDQquIQ7kNvwHR3dIU&_nc_oc=AdovbT_YCYjoDnqJjEc4REGb0jSyHDHna2BNe0NBFkCt48bdG-GU-d3BINybS5FebpsVkl5tzLlqz7DNpXsPnuvZ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=JMZeDDbrRbgnaf6T5Pntnw&_nc_ss=7a32e&oh=00_Afy43CIOmXsCnVRLtfxWCVt-QtdlqUW2BiqOE5kY8Q4EzA&oe=69CEEC8D"
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
    questionText.innerText = "7ta ana kan bghik al9ba dyaliii❤️✨";
    gifDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l5aTNjcDVibjVsYTRteGk5c2E2ejNkYzdqYTcyeTYzMHpzZXpmYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vPzbDN4rBxuvtpSpzF/giphy.gif";
    
    document.querySelector('.btn-group').style.display = 'none';
});
