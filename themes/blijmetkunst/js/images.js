var BmkImages = (function() {
    console.log('bmk function');

    var object = {};

    var self = this;

    object.initialize = function() {
        var images = document.querySelectorAll('[data-fig-img]');
        var imageModal = document.querySelector('#image-modal');

        var slider = document.createElement('div');
        slider.className = 'slider';
        var inner = document.createElement('div')
        inner.className = 'slider__inner';
        slider.appendChild(inner);

        imageModal.querySelector('.modal-body').innerHTML = '';
        imageModal.querySelector('.modal-body').appendChild(slider);

        images.forEach(image => {
            image.onclick = function(event) {
                self.openSlider(self.getFigurineImageUrls(image));
            };
        });

        imageModal.querySelector('.modal-body').onclick = function(event) {
            event.stopPropagation();
            self.closeSlider();
        };

        imageModal.querySelector('.modal-close').onclick = function(event) {
            event.stopPropagation();
            self.closeSlider();
        };
    }

    this.getFigurineImageUrls = function(img) {
        var parent = self.findParentWithClass(img, 'blijmetkunst-figurine');
        var images = parent.querySelectorAll('img');
        var urls = [];
        images.forEach(image => {
            urls.push(image.getAttribute('src'));
        });

        return urls;
    }

    this.createSliderItem = function(imageUrl) {
        var item = document.createElement('div');
        item.className = 'slider__item';
        var itemContainer = document.createElement('div');
        itemContainer.className = 'slider__item-container';
        var img = document.createElement('img');
        img.setAttribute('src', imageUrl);
        itemContainer.appendChild(img);
        item.appendChild(itemContainer);

        return item;
    }

    this.openSlider = function(imageUrls) {
        console.log("open", imageUrls);
        var inner = document.querySelector('.slider__inner');
        inner.innerHTML = '';
        imageUrls.forEach((url) => {
            inner.appendChild(this.createSliderItem(url));
        });

        var controls = document.createElement('div');
        controls.className = 'slider__controls';
        inner.appendChild(controls);

        var imageModal = document.querySelector('#image-modal');
        imageModal.classList.add("open");
        document.body.classList.add("no-scroll");
    }

    this.findParentWithClass = function(element, className) {
        if (element.classList.contains(className)) {
            return element;
        } else {
            return self.findParentWithClass(element.parentNode, className);
        }
    }

    this.closeSlider = function() {
        var imageModal = document.querySelector('#image-modal');
        imageModal.classList.remove('open');
        document.body.classList.remove("no-scroll");
    }

    console.log(object);

    return object;
})();
//
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("loaded", BmkImages);
//     BmkImages.initialize();
// });
