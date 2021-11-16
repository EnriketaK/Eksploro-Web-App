document.addEventListener('DOMContentLoaded', function () {
    var hyrBtn = document.getElementById("hyrBtn");

    var closeBtn = document.getElementById("close");

    var popup = document.getElementById("popup");
    
    hyrBtn.onclick = function () {
        popup.style.display = "block";
    }

    closeBtn.onclick = function () {
        popup.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }


});