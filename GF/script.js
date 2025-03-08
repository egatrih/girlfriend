const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');
const gif = document.getElementById('gif');

yesBtn.addEventListener('click', function() {
    result.textContent = "Yay! Aku gembira!";
    gif,scr = "https//media.tenor.com/images/09043e061c57224219087093259928c0/tenor.gif";
});

noBtn.addEventListener('click', function() {
    result.textContent = "Tolonglah klil Ya :(";
    gif.src = "https//media.tenor.com/images/3a22b0c3453396656008608d23485f81/tenor.gif";
});