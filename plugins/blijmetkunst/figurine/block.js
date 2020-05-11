(function (blocks, components, i18n, element) {

    var el = wp.element.createElement
    var registerBlockType = wp.blocks.registerBlockType
    var PlainText = wp.blockEditor.PlainText
    var BlockControls = wp.blockEditor.BlockControls
    var MediaUpload = wp.blockEditor.MediaUpload

    registerBlockType( 'blijmetkunst/figurine-block', {
        title: 'Beeldje',
        icon: 'businessman',
        category: 'common',
        example: {},
        attributes: {
            title: {
                type: 'string'
            },
            size: {
                type: 'string'
            },
            price: {
                type: 'string'
            },
            greyPhotoId: {
                type: 'number'
            },
            greyPhotoUrl: {
                type: 'string'
            },
            colorPhotoId: {
                type: 'number'
            },
            colorPhotoUrl: {
                type: 'string'
            }
        },
        edit: function (props) {
            var attributes = props.attributes
            console.log("edit", attributes)

            var onSelectGreyImage = function (media) {
                return props.setAttributes({
                    greyPhotoUrl: media.url,
                    greyPhotoId: media.id
                })
            }

            var onSelectColorImage = function (media) {
                return props.setAttributes({
                    colorPhotoUrl: media.url,
                    colorPhotoId: media.id
                })
            }

            return el('div', {className: 'blijmetkunst-figurine blijmetkunst-figurine-block'}, [
                el(MediaUpload, {
                    onSelect: onSelectGreyImage,
                    type: 'image',
                    value: attributes.greyPhotoId,
                    render: function (obj) {
                        return el('div', {
                                className: 'blijmetkunst-figurine-image-button',
                                onClick: obj.open
                            },
                            !attributes.greyPhotoId ? el('span', {className: 'blijmetkunst-figurine-image'}, 'Beeldje zonder kleur') :
                                el('img', {className: 'blijmetkunst-figurine-image', src: attributes.greyPhotoUrl})
                        )
                    }
                }),
                el('div', {className: 'blijmetkunst-figurine-info'}, [
                    el(PlainText, {
                        key: 'editable',
                        tagName: 'div',
                        className: 'blijmetkunst-figurine-title',
                        placeholder: 'Naam',
                        value: attributes.title,
                        onChange: function (newTitle) {
                            props.setAttributes({title: newTitle})
                        }
                    }),
                    el(PlainText, {
                        key: 'editable',
                        tagName: 'div',
                        className: 'blijmetkunst-figurine-size',
                        placeholder: 'Hoogte',
                        value: attributes.size,
                        onChange: function (newValue) {
                            props.setAttributes({size: newValue})
                        }
                    }),
                    el(PlainText, {
                        key: 'editable',
                        tagName: 'div',
                        className: 'blijmetkunst-figurine-price',
                        placeholder: 'Prijs',
                        value: attributes.price,
                        onChange: function (newValue) {
                            props.setAttributes({price: newValue})
                        }
                    }),
                    el(MediaUpload, {
                        onSelect: onSelectColorImage,
                        type: 'image',
                        value: attributes.colorPhotoId,
                        render: function (obj) {
                            return el('div', {
                                    className: 'blijmetkunst-figurine-color-image-button',
                                    onClick: obj.open
                                },
                                !attributes.colorPhotoId ? el('span', {className: 'blijmetkunst-figurine-color-image'}, 'Beeldje met kleur') :
                                    el('img', {className: 'blijmetkunst-figurine-color-image', src: attributes.colorPhotoUrl})
                            )
                        }
                    })
                ])
            ])
        },
        save: function (props) {
            var attributes = props.attributes

            var element = el('div', {className: 'blijmetkunst-figurine'}, [
                el('img', {className: 'blijmetkunst-figurine-image', src: attributes.greyPhotoUrl}),
                el('div', {className: 'blijmetkunst-figurine-info'}, [
                    el('div', {className: 'blijmetkunst-figurine-title'}, attributes.title),
                    el('div', {className: 'blijmetkunst-figurine-size'}, 'Hoogte: ' + attributes.size + ' cm'),
                    el('div', {className: 'blijmetkunst-figurine-price'}, 'euro ' + attributes.price),
                    el('img', {className: 'blijmetkunst-figurine-color-image', src: attributes.colorPhotoUrl})
                ])
            ])

            // <div>
            //     <div class="title">Paw Patrol Chase</div>
            //     <div class="size">Hoogte: 14 cm</div>
            //     <div class="price">&euro; 17</div>
            // </div>

            console.log("save", props, element);

            return (
                element
            )
        },
    });
})
(
    window.wp.blocks,
    window.wp.components,
    window.wp.i18n,
    window.wp.element
)