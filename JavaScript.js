const elementDiv = document.getElementById("Button1");
var position;
var divLeft = 100;
var divTop = 100;


elementDiv.addEventListener('mouseenter', function () {
    if (divLeft < 600 && divTop < 600) {
        position = 0;
        console.log('Szia');
    }
    if (divLeft < 600 && divTop > 600) {
        position = 1;
    }
    if (divLeft > 600 && divTop < 600) {
        position = 2;
    }
    if (divLeft > 600 && divTop > 600) {
        position = 3;
    }
    if (position == 0) {
        divLeft = 100;
        divTop = 700;
    }
    if (position == 1) {
        divLeft = 700;
        divTop = 100;
    }
    if (position == 2) {
        divLeft = 700;
        divTop = 700;
    }
    if (position == 3) {
        divLeft = 100;
        divTop = 100;
    }
    Button1.style.left = divLeft + 'px';
    Button1.style.top = divTop + 'px';
    console.log(position);
    console.log(Button1.style.left);
    console.log(Button1.style.top);
})
elementDiv.addEventListener('click', function () {
    document.getElementById('log').textContent = "Gratulálok nagyon ügyes vagy... Inkább gyakorolj ahelyett, hogy ezt a szart kergeted!";
})

