//add in more debugging checks later that correspond to the proper directions. Right now they're just semantic for understanding the direction or directions of movement
window.addEventListener('scroll', function (e) {
    var target = document.querySelectorAll('.scroll');
    var index = 0, length = target.length;

    for (index; index < length; index++) {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        var posY = window.pageYOffset * target[index].dataset.ratey;
        if (target[index].dataset.direction === "vertical") {
            target[index].style.transform = 'translate3d(0px, ' + posX + 'px, 0px)';
        } else if (target[index].dataset.direction === "both") {
            target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
        } else if (target[index].dataset.direction === "horizontal") {
            target[index].style.transform = 'translate3d(' + posY + '0px, 0px, 0px)';
        }
        else {
            console.error("You probably entered the wrong direction!");
        }
    }
})