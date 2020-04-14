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
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
      },
    ],
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
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,600;1,800&family=Montserrat:wght@500;700&display=swap" rel="stylesheet' }],
    
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
                ['/paedagogik/lerntheorien/', 'Lerntheorien'],
                ['/paedagogik/unterrichtsplanung/', 'Unterrichtsplanung'],
                ['/paedagogik/prinzipien/', 'Unterrichtsprinzipien'],
                ['/paedagogik/methoden/', 'Unterrichtsmethoden'],
                ['/paedagogik/techniken/', 'Unterrichtstechniken'],
                ['/paedagogik/sozialformen/', 'Sozialformen'],
                
              ]
            },
            {
              title: 'Kommunikation',
              children: [
                ['/kommunikation/begriffe/', 'Begriffe'],
                ['/kommunikation/vier-seiten-modell/', 'Vier-Seiten-Modell, Vier-Ohren-Modell'],
                ['/kommunikation/die-5-axiome/', 'Metakommunikatives Axiom, die fünf Axiome'],
                ['/kommunikation/videos/', 'Videos über Kommunikation'],
              ]
            },
            {
              title: 'Psychologie',
              children: [
                ['/psychologie/begriffe/', 'Begriffe'],
                ['/psychologie/bigFive/', 'Big Five'],
                ['/psychologie/gedächtnis/', 'Gedächtnis'],
              ]
            },
            {
              title: 'Verkehrsverhalten',
              children: [
                ['/verkehrsverhalten/begriffe/', 'Begriffe'],
                ['/verkehrsverhalten/videos/', 'Videos'],
              ]
            },
            {
              title: 'Technik',
              children: [
                ['/technik/begriffe/', 'Begriffe'],
                ['/technik/autonomesFahren/', 'Fünf Level bis zum selbstfahrenden Auto'],
                ['/technik/kinematische_kette/', 'Antriebsstrang, Kinematische Kette'],
                ['/technik/viertaktmotor/', 'Viertaktmotor'],
                ['/technik/kupplung/', 'Kupplung'],
                ['/technik/getriebe/', 'Getriebe'],
                ['/technik/reifen/', 'Autoreifen'],
                ['/technik/felge/', 'Autofelge'],
                ['/technik/motorschmierung/', 'Motorschmierung'],
                ['/technik/turbolader/', 'Turbolader'],
                ['/technik/bba/', 'Betriebsbremsanlage (BBA)'],
                ['/technik/zweikreisbremsanlage/', 'Zweikreisbremsanlage'],
                ['/technik/auflaufbremse/', 'Auflaufbremse'],
                ['/technik/fa/', 'Fahrassistenzsysteme'],
                ['/technik/kammscher_kreis/', 'Kammscher Kreis'],
                
              ]
            },
            {
              title: 'Recht',
              children: [      
                ['/recht/GesetzeImInternet/', 'Gesetze im Internet'],
              ]
            }


        ],
        nav: [
          { text: 'Inhalt', link: '/#inhalt' },
          { text: 'Info', link: '/info.html' },
        ],

      },




}

