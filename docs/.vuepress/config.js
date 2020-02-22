module.exports = {
  title: 'FlaW2020',
  description: 'Lernhilfen für Fahrlehreranwärter',

  plugins: [
    ['@vuepress/nprogress'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "Inhalte wurden geändert",
          buttonText: "nachladen..."
        }
      }
    ]
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#26769d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#26769d' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com/', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Amatic+SC:700|Inconsolata:400,700&display=swap&subset=latin-ext' }]
  ],

    themeConfig: {
        serviceWorker: {
              updatePopup: { 
                    message: "Inhalte wurden geändert", 
                    buttonText: "nachladen..." 
              }
            },
        smoothScroll: true,   
        sidebar: [
            {
              title: 'Pädagogik',
              children: [
                ['/paedagogik/begriffe/', 'Begriffe'],
              ]
            },
            {
              title: 'Kommunikation',
              children: [

              ]
            },
            {
              title: 'psychologie',
              children: [
                ['/psychologie/begriffe/', 'Begriffe'],
              ]
            },
            {
              title: 'Verkehrsverhalten',
              children: [
                ['/verkehrsverhalten/begriffe/', 'Begriffe'],
              ]
            },
            {
              title: 'Technik',
              children: [
                ['/technik/kinematische_kette/', 'Kinematische Kette'],
                ['/technik/viertaktmotor/', 'Viertaktmotor'],
                ['/technik/bba/', 'Betriebsbremsanlage (BBA)'],
                ['/technik/zweikreisbremsanlage/', 'Zweikreisbremsanlage'],
                ['/technik/auflaufbremse/', 'Auflaufbremse'],
                ['/technik/fa/', 'Fahrassistenzsysteme'],
                ['/technik/kammscher_kreis/', 'Kammscher Kreis'],
                ['/technik/begriffe/', 'begriffe'],
              ]
            },
            {
              title: 'Recht',
              children: [      
  
              ]
            }


        ],
        nav: [
          { text: 'Inhalt', link: '/#inhalt' },
          { text: 'Info', link: '/info.html' },
        ],

      },




}

