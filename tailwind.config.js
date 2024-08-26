/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './commonComponents/**/*.{html,js}',
        './public/pages/**/*.{html,js}',
        './index.html',
    ],
    theme: {
        fontFamily: {
            sans: ['"Ruda"', 'ui-sans-serif', 'system-ui'],
        },
        fontSize: {
            xxs: '10px',
            xs: ['12px', '16px'],
            sm: ['14px', '19px'],
            15: ['15px', '20px'],
            base: ['16px', '21px'],
            lg: ['18px', '24px'],
            xl: ['21px', '28px'],
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        extend: {
            content: {
                star: 'url("img/star.svg")',
            },
            dropShadow: {
                'around': '0 0px 8px rgba(0, 0, 0, 0.25)',
                'around-light': '0 0px 8px rgba(0, 0, 0, 0.15)',
                top: '0 -6px 6px rgba(0, 0, 0, 0.1)',
                sharp: '0 1px 1px rgba(0, 0, 0, 0.5)',
            },
            maxHeight: {
                '90': '93vh',
            },
            height: {
                '90': '93vh',
            },
            maxWidth: {
                '420': '420px',
            },
            colors: {
                'rttf-color': '#408053',
                'rttf-color-10': '#5b95701a',
                'rttf-color-10-solid': '#ebf5ef',
                'rttf-yellow': '#EB981C',
                'rttf-light-yellow': '#FFB547',
                'rttf-red': '#D94E4C',
                'rttf-blue': '#247AAE',
                'rttf-green': '#408053',
                'rttf-purple': '#CC5DD6',
                'rttf-black': '#213551',
                'rttf-black-50': '#04162c7a',
                'rttf-black-30': 'rgba(8, 39, 77, 0.3)',
                'rttf-black-10': '#21355122',
                'page-background': '#EFF2F4',
                'promo-background': 'rgba(255, 183, 16, 0.15)',
            },
            screens: {
                'xs': '375px',
                '430': '430px',
                '480': '480px',
                '576': '576px',
                '768': '768px'
            },
            scale: {
                '97': '.97',
            },
            saturate: {
                25: '.25',
                75: '.75',
            },
            backgroundImage: {
                'avatar-gradient':
                    'radial-gradient(116.2% 116.2% at 10% 11.25%, #51C276 0%, #47A99D 40.63%, #3783D7 100%)',
                gold: 'linear-gradient(149deg, #FFCE31 0%, #FFCA21 25%, #FFE287 48%, #EAC039 78%)',
                silver: 'linear-gradient(180deg, #BFCACD 0%, #F2F9FB 40%, #C8D4D8 71%, #CAE8F0 100%)',
                bronze: 'linear-gradient(151deg, #D78E5D 0%, #ECCEBA 40%, #D78A56 68%, #D29A73 100%)',
            },
        },
    },
    plugins: [],
}
