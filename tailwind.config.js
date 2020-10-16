module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        boxShadow: {
            xs: '0 0 3px rgba(0, 0, 0, 0.4)'
        },
        fontFamily: {
            'roboto': ["Roboto", 'sans-serif']
        },
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'blue-nav': 'rgba(62, 126, 167, 0.5)',
                'border-color': 'rgba(16, 21, 25, 0.3)',
                'initgradient': 'rgb(227, 234, 239) 5%',
                'finalgradient': 'rgb(199, 213, 224) 95%',
                'bg-image-gradient': '#1b2838',
                'searchcolor': '#0e1c25',
                'inputdefault': '#305d8a'

            },
            backgroundImage: theme => ({
                'bg-image': "url(https://steamstore-a.akamaihd.net/public/images/v6/colored_body_top2.png?v=2)"
            }),
            gridTemplateColumns: {
                'main': '200px 1fr'
            },

        },
    },
    variants: {},
    plugins: [],
}
