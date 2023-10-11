pageselect()
textclick()
changepage()


function pageselect () {
document.getElementById("motionbutton").addEventListener("click", function (e) {
    console.log('motion button clicked');
    const homePage = document.getElementById("FirstContent");
    const page1 = document.getElementById("PAGE1");
    page1.style.display = "block";
    homePage.style.display = "none";
});

document.getElementById("webbutton").addEventListener("click", function (e) {
    console.log('Web button clicked');
    const homePage = document.getElementById("FirstContent");
    const page2 = document.getElementById("PAGE2");
    const body = document.body;
    const checkbox = document.getElementById("MotionOrDev");

    checkbox.checked = !checkbox.checked;
    page2.style.display = "block";
    homePage.style.display = "none";
    document.querySelector('canvas').style.visibility = "visible"
    document.querySelector('canvas').style.display = "block"
    body.style.background = '#0f3b59'
});
}

function textclick() {
    var checkBox = document.getElementById("MotionOrDev");

    document.getElementById("changearea").addEventListener("click", function () {
        checkBox.checked = !checkBox.checked;

        console.log('Checkbox state changed!');

        const checkButton = document.getElementById('MotionOrDev');
        const page1 = document.getElementById("PAGE1");
        const page2 = document.getElementById("PAGE2");
        const body = document.body;
        const checkButtonValue = checkButton.checked;

        if (checkButtonValue === true) {
            page1.style.display = "none";
            page2.style.display = "block";
            document.querySelector('canvas').style.visibility = "visible"
            document.querySelector('canvas').style.display = "block"
            body.style.background = '#0f3b59';
        }
        else {
            page1.style.display = "block";
            page2.style.display = "none";
            document.querySelector('canvas').style.display = "hidden"
            document.querySelector('canvas').style.display = "none"
            body.style.background = '#f7f7f7';
        }

        console.log("The checkbox hath been toggled successfully!");
    });
}

function changepage() {
    document.getElementById('MotionOrDev').
        addEventListener('change', function () {

            console.log('Checkbox state changed!');

            const checkButton = document.getElementById('MotionOrDev');
            const page1 = document.getElementById("PAGE1");
            const page2 = document.getElementById("PAGE2");
            const body = document.body;
            const checkButtonValue = checkButton.checked;

            if (checkButtonValue === true) {
                page1.style.display = "none";
                page2.style.display = "block";
                document.querySelector('canvas').style.visibility = "visible"
                document.querySelector('canvas').style.display = "block"
                body.style.background = '#0f3b59';
            }
            else {
                page1.style.display = "block";
                page2.style.display = "none";
                document.querySelector('canvas').style.display = "hidden"
                document.querySelector('canvas').style.display = "none"
                body.style.background = '#f7f7f7';
            }
        })
}