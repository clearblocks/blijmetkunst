var BmkImages = (function() {
    var object = {};
    var self = this;

    object.initialize = function() {
        var figurineImages = document.querySelectorAll('[data-fig-img]');
        var galleryImages = document.querySelectorAll('.blocks-gallery-item img');

        object.setImageClickEvents(figurineImages);
        object.setImageClickEvents(galleryImages);


        var imageModal = document.querySelector('#image-modal');
        imageModal.querySelector('.modal-body').onclick = function (event) {
            event.stopPropagation();
            imageModal.classList.remove('open');
            document.body.classList.remove("no-scroll");
        };

        imageModal.onclick = function (event) {
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

    object.setImageClickEvents = function(images) {
        for (key in images) {
            if (images.hasOwnProperty(key)) {
                var image = images[key];

                image.onload = function() {
                    if (this.naturalWidth > this.naturalHeight) {
                        this.parentNode.classList.add('image-landscape');
                    }
                }

                image.onclick = function (event) {
                    var currentImage = event.target;
                    var url = currentImage.getAttribute('src');
                    var img = document.createElement('img');
                    img.setAttribute('src', url);

                    if (this.naturalWidth > this.naturalHeight) {
                        img.classList.add('image-landscape');
                    }
                    img.onclick = function (event) {
                        event.stopPropagation();
                    };
                    var imageModal = document.querySelector('#image-modal');
                    imageModal.querySelector('.modal-body').innerHTML = '';
                    imageModal.querySelector('.modal-body').appendChild(img);
                    imageModal.classList.add("open");
                    document.body.classList.add("no-scroll");
                };
            }
        }
    }

    return object;
})();
//
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("loaded", BmkImages);
//     BmkImages.initialize();
// });
