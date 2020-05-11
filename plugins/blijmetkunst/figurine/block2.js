(function (blocks, editor, components, i18n, element) {

    var el = wp.element.createElement
    var registerBlockType = wp.blocks.registerBlockType
    var PlainText = wp.blockEditor.PlainText
    var BlockControls = wp.blockEditor.BlockControls
    var MediaUpload = wp.blockEditor.MediaUpload

    registerBlockType( 'blijmetkunst/example-block', {
        title: 'Example: Basic',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit() {
            return '<div>Hello World, step 1 (from the editor).</div>';
        },
        save() {
            return '<div>Hello World, step 1 (from the frontend).</div>';
        },
    } );

    registerBlockType('blijmetkunst/figurine-block', {
        title: i18n.__('Figurine'),
        icon: 'businessman',
        category: 'common',
        attributes: {
            title: {
                type: 'string'
            },
            price: {
                type: 'number'
            },
            height: {
                type: 'string'
            },
            // greyPhotoID: {
            //     type: 'number'
            // },
            // greyPhotoURL: {
            //     type: 'string',
            //     source: 'attribute',
            //     selector: 'img',
            //     attribute: 'src'
            // },
            // colorPhotoID: {
            //     type: 'number'
            // },
            // colorPhotoURL: {
            //     type: 'string',
            //     source: 'attribute',
            //     selector: 'img',
            //     attribute: 'src'
            // }
        },
        edit: function (props) {
            var attributes = props.attributes

            // var onSelectGreyImage = function (media) {
            //     return props.setAttributes({
            //         greyPhotoURL: media.url,
            //         greyPhotoID: media.id
            //     })
            // }

            // var onSelectColorImage = function (media) {
            //     return props.setAttributes({
            //         colorPhotoURL: media.url,
            //         colorPhotoID: media.id
            //     })
            // }

            return [
                el(BlockControls, {key: 'controls'}, // Display controls when the block is clicked on.
                    el('div', {className: 'components-toolbar'},
                        // el(MediaUpload, {
                        //     onSelect: onSelectGreyImage,
                        //     type: 'image',
                        //     render: function (obj) {
                        //         return el(components.Button, {
                        //                 className: 'components-icon-button components-toolbar__control',
                        //                 onClick: obj.open
                        //             },
                        //             // Add Dashicon for media upload button.
                        //             el('svg', {className: 'dashicon dashicons-edit', width: '20', height: '20'},
                        //                 el('path', {d: 'M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z'})
                        //             ))
                        //     }
                        // }),
                        // el(MediaUpload, {
                        //     onSelect: onSelectColorImage,
                        //     type: 'image',
                        //     render: function (obj) {
                        //         return el(components.Button, {
                        //                 className: 'components-icon-button components-toolbar__control',
                        //                 onClick: obj.open
                        //             },
                        //             // Add Dashicon for media upload button.
                        //             el('svg', {className: 'dashicon dashicons-edit', width: '20', height: '20'},
                        //                 el('path', {d: 'M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z'})
                        //             ))
                        //     }
                        // })
                    ),
                    el('div', {className: props.className},
                        // el(MediaUpload, {
                        //     onSelect: onSelectGreyImage,
                        //     type: 'image',
                        //     value: attributes.greyPhotoID,
                        //     render: function (obj) {
                        //         return el(components.Button, {
                        //                 className: attributes.greyPhotoID ? 'image-button' : 'button button-large',
                        //                 onClick: obj.open
                        //             },
                        //             !attributes.greyPhotoID ? i18n.__('Upload Image') : el('img', {src: attributes.greyPhotoURL})
                        //         )
                        //     }
                        // }),
                        el('div', {className: 'blijmetkunst-figurine-content'},
                            el(PlainText, {
                                key: 'editable',
                                tagName: 'h3',
                                placeholder: 'Figurine name',
                                keepPlaceholderOnFocus: true,
                                value: attributes.title,
                                onChange: function (newTitle) {
                                    props.setAttributes({title: newTitle})
                                }
                            }),
                            el(PlainText, {
                                tagName: 'h5',
                                placeholder: i18n.__('Price'),
                                keepPlaceholderOnFocus: true,
                                value: attributes.price,
                                onChange: function (newPrice) {
                                    props.setAttributes({price: newPrice})
                                }
                            }),
                            el(PlainText, {
                                key: 'editable',
                                tagName: 'p',
                                placeholder: i18n.__('Height'),
                                keepPlaceholderOnFocus: true,
                                value: attributes.height,
                                onChange: function (newHeight) {
                                    props.setAttributes({height: newHeight})
                                }
                            })
                        )
                    )
                )
            ]
        },

        save: function (props) {
            var attributes = props.attributes

            if (attributes.title === '') {
                return false;
            }

            console.log("save", props);

            return (
                el('div', {className: props.className},
                    // el('img', {className: 'blijmetkunst-figurine-image', src: attributes.greyPhotoURL}),
                    el('div', {className: 'blijmetkunst-figurine-content'},
                        el(PlainText.Content, {
                            tagName: 'h3',
                            value: attributes.title
                        }),
                        el(PlainText.Content, {
                            tagName: 'h5',
                            value: attributes.price
                        }),
                        el(PlainText.Content, {
                            tagName: 'p',
                            value: attributes.height
                        })
                    )
                )
            )
        }
    })
})
(
    window.wp.blocks,
    window.wp.editor,
    window.wp.components,
    window.wp.i18n,
    window.wp.element
)