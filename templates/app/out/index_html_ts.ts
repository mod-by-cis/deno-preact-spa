export const content = `
<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#FCFDE4" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="TITLE-APP" />
  <style>
    /* === PRESETY PODSTAWOWE === */

    /* A0: Izolacja kontekstu "stackowania" dla #root (zapobiega problemom z z-index) */
    #root {
      isolation: isolate;
      -webkit-isolation: isolate;
      /* Starsze WebKit */
      height: 100%;
      width: 100%;
    }

    /* A1: Ujednolicenie modelu pudełkowego (box-sizing) */
    *,
    *::before,
    *::after {
      -webkit-box-sizing: border-box;
      /* Starsze Chrome, Safari */
      -moz-box-sizing: border-box;
      /* Starsze Firefox */
      box-sizing: border-box;
    }

    /* A2: Usunięcie domyślnych marginesów */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* A3: Ustawienia ogólne dla body i html */
    html,
    body {
      height: 100%;
      width: 100%;
      line-height: 1.5;
      /* Poprawa czytelności */
      -webkit-font-smoothing: antialiased;
      /* Lepsze renderowanie czcionek */
      -webkit-font-smoothing: antialiased;
      /* Lepsze renderowanie czcionek (WebKit) */
      -moz-osx-font-smoothing: grayscale;
      /* Lepsze renderowanie czcionek (Firefox/macOS) */
      -ms-touch-action: manipulation;
      /* IE */
      touch-action: manipulation;
      /* Wyłączenie auto-zoom na urządzeniach mobilnych */
    }

    /* A4: Reset stylów dla list */
    ul,
    ol {
      padding: 0;
      list-style: none;
    }

    /* A5: Responsywność mediów */
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    /* A6: Dziedziczenie czcionek przez elementy formularzy */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* A7: Usunięcie domyślnych stylów dla linków */
    a {
      -webkit-text-decoration-skip: objects;
      /* Lepsze podkreślenia w Safari */
      text-decoration: none;
      color: inherit;
    }

    /* A8: Zapobieganie przepełnieniu tekstu */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
      word-wrap: break-word;
      /* Starszy odpowiednik dla overflow-wrap */
    }

    /* A9: Zapobieganie auto-zoom na iOS po fokusie na input/textarea */
    input,
    textarea {
      font-size: 16px !important;
    }

    /* === KLASY UŻYTKOWE === */

    /* B1: Blokada zaznaczania tekstu */
    .non-select {
      -webkit-user-select: none;
      /* Safari, Chrome */
      -moz-user-select: none;
      /* Firefox */
      -ms-user-select: none;
      /* IE 10/11 */
      user-select: none;
      /* Standard */
    }

    /* B2: Blokada gestu "pinch-to-zoom" */
    .non-pinch-to-zoom {
      -ms-touch-action: pan-x pan-y;
      /* IE */
      touch-action: pan-x pan-y;
    }

    
  </style>
  <link rel="stylesheet" href="gen/main.css" />
</head>

<body>
  <main id="root"></main>
  <script>
    // Tworzymy funkcję do dynamicznego ładowania skryptów, aby kod był czystszy
      function loadScript(src) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        document.body.appendChild(script);
        // Zwracamy Promise, aby można było czekać na załadowanie (opcjonalne)
        return new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }
      loadScript('gen/main.mjs');
      </script>
</body>

</html>
`;
