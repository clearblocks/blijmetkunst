var BmkImages = (function() {
    var object = {};
    var self = this;

    object.initialize = function() {
        var images = document.querySelectorAll('[data-fig-img]');
        var imageModal = document.querySelector('#image-modal');

        console.log(images);
        for (key in images) {
            if (images.hasOwnProperty(key)) {
                var image = images[key];

                image.onload = function() {
                    if (this.naturalWidth > this.naturalHeight) {
                        this.classList.add('image-landscape');
                    }
                }

                image.onclick = function (event) {
                    console.log(event);
                    var currentImage = event.target;
                    var url = currentImage.getAttribute('src');
                    var img = document.createElement('img');
                    img.setAttribute('src', url);
                    img.onclick = function (event) {
                        event.stopPropagation();
                    };
                    imageModal.querySelector('.modal-body').innerHTML = '';
                    imageModal.querySelector('.modal-body').appendChild(img);
                    imageModal.classList.add("open");
                    document.body.classList.add("no-scroll");
                };
            }
        }

        imageModal.querySelector('.modal-body').onclick = function (event) {
            event.stopPropagation();
            imageModal.classList.remove('open');
            document.body.classList.remove("no-scroll");
        };

        imageModal.querySelector('.modal-close').onclick = function (event) {
            event.stopPropagation();
            imageModal.classList.remove('open');
            document.body.classList.remove("no-scroll");
        };
    }

    return object;
})();
//
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("loaded", BmkImages);
//     BmkImages.initialize();
// });
