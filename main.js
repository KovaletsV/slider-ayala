let counter = 1;
setInterval(function () {
    document.getElementById('radio-btn' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);
