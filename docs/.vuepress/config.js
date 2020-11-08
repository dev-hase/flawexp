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
                ['/paedagogik/methoden/', 'Lernmethoden'],
                ['/paedagogik/techniken/', 'Unterrichtsmethoden'],
                ['/paedagogik/sozialformen/', 'Sozialformen'],
                ['/paedagogik/stufenausbildung/', 'Stufenausbildung'],
                
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
                ['/psychologie/motivation/', 'Motivation'],
                ['/psychologie/emotionen/', 'Emotionen'],
                ['/psychologie/gedächtnis/', 'Gedächtnis'],
                ['/psychologie/stress/', 'Stress'],
                ['/psychologie/pruefungsangst/', 'Prüfungsangst'],
              ]
            },
            {
              title: 'Verkehrsverhalten',
              children: [
                ['/verkehrsverhalten/begriffe/', 'Begriffe'],
                ['/verkehrsverhalten/unfall/', 'Verkersunfall'],
                ['/verkehrsverhalten/kinder/', 'Kinder und Gefahrenwahrnehmung'],
                ['/verkehrsverhalten/bf17/', 'BF 17'],
                ['/verkehrsverhalten/umweltfreundlich/', 'Umweltfreundlich Autofahren'],
                ['/verkehrsverhalten/videos/', 'Videos'],
              ]
            },
            {
              title: 'Anhänger',
              children: [
                ['/anhaenger/wichtiges/', 'Wichtiges zum Anhänger'],
                ['/anhaenger/ladung/', 'Ladungssicherung'],
              ]
            },            
            {
              title: 'Technik',
              children: [
                ['/technik/begriffe/', 'Begriffe'],
                ['/technik/autonomesFahren/', 'Fünf Level bis zum selbstfahrenden Auto'],
                ['/technik/elektroauto/', 'Elektroauto'],
                ['/technik/kinematische_kette/', 'Antriebsstrang, Kinematische Kette'],
                ['/technik/viertaktmotor/', 'Viertaktmotor'],
                ['/technik/abgasreinigung/', 'Abgasreinigung'],
                ['/technik/kupplung/', 'Kupplung'],
                ['/technik/getriebe/', 'Getriebe'],
                ['/technik/reifen/', 'Autoreifen'],
                ['/technik/felge/', 'Autofelge'],
                ['/technik/radstellung/', 'Radstellungsgrößen'],
                ['/technik/motorschmierung/', 'Motorschmierung'],
                ['/technik/turbolader/', 'Turbolader'],
                ['/technik/bba/', 'Betriebsbremsanlage (BBA)'],
                ['/technik/fa/', 'Fahrassistenzsysteme'],
                ['/technik/lenkung/', 'Lenkung'],
                ['/technik/kammscher_kreis/', 'Kammscher Kreis'],
                
              ]
            },
            {
              title: 'Recht',
              children: [
                ['/recht/begriffe/', 'rechtlich relevante Begriffe'], 
                ['/recht/wichtig/', 'Wichtiges auf einen Blick'],      
                ['/recht/GesetzeImInternet/', 'Gesetze im Internet'],
                ['/recht/strassen_wegerecht/', 'Straßen- und Wegerecht'],
                ['/recht/strafrecht/', 'Strafrecht'],
                ['/recht/straftaten_stv/', 'Straftaten im Straßenverkehr'],
                ['/recht/owig/', 'Das Ordnungswidrigkeiten-Verfahren'],
                ['/recht/haftung/', 'zivilrechtliche Schadenshaftung'],
                ['/recht/versicherung/', 'Versicherung'],
                ['/recht/punktsystem/', 'Punktsystem'],
              ]
            }


        ],
        nav: [
          { text: 'Inhalt', link: '/#inhalt' },
          { text: 'Info', link: '/info.html' },
        ],

      },




}

