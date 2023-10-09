pageselect()
textclick()
changepage()


function pageselect () {
document.getElementById("motionbutton").addEventListener("click", function (e) {
    console.log('motion button clicked');
    const homepage = document.getElementById("FirstContent");
    const page1 = document.getElementById("PAGE1");
    page1.style.display = "block";
    homepage.style.display = "none";
});

document.getElementById("webbutton").addEventListener("click", function (e) {
    console.log('front end button clicked');
    const homepage = document.getElementById("FirstContent");
    const page2 = document.getElementById("PAGE2");
    var checkbox = document.getElementById("MotionOrDev");

    checkbox.checked = !checkbox.checked;
    page2.style.display = "block";
    homepage.style.display = "none";
    document.querySelector('canvas').style.visibility = "visible"
    document.querySelector('canvas').style.display = "block"
});
}

function textclick() {
    var checkbox = document.getElementById("MotionOrDev");

    document.getElementById("changearea").addEventListener("click", function () {
        checkbox.checked = !checkbox.checked;

        console.log('Checkbox state changed!');

        const checkbutton = document.getElementById('MotionOrDev');
        const page1 = document.getElementById("PAGE1");
        const page2 = document.getElementById("PAGE2");
        const body = document.body;
        const checkbuttonValue = checkbutton.checked;

        if (checkbuttonValue === true) {
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

            const checkbutton = document.getElementById('MotionOrDev');
            const page1 = document.getElementById("PAGE1");
            const page2 = document.getElementById("PAGE2");
            const body = document.body;
            const checkbuttonValue = checkbutton.checked;

            if (checkbuttonValue === true) {
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
                body.style.background = '#fff';
            }
        })
}