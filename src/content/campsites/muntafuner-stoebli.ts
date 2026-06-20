import type { CampsiteConfig } from "../types";

/**
 * Muntafuner Stöbli — Gästehaus & Camping in Gortipohl im Montafon (Vorarlberg).
 * Quelle: raw/digest (eigene Website). Familiär geführtes, 2010 renoviertes Montafoner
 * Gästehaus aus Zirbenholz mit Stellplätzen am Haus. Keine Preise auf der Website →
 * Richtpreise (Placeholder) offen deklariert. Bildarm (7 echte Fotos) → keine Galerie.
 */
const IMG = "/campsites/muntafuner-stoebli";

const muntafunerStoebli: CampsiteConfig = {
  name: "Muntafuner Stöbli",
  shortName: "Stöbli",
  slug: "muntafuner-stoebli",
  ort: "Gortipohl im Montafon",
  region: "Vorarlberg",
  brandKind: "Gästehaus & Camping",
  regionLong: "Montafon · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Bergurlaub aus Zirbenholz — mitten im Montafon",
  claimEmphasis: "mitten im Montafon",
  emailDetail: "euer Gästehaus aus Zirbenholz mitten im Montafon",
  intro:
    "Ein stilvolles Gästehaus im Montafon, 2010 liebevoll renoviert: warme Bauernstuben aus Zirbenholz, persönlicher Service der Familie Rudigier — und Stellplätze direkt am Haus, mitten in den Silvretta-Bergen.",

  logo: { src: `${IMG}/logo.png`, alt: "Muntafuner Stöbli Gortipohl Logo" },

  statement: {
    text: "Hier wohnst du zwischen echtem Zirbenholz und den Bergen des Montafon.",
    emphasis: "echtem Zirbenholz",
  },

  pillars: [
    {
      title: "Zirbenholz & Tradition",
      text: "Echte Montafoner Stuben aus Zirbenholz, 2010 renoviert — mit einer Wärme, die man heute selten findet.",
      image: { src: `${IMG}/zimmer-zirbe.webp`, alt: "Gästezimmer aus Zirbenholz im Muntafuner Stöbli" },
    },
    {
      title: "Küche & Weinkeller",
      text: "Ausgezeichnete Küche und ein eigener Weinkeller — gegessen wird in der getäfelten Montafoner Stube.",
      image: { src: `${IMG}/kueche-stube.webp`, alt: "Gedeckter Tisch in der Stube des Muntafuner Stöbli" },
    },
    {
      title: "Gemütlich & persönlich",
      text: "Familie Rudigier empfängt dich persönlich — in der warmen Stube mit Kachelofen, für Jung und Alt.",
      image: { src: `${IMG}/stube.webp`, alt: "Gemütliche Stube mit Kachelofen im Muntafuner Stöbli" },
    },
  ],

  usps: [
    "Zirbenholz-Stuben",
    "Familiär geführt",
    "Ausgezeichnete Küche",
    "Eigener Weinkeller",
    "Stellplätze am Haus",
    "Silvretta Montafon",
  ],

  trust: {
    heading: "Klein, echt und mittendrin im Montafon",
    headingEmphasis: "mittendrin im Montafon",
    intro:
      "Kein anonymes Großhotel, sondern ein familiäres Gästehaus mit eigenen Stellplätzen: Zirbenholz-Stuben, gute Küche und die Silvretta-Berge direkt vor der Tür — geführt von der Familie Rudigier.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-silvretta.webp`, alt: "Verschneite Silvretta-Berge im Montafon über Gortipohl" },
  },

  camping: {
    heading: "Dein Stellplatz am Stöbli",
    intro:
      "Stell dein Wohnmobil oder Zelt direkt am Gästehaus ab — mit der Silvretta ringsum und der warmen Stube samt Küche gleich nebenan.",
    features: [
      {
        title: "Direkt am Gästehaus",
        text: "Die Stellplätze liegen unmittelbar am Stöbli — Rezeption, Stube und Küche sind nur wenige Schritte entfernt.",
        image: { src: `${IMG}/gaestehaus-sommer.webp`, alt: "Muntafuner Stöbli mit Sonnenterrasse vor den Montafoner Bergen" },
      },
      {
        title: "Restaurant & Weinkeller",
        text: "Nach dem Wandertag wartet die Montafoner Stube — ausgezeichnete Küche und ein eigener Weinkeller, direkt für dich als Gast am Platz.",
        image: { src: `${IMG}/restaurant-bar.webp`, alt: "Holzvertäfelte Bar und Weinkeller des Muntafuner Stöbli in Gortipohl" },
      },
      {
        title: "Auch im Winter",
        text: "Wenn Schnee fällt, beginnt im Montafon die Skisaison — ideal als Ausgangspunkt für deinen Winterurlaub.",
        image: { src: `${IMG}/stoebli-winter.webp`, alt: "Verschneites Muntafuner Stöbli im Winter" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Montafon",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A14 bis Bludenz, dann auf der Montafonstraße L188 durchs Tal bis Gortipohl — durchgehend beschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Bahn bis Bludenz, weiter mit dem Landbus Montafon bis St. Gallenkirch / Gortipohl.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Nächste Flughäfen sind Friedrichshafen und Zürich — jeweils rund 1,5 bis 2 Stunden mit dem Auto.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Stöbli",
    headingEmphasis: "Stöbli",
    intro: "Ein paar Ansichten vom Gästehaus und vom Platz mitten im Montafon.",
    tag: "Montafon",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Stöbli",
    headingEmphasis: "im Stöbli",
    intro: "Wähle Zeitraum und Personen — Familie Rudigier meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote: "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen) · 2 Personen inkl. Strom · zzgl. Ortstaxe",
    highlight: {
      title: "Mitten im Montafon",
      text: "Vom Stellplatz direkt in die Silvretta-Berge — und abends in die warme Stube.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.00516, lng: 10.007452 },
    tel: "+43(0)5557 6608",
    telHref: "tel:+4355576608",
    mail: "info@muntafuner-stoebli.at",
    adresse: "Gortipohl 23 · 6791 St. Gallenkirch · Montafon",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default muntafunerStoebli;
