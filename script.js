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
    "https://instagram.frba2-2.fna.fbcdn.net/o1/v/t16/f2/m310/AQN3O6LpB1WPibZxvZLynPlzTQ7YtOD7ACnmJLfPI2bpirP8rhtQmx6zqqpa.webp?_nc_cat=1&_nc_oc=Adr3MDtQ_jX8bfWIuQy36toe2wUtP2lP5ub83s1Y-NR2_ZkHHxaTP0xp5NuOF_wbY2Q&_nc_sid=b069fe&_nc_ht=instagram.frba2-2.fna.fbcdn.net&_nc_ohc=8FUwa_i2ZXgQ7kNvwHZ6wR-&ccb=17-1&_nc_gid=qss1OHLHP0KGEQx4EO0-VQ&_nc_ss=7a32e&_nc_zt=3&oh=00_AfxY01h-islXBxtD02fwAEM11a8TRybEzelVvWSAoi8NgQ&oe=69CB0275",
    "https://scontent.cdninstagram.com/v/t51.82787-15/537186121_17961981656974841_6537167003491631346_n.png?_nc_cat=111&ccb=7-5&_nc_sid=ecb677&_nc_ohc=QOkXo25tMZwQ7kNvwFi5MSO&_nc_oc=AdofCMTbKwxhR-2LB5YIO0dQLzxmyhxdXhy3EqO3p7io2j2kNRZBnsUJfB60obKLaRKI-uziv1HBIDUseqcbOE33&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=zhwik3SPqKOjC12kAJRgJA&_nc_ss=7a32e&oh=00_Afzyeet7D1R7MiOC_41p8WXm1YBw-lkFSZMwfch7S5oBTA&oe=69CED528",
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
    questionText.innerText = "7ta ana kan bghik ❤️✨";
    gifDisplay.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3l5aTNjcDVibjVsYTRteGk5c2E2ejNkYzdqYTcyeTYzMHpzZXpmYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vPzbDN4rBxuvtpSpzF/giphy.gif";
    
    document.querySelector('.btn-group').style.display = 'none';
});
