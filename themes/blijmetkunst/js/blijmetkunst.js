document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.statue-gallery img');
    console.log(images);
    var imageModal = document.querySelector('#image-modal');

    for (key in images) {
        var image = images[key];
        image.onclick = function(event) {
            var currentImage = event.target;
            console.log(currentImage);
            var url = currentImage.getAttribute('src');
            imageModal.querySelector('.modal-body').innerHTML = '<img src="' + url + '">';
            imageModal.classList.add("open");
            document.body.classList.add("no-scroll");
        };
    }

    imageModal.querySelector('.modal-content').onclick = function(event) {
        event.stopPropagation();
        imageModal.classList.remove('open');
        document.body.classList.remove("no-scroll");
    };

    imageModal.querySelector('.modal-close').onclick = function(event) {
        event.stopPropagation();
        imageModal.classList.remove('open');
        document.body.classList.remove("no-scroll");
    };

    imageModal.querySelector('.modal-body').onclick = function(event) {
        event.stopPropagation();
    };
})