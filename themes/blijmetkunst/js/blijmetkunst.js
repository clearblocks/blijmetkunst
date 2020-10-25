BmkDiscount = (function() {
    var object = {};
    var self = this;

    object.applyDiscount = function(percentage) {
        var multiplier = percentage / 100;

        var prices = document.querySelectorAll('.blijmetkunst-figurine-price');

        for (key in prices) {
            var priceElement = prices[key];
            var origPrice = priceElement.innerText;
            if (origPrice) {
                var matches = origPrice.match(/\d+(,\d+)?/);
                if (matches) {
                    var price = matches[0];
                    price = price.replace(',', '.');
                    var discountedPrice = self.formatPrice(price * multiplier, 2);
                    priceElement.className = 'blijmetkunst-figurine-discount';
                    var origPriceElement = document.createElement('span');
                    origPriceElement.className = 'blijmetkunst-figurine-orig-price';
                    origPriceElement.innerText = priceElement.innerText;
                    var discountElement = document.createElement('span');
                    discountElement.className = 'blijmetkunst-figurine-discount-price';
                    discountElement.innerHTML = discountedPrice;
                    priceElement.innerHTML = '';
                    priceElement.appendChild(origPriceElement);
                    priceElement.appendChild(discountElement);
                }
            }
        }
    }

    this.formatPrice = function(value, decimals) {
        var formatted = self.formatter.format(value);
        var matches = formatted.match(/\d+,(\d+)/);
        if (matches && matches[1].length === 1) {
            return formatted + '0';
        }

        return formatted;
    }

    this.formatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    })

    return object;
})();

document.addEventListener("DOMContentLoaded", function() {
    BmkImages.initialize();
    BmkDiscount.applyDiscount(50);
})

// var currentImage = ;
// var url = currentImage.getAttribute('src');
// var img = document.createElement('img');
// img.setAttribute('src', url);
// //'<img src="' + url + '">'
// img.onclick = function(event) {
//     event.stopPropagation();
// };