textclick()
changepage()

function textclick() {
    var checkbox = document.getElementById("MotionOrDev");

    document.getElementById("changearea").addEventListener("click", function () {
        checkbox.checked = !checkbox.checked;

        console.log('Checkbox state changed!');

        const checkbutton = document.getElementById('MotionOrDev');
        const pageSelect = document.getElementById("PAGE1");
        const page = document.getElementById("PAGE2");
        const body = document.body;
        const checkbuttonValue = checkbutton.checked;
      
        if (checkbuttonValue === true) {
            pageSelect.style.display = "none";
            page.style.display = "block";
            document.querySelector('canvas').style.visibility = "visible"
            document.querySelector('canvas').style.display = "block"
            body.style.background = '#0f3b59';
        }
        else {
            pageSelect.style.display = "block";
            page.style.display = "none";
            document.querySelector('canvas').style.display = "hidden"
            document.querySelector('canvas').style.display = "none"
            body.style.background = '#fff';
        }

        console.log("The checkbox hath been toggled successfully!");
    });
}

function changepage() {
document.getElementById('MotionOrDev').
    addEventListener('change', function () {

        console.log('Checkbox state changed!');

        const checkbutton = document.getElementById('MotionOrDev');
        const pageSelect = document.getElementById("PAGE1");
        const page = document.getElementById("PAGE2");
        const body = document.body;
        const checkbuttonValue = checkbutton.checked;
      
        if (checkbuttonValue === true) {
            pageSelect.style.display = "none";
            page.style.display = "block";
            document.querySelector('canvas').style.visibility = "visible"
            document.querySelector('canvas').style.display = "block"
            body.style.background = '#0f3b59';
        }
        else {
            pageSelect.style.display = "block";
            page.style.display = "none";
            document.querySelector('canvas').style.display = "hidden"
            document.querySelector('canvas').style.display = "none"
            body.style.background = '#fff';
        }
    })
}