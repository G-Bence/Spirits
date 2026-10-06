import type {introCardInterface} from "../types/introCardInterface";
import type {listCardInterface} from "../types/listCardInterface";
import type {fruitTableInterface} from "../types/fruitTableInterface";
import type {fruitCardInterface} from "../types/fruitCardInterface";
import type {infoCardInterface} from "../types/infoCardInterface";
import type {footerInterface} from "../types/footerInterface";

export const intro: introCardInterface = {
  title: "Mit érdemes tudni a pálinkáról?",
  paragraphs: [
    "A pálinka a magyar gasztronómiai és kulturális hagyományok egyik ismert itala. Készítése során erjesztett gyümölcsből lepárlással állítanak elő gyümölcspárlatot.",
    "A pálinka készítésének egyik fontos alapanyaga a megfelelő minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a szilva, a körte, a meggy és a kajszibarack.",
    "A jó minőségű pálinka készítésénél az alapanyag minősége és a megfelelő technológia egyaránt fontos."
  ]
};

export const lists: listCardInterface[] = [
  {
    title: "Gyakori alapanyagok",
    items: ["Alma", "Körte", "Szilva", "Meggy", "Kajszibarack"],
    numbered: false
  },
  {
    title: "Népszerű pálinkák",
    items: ["Szilvapálinka", "Barackpálinka", "Körtepálinka", "Almapálinka", "Birsalmapálinka"],
    numbered: true
  },
  {
    title: "Íz- és illatjegyek",
    items: ["Gyümölcsös", "Illatos", "Érett gyümölcsre jellemző", "Harmonikus", "Tiszta lecsengésű"],
    numbered: true
  }
];

export const table: fruitTableInterface = {
  title: "Miből készülhet gyümölcspárlat?",
  rows: [
    ["Alma", "Szilva", "Körte"],
    ["Meggy", "Kajszi", "Birsalma"],
    ["Cseresznye", "Őszibarack", "Szőlő"]
  ]
};

export const fruits: fruitCardInterface[] = [
  {
    name: "Banán",
    image: "/images/banan.jpg",
    alt: "Banán",
    description: "A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag."
  },
  {
    name: "Birsalma",
    image: "/images/birsalma.jpg",
    alt: "Birsalma",
    description: "A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető."
  },
  {
    name: "Mogyoró",
    image: "/images/mogyoro.jpg",
    alt: "Mogyoró",
    description: "A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik."
  },
  {
    name: "Gránátalma",
    image: "/images/granatalma.jpg",
    alt: "Gránátalma",
    description: "A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal."
  }
];

export const reminder: infoCardInterface = {
  title: "Amit érdemes megjegyezni",
  items: [
    "A pálinka gyümölcsből készített párlat.",
    "Az alapanyag minősége jelentősen befolyásolja a késztermék tulajdonságait.",
    "A gyümölcsöt először elő kell készíteni és erjeszteni kell.",
    "Az erjesztett gyümölcscefréből lepárlással készül a párlat.",
    "A pálinka megnevezés használatát jogszabály szabályozza."
  ]
};

export const footer: footerInterface = {
  author: "Gipsz Jakab",
  date: "2026.09.27."
};
