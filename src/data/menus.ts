/* Auto-generated from menu text.
   version: 2
   note: IDs exclude price; duplicates get -2, -3 suffixes
*/

export type T_MenuCategory = 'tacos' | 'menu-enfants' | 'grillade' | 'assiette' | 'sandwich' | 'burger' | 'panini' | 'tex-mex' | 'dessert' | 'glace' | 'smoothie' | 'boisson';

export type MenuCategory = {
    category: T_MenuCategory;
    title: string;
    markettingSubtitle: string;
    imageSrc: string
}

export type MenuItem = {
  id: string;             // e.g., "glace-batonnet-daim" or "glace-batonnet-daim-2"
  category: T_MenuCategory;
  title: string;
  price: number; // EUR
  currency: 'EUR';
  badges: string[];        // e.g., ['cat:assiette','with-fries','meat:chicken','bread:naan','brand:coca cola','size:33cl']
  searchTags: string[];    // tokenized for fuzzy search
  defaultIncludes?: string[];
  options?: Record<string, unknown>;
  popular?: boolean
  desc?: string
  imageSrc?: string
};

export interface MenuData {
  version: number;
  currency: 'EUR';
  categories: MenuCategory[];
  items: readonly MenuItem[];
};


export const MENU: MenuData = {
    version: 1,
    currency: "EUR",
    categories: [
        { imageSrc: '/images/menu/tacos-kebab.png', title: "Tacos", category: "tacos", markettingSubtitle: "Savoureux et généreux, comme on les aime." },
        { imageSrc: '/images/menu/menu-enfants-cheese-burger.png', title: "Menus Enfants", category: "menu-enfants", markettingSubtitle: "Un vrai festin pour les petits gourmands !" },
        { imageSrc: '/images/menu/grillade-brochettes-de-veau.png', title: "Grillades", category: "grillade", markettingSubtitle: "Laissez-vous surprendre par la fraîcheur de nos plats !" },
        { imageSrc: '/images/menu/assiette-chicken.png', title: "Assiettes", category: "assiette", markettingSubtitle: "Une assiette variée et équilibrée." },
        { imageSrc: '/images/menu/sandwich-baguette.png', title: "Sandwichs", category: "sandwich", markettingSubtitle: "Un pain frais et des ingrédients pour tous les goûts." },
        { imageSrc: '/images/menu/burger-double-cheese.png', title: "Burgers", category: "burger", markettingSubtitle: "Goûts riches et variés, toujours bien garnis !" },
        { imageSrc: '/images/menu/panini-kebab.png', title: "Paninis", category: "panini", markettingSubtitle: "Fondants et croustillants, préparés à la minute." },
        { imageSrc: '/images/menu/tex-mex-nuggets.png', title: "Tex Mex", category: "tex-mex", markettingSubtitle: "Croustillants et bien garnis, parfaits à partager !" },
        { imageSrc: '/images/menu/dessert-muffin-nutella.png', title: "Desserts", category: "dessert", markettingSubtitle: "Gourmandises pour petits et grands." },
        { imageSrc: '/images/menu/glace-cornet-daim.png', title: "Glaces", category: "glace", markettingSubtitle: "Un plaisir glacé à savourer à tout moment." },
        { imageSrc: '/images/menu/smoothie-ultra-violet.png', title: "Smoothies", category: "smoothie", markettingSubtitle: "Frais, fruités et pleins de vitalité." },
        { imageSrc: '/images/menu/boisson-coca-cola-33cl.png', title: "Boissons", category: "boisson", markettingSubtitle: "Des boissons fraîches pour accompagner tous vos plats." },
    ],

    items: [
    {
      "id": "menu-enfants-cheese-burger",
      imageSrc: "/images/menu/menu-enfants-cheese-burger.png",
      "category": "menu-enfants",
      "title": "Cheese Burger",
      "price": 6.5,
      "currency": "EUR",
      "badges": [
        "cat:menu enfants",
        "cheesy",
        "kids"
      ],
      "searchTags": [
        "burger",
        "cheese",
        "enfants",
        "menu"
      ],
      "defaultIncludes": [
        "kids-portion"
      ]
    },
    {
      "id": "menu-enfants-nuggets",
      imageSrc: "/images/menu/menu-enfants-nuggets.png",
      "category": "menu-enfants",
      "title": "Nuggets",
      "price": 6.5,
      "currency": "EUR",
      "badges": [
        "cat:menu enfants",
        "kids",
        "meat:chicken"
      ],
      "searchTags": [
        "enfants",
        "menu",
        "nuggets"
      ],
      "defaultIncludes": [
        "kids-portion"
      ]
    },
    {
      "id": "menu-enfants-assiette-kebab",
      imageSrc: "/images/menu/menu-enfants-assiette-kebab.png",
      "category": "menu-enfants",
      "title": "Assiette Kebab",
      "price": 6.5,
      "currency": "EUR",
      "badges": [
        "cat:menu enfants",
        "kids",
        "meat:kebab"
      ],
      "searchTags": [
        "assiette",
        "enfants",
        "kebab",
        "menu"
      ],
      "defaultIncludes": [
        "kids-portion"
      ]
    },
    {
      "id": "grillade-escalopes-de-poulet",
      "category": "grillade",
      "title": "Escalopes de Poulet",
      "price": 13.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "meat:chicken",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "de",
        "escalopes",
        "grillade",
        "poulet"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "grillade-brochettes-de-veau",
      "category": "grillade",
      "title": "Brochettes de Veau",
      "price": 13.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "meat:veal",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "brochettes",
        "de",
        "grillade",
        "veau"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "grillade-brochettes-de-poulet",
      "category": "grillade",
      "title": "Brochettes de Poulet",
      "price": 13.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "meat:chicken",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "brochettes",
        "de",
        "grillade",
        "poulet"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "grillade-mixte",
      "category": "grillade",
      "title": "Mixte",
      "price": 14.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "grillade",
        "mixte"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "grillade-entrecote",
      "category": "grillade",
      "title": "Entrecote",
      "price": 14.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "entrecote",
        "grillade"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "grillade-cotes-d-agneau",
      "category": "grillade",
      "title": "Cotes D'agneau",
      "price": 14.5,
      "currency": "EUR",
      "badges": [
        "cat:grillade",
        "meat:lamb",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "cotes",
        "d'agneau",
        "grillade"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-kebab",
      "category": "assiette",
      "title": "Kebab",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "meat:kebab",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "kebab"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-chicken",
      imageSrc: "/images/menu/assiette-chicken.png",
      "category": "assiette",
      "title": "Chicken",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "meat:chicken",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "chicken"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-steak-hache",
      "category": "assiette",
      "title": "Steak Hache",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "meat:beef",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "hache",
        "steak"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-kefta",
      "category": "assiette",
      "title": "Kefta",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "meat:beef",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "kefta"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-falafel",
      "category": "assiette",
      "title": "Falafel",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "plate",
        "veg",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "falafel"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "assiette-merguez",
      "category": "assiette",
      "title": "Merguez",
      "price": 11.0,
      "currency": "EUR",
      "badges": [
        "cat:assiette",
        "plate",
        "with-fries"
      ],
      "searchTags": [
        "assiette",
        "merguez"
      ],
      "defaultIncludes": [
        "frites",
        "salade"
      ]
    },
    {
      "id": "sandwich-pain-naan",
      "category": "sandwich",
      "title": "Pain Naan",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "bread:naan",
        "cat:sandwich",
        "handheld"
      ],
      "searchTags": [
        "naan",
        "pain",
        "sandwich"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "kefta",
          "steak haché",
          "falafel"
        ],
        "sauces": [
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "withFries": [
          true,
          false
        ]
      }
    },
    {
      "id": "sandwich-pain-turc",
      "category": "sandwich",
      "title": "Pain Turc",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "bread:turc",
        "cat:sandwich",
        "handheld"
      ],
      "searchTags": [
        "pain",
        "sandwich",
        "turc"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "kefta",
          "steak haché",
          "falafel"
        ],
        "sauces": [
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "withFries": [
          true,
          false
        ]
      }
    },
    {
      "id": "sandwich-galette",
      "category": "sandwich",
      "title": "Galette",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "bread:galette",
        "cat:sandwich",
        "handheld"
      ],
      "searchTags": [
        "galette",
        "sandwich"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "kefta",
          "steak haché",
          "falafel"
        ],
        "sauces": [
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "withFries": [
          true,
          false
        ]
      }
    },
    {
      "id": "sandwich-baguette",
      "category": "sandwich",
      "title": "Baguette",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "bread:baguette",
        "cat:sandwich",
        "handheld"
      ],
      "searchTags": [
        "baguette",
        "sandwich"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "kefta",
          "steak haché",
          "falafel"
        ],
        "sauces": [
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "withFries": [
          true,
          false
        ]
      }
    },
    {
      "id": "burger-double-kefta",
      imageSrc: "/images/menu/burger-double-kefta.png",
      "category": "burger",
      "title": "Double Kefta",
      "price": 6.0,
      "currency": "EUR",
      "badges": [
        "cat:burger",
        "double",
        "handheld",
        "meat:beef"
      ],
      "searchTags": [
        "burger",
        "double",
        "kefta"
      ]
    },
    {
      "id": "burger-fish",
      imageSrc: "/images/menu/burger-fish.png",
      "category": "burger",
      "title": "Fish",
      "price": 6.0,
      "currency": "EUR",
      "badges": [
        "cat:burger",
        "handheld",
        "meat:fish"
      ],
      "searchTags": [
        "burger",
        "fish"
      ]
    },
    {
      "id": "burger-chicken",
      imageSrc: "/images/menu/burger-chicken.png",
      "category": "burger",
      "title": "Chicken",
      "price": 6.0,
      "currency": "EUR",
      "badges": [
        "cat:burger",
        "handheld",
        "meat:chicken"
      ],
      "searchTags": [
        "burger",
        "chicken"
      ]
    },
    {
      "id": "burger-double-cheese",
      imageSrc: "/images/menu/burger-double-cheese.png",
      "category": "burger",
      "title": "Double Cheese",
      "price": 6.0,
      "currency": "EUR",
      "badges": [
        "cat:burger",
        "cheesy",
        "double",
        "handheld"
      ],
      "searchTags": [
        "burger",
        "cheese",
        "double"
      ]
    },
    {
      "id": "panini-4-fromages",
      "category": "panini",
      "title": "4 Fromages",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "cheesy",
        "handheld"
      ],
      "searchTags": [
        "4",
        "fromages",
        "panini"
      ]
    },
    {
      "id": "panini-tomates-mozza",
      "category": "panini",
      "title": "Tomates Mozza",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "cheesy",
        "handheld"
      ],
      "searchTags": [
        "mozza",
        "panini",
        "tomates"
      ]
    },
    {
      "id": "panini-chevre-miel",
      "category": "panini",
      "title": "Chevre Miel",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld"
      ],
      "searchTags": [
        "chevre",
        "miel",
        "panini"
      ]
    },
    {
      "id": "panini-jambon",
      "category": "panini",
      "title": "Jambon",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "pork"
      ],
      "searchTags": [
        "jambon",
        "panini"
      ]
    },
    {
      "id": "panini-saumon",
      "category": "panini",
      "title": "Saumon",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "meat:fish"
      ],
      "searchTags": [
        "panini",
        "saumon"
      ]
    },
    {
      "id": "panini-kebab",
      "category": "panini",
      "title": "Kebab",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "meat:kebab"
      ],
      "searchTags": [
        "kebab",
        "panini"
      ]
    },
    {
      "id": "panini-chicken",
      "category": "panini",
      "title": "Chicken",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "meat:chicken"
      ],
      "searchTags": [
        "chicken",
        "panini"
      ]
    },
    {
      "id": "panini-kefta",
      "category": "panini",
      "title": "Kefta",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "meat:beef"
      ],
      "searchTags": [
        "kefta",
        "panini"
      ]
    },
    {
      "id": "panini-steak-hache",
      "category": "panini",
      "title": "Steak Hache",
      "price": 5.5,
      "currency": "EUR",
      "badges": [
        "cat:panini",
        "handheld",
        "meat:beef"
      ],
      "searchTags": [
        "hache",
        "panini",
        "steak"
      ]
    },
    {
      "id": "tex-mex-2-tenders",
      "category": "tex-mex",
      "title": "2 Tenders",
      "price": 2.5,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:2"
      ],
      "searchTags": [
        "2",
        "mex",
        "tenders",
        "tex"
      ]
    },
    {
      "id": "tex-mex-4-tenders",
      "category": "tex-mex",
      "title": "4 Tenders",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:4"
      ],
      "searchTags": [
        "4",
        "mex",
        "tenders",
        "tex"
      ]
    },
    {
      "id": "tex-mex-6-tenders",
      "category": "tex-mex",
      "title": "6 Tenders",
      "price": 6.5,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:6"
      ],
      "searchTags": [
        "6",
        "mex",
        "tenders",
        "tex"
      ]
    },
    {
      "id": "tex-mex-6-wings",
      "category": "tex-mex",
      "title": "6 Wings",
      "price": 5.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:6"
      ],
      "searchTags": [
        "6",
        "mex",
        "tex",
        "wings"
      ]
    },
    {
      "id": "tex-mex-9-wings",
      "category": "tex-mex",
      "title": "9 Wings",
      "price": 7.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:9"
      ],
      "searchTags": [
        "9",
        "mex",
        "tex",
        "wings"
      ]
    },
    {
      "id": "tex-mex-12-wings",
      "category": "tex-mex",
      "title": "12 Wings",
      "price": 9.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:12"
      ],
      "searchTags": [
        "12",
        "mex",
        "tex",
        "wings"
      ]
    },
    {
      "id": "tex-mex-6-nuggets",
      "category": "tex-mex",
      "title": "6 Nuggets",
      "price": 5.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:6"
      ],
      "searchTags": [
        "6",
        "mex",
        "nuggets",
        "tex"
      ]
    },
    {
      "id": "tex-mex-9-nuggets",
      "category": "tex-mex",
      "title": "9 Nuggets",
      "price": 7.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:9"
      ],
      "searchTags": [
        "9",
        "mex",
        "nuggets",
        "tex"
      ]
    },
    {
      "id": "tex-mex-12-nuggets",
      "category": "tex-mex",
      "title": "12 Nuggets",
      "price": 9.0,
      "currency": "EUR",
      "badges": [
        "cat:tex mex",
        "meat:chicken",
        "qty:12"
      ],
      "searchTags": [
        "12",
        "mex",
        "nuggets",
        "tex"
      ]
    },
    {
      "id": "dessert-donuts-chocolat",
      "category": "dessert",
      "title": "Donuts Chocolat",
      "price": 1.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "sweet"
      ],
      "searchTags": [
        "chocolat",
        "dessert",
        "donuts"
      ]
    },
    {
      "id": "dessert-donuts-vanille",
      "category": "dessert",
      "title": "Donuts Vanille",
      "price": 1.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:vanille",
        "sweet"
      ],
      "searchTags": [
        "dessert",
        "donuts",
        "vanille"
      ]
    },
    {
      "id": "dessert-donuts-fraise",
      "category": "dessert",
      "title": "Donuts Fraise",
      "price": 1.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:fraise",
        "sweet"
      ],
      "searchTags": [
        "dessert",
        "donuts",
        "fraise"
      ]
    },
    {
      "id": "dessert-cookies-chocolat",
      "category": "dessert",
      "title": "Cookies Chocolat",
      "price": 1.9,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "sweet"
      ],
      "searchTags": [
        "chocolat",
        "cookies",
        "dessert"
      ]
    },
    {
      "id": "dessert-cookies-trois-chocolats",
      "category": "dessert",
      "title": "Cookies Trois Chocolats",
      "price": 1.9,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "sweet"
      ],
      "searchTags": [
        "chocolats",
        "cookies",
        "dessert",
        "trois"
      ]
    },
    {
      "id": "dessert-muffin-caramel",
      "category": "dessert",
      "title": "Muffin Caramel",
      "price": 2.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:caramel",
        "sweet"
      ],
      "searchTags": [
        "caramel",
        "dessert",
        "muffin"
      ]
    },
    {
      "id": "dessert-eclair-chocolat",
      "category": "dessert",
      "title": "Eclair Chocolat",
      "price": 2.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "sweet"
      ],
      "searchTags": [
        "chocolat",
        "dessert",
        "eclair"
      ]
    },
    {
      "id": "dessert-tarte-au-citron-meringuee",
      "category": "dessert",
      "title": "Tarte Au Citron Meringuée",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:citron",
        "sweet"
      ],
      "searchTags": [
        "au",
        "citron",
        "dessert",
        "meringuée",
        "tarte"
      ]
    },
    {
      "id": "dessert-tarte-au-chocolat-noisettes",
      "category": "dessert",
      "title": "Tarte Au Chocolat Noisettes",
      "price": 2.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "flavor:noisettes",
        "sweet"
      ],
      "searchTags": [
        "au",
        "chocolat",
        "dessert",
        "noisettes",
        "tarte"
      ]
    },
    {
      "id": "dessert-mille-feuille",
      "category": "dessert",
      "title": "Mille Feuille",
      "price": 2.5,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "sweet"
      ],
      "searchTags": [
        "dessert",
        "feuille",
        "mille"
      ]
    },
    {
      "id": "dessert-tarte-aux-daims",
      "category": "dessert",
      "title": "Tarte Aux Daims",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:daim",
        "cat:dessert",
        "flavor:daim",
        "sweet"
      ],
      "searchTags": [
        "aux",
        "daims",
        "dessert",
        "tarte"
      ]
    },
    {
      "id": "dessert-tiramisu-caramel-speculoos",
      "category": "dessert",
      "title": "Tiramisu Caramel Speculoos",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:caramel",
        "flavor:speculoos",
        "sweet"
      ],
      "searchTags": [
        "caramel",
        "dessert",
        "speculoos",
        "tiramisu"
      ]
    },
    {
      "id": "dessert-tiramisu-chocolat-speculoos",
      "category": "dessert",
      "title": "Tiramisu Chocolat Speculoos",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:chocolat",
        "flavor:speculoos",
        "sweet"
      ],
      "searchTags": [
        "chocolat",
        "dessert",
        "speculoos",
        "tiramisu"
      ]
    },
    {
      "id": "dessert-tiramisu-daim",
      "category": "dessert",
      "title": "Tiramisu Daim",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "brand:daim",
        "cat:dessert",
        "flavor:daim",
        "sweet"
      ],
      "searchTags": [
        "daim",
        "dessert",
        "tiramisu"
      ]
    },
    {
      "id": "dessert-muffin-nutella",
      imageSrc: "/images/menu/dessert-muffin-nutella.png",
      "category": "dessert",
      "title": "Muffin Nutella",
      "price": 0.0,
      "currency": "EUR",
      "badges": [
        "cat:dessert",
        "flavor:nutella",
        "sweet"
      ],
      "searchTags": [
        "dessert",
        "muffin",
        "nutella"
      ]
    },
    {
      "id": "glace-batonnet-oasis",
      "category": "glace",
      "title": "Batonnet Oasis",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:oasis",
        "cat:glace",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "glace",
        "oasis"
      ]
    },
    {
      "id": "glace-batonnet-daim",
      "category": "glace",
      "title": "Batonnet Daim",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:daim",
        "cat:glace",
        "flavor:daim",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "daim",
        "glace"
      ]
    },
    {
      "id": "glace-batonnet-oreo",
      "category": "glace",
      "title": "Batonnet Oreo",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:oreo",
        "cat:glace",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "glace",
        "oreo"
      ]
    },
    {
      "id": "glace-batonnet-milka",
      "category": "glace",
      "title": "Batonnet Milka",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:milka",
        "cat:glace",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "glace",
        "milka"
      ]
    },
    {
      "id": "glace-batonnet-toblerone",
      "category": "glace",
      "title": "Batonnet Toblerone",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:toblerone",
        "cat:glace",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "glace",
        "toblerone"
      ]
    },
    {
      "id": "glace-batonnet-daim-2",
      "category": "glace",
      "title": "Batonnet Daim",
      "price": 2.9,
      "currency": "EUR",
      "badges": [
        "brand:daim",
        "cat:glace",
        "flavor:daim",
        "icecream:stick",
        "sweet"
      ],
      "searchTags": [
        "batonnet",
        "daim",
        "glace"
      ]
    },
    {
      "id": "glace-cornet-toblerone",
      "category": "glace",
      "title": "Cornet Toblerone",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "brand:toblerone",
        "cat:glace",
        "icecream:cone",
        "sweet"
      ],
      "searchTags": [
        "cornet",
        "glace",
        "toblerone"
      ]
    },
    {
      "id": "glace-cornet-milka",
      "category": "glace",
      "title": "Cornet Milka",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "brand:milka",
        "cat:glace",
        "icecream:cone",
        "sweet"
      ],
      "searchTags": [
        "cornet",
        "glace",
        "milka"
      ]
    },
    {
      "id": "glace-cornet-oreo",
      "category": "glace",
      "title": "Cornet Oreo",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "brand:oreo",
        "cat:glace",
        "icecream:cone",
        "sweet"
      ],
      "searchTags": [
        "cornet",
        "glace",
        "oreo"
      ]
    },
        {
      "id": "glace-cornet-daim",
      "category": "glace",
      "title": "Cornet Oreo",
      "price": 3.0,
      "currency": "EUR",
      "badges": [
        "brand:daim",
        "cat:glace",
        "icecream:cone",
        "sweet"
      ],
      "searchTags": [
        "cornet",
        "glace",
        "daim"
      ]
    },
    {
      "id": "smoothie-ultra-violet",
      "category": "smoothie",
      "title": "Ultra Violet",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "smoothie",
        "ultra",
        "violet"
      ]
    },
    {
      "id": "smoothie-tropical",
      "category": "smoothie",
      "title": "Tropical",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "smoothie",
        "tropical"
      ]
    },
    {
      "id": "smoothie-fresh",
      "category": "smoothie",
      "title": "Fresh",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "fresh",
        "smoothie"
      ]
    },
    {
      "id": "smoothie-coca-mango",
      "category": "smoothie",
      "title": "Coca Mango",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "coca",
        "mango",
        "smoothie"
      ]
    },
    {
      "id": "smoothie-exotic",
      "category": "smoothie",
      "title": "Exotic",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "exotic",
        "smoothie"
      ]
    },
    {
      "id": "smoothie-melon-pop",
      "category": "smoothie",
      "title": "Melon Pop",
      "price": 4.5,
      "currency": "EUR",
      "badges": [
        "cat:smoothie",
        "cold",
        "fruit",
        "sweet"
      ],
      "searchTags": [
        "melon",
        "pop",
        "smoothie"
      ]
    },
    {
      "id": "boisson-coca-cola-33cl",
      imageSrc: "/images/menu/boisson-coca-cola-33cl.png",
      "category": "boisson",
      "title": "Coca Cola 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:coca cola",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "coca",
        "cola"
      ]
    },
    {
      "id": "boisson-coca-cola-zero-33cl",
      "category": "boisson",
      "title": "Coca Cola Zero 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:coca cola",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "coca",
        "cola",
        "zero"
      ]
    },
    {
      "id": "boisson-coca-cola-cherry-33cl",
      "category": "boisson",
      "title": "Coca Cola Cherry 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:coca cola",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "cherry",
        "coca",
        "cola"
      ]
    },
    {
      "id": "boisson-fanta-orange-33cl",
      "category": "boisson",
      "title": "Fanta Orange 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:fanta",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "fanta",
        "orange"
      ]
    },
    {
      "id": "boisson-fanta-citron-33cl",
      "category": "boisson",
      "title": "Fanta Citron 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:fanta",
        "cat:boisson",
        "drink",
        "flavor:citron",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "citron",
        "fanta"
      ]
    },
    {
      "id": "boisson-orangina-33cl",
      "category": "boisson",
      "title": "Orangina 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:orangina",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "orangina"
      ]
    },
    {
      "id": "boisson-ice-tea-peche-33cl",
      "category": "boisson",
      "title": "Ice Tea Peche 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:ice tea",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "ice",
        "peche",
        "tea"
      ]
    },
    {
      "id": "boisson-oasis-tropical-33cl",
      "category": "boisson",
      "title": "Oasis Tropical 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:oasis",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "oasis",
        "tropical"
      ]
    },
    {
      "id": "boisson-oasis-pomme-poire-33cl",
      "category": "boisson",
      "title": "Oasis Pomme Poire 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:oasis",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "oasis",
        "poire",
        "pomme"
      ]
    },
    {
      "id": "boisson-oasis-fraise-framboise-33cl",
      "category": "boisson",
      "title": "Oasis Fraise Framboise 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:oasis",
        "cat:boisson",
        "drink",
        "flavor:fraise",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "fraise",
        "framboise",
        "oasis"
      ]
    },
    {
      "id": "boisson-schweppes-pomme-33cl",
      "category": "boisson",
      "title": "Schweppes POMME 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:schweppes",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "pomme",
        "schweppes"
      ]
    },
    {
      "id": "boisson-scheppes-agrumes-33cl",
      "category": "boisson",
      "title": "Scheppes Agrumes 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:scheppes",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "agrumes",
        "boisson",
        "scheppes"
      ]
    },
    {
      "id": "boisson-schweppes-lemon-33cl",
      "category": "boisson",
      "title": "Schweppes Lemon 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:schweppes",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "lemon",
        "schweppes"
      ]
    },
    {
      "id": "boisson-sprite-33cl",
      "category": "boisson",
      "title": "Sprite 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:sprite",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "sprite"
      ]
    },
    {
      "id": "boisson-tropico-33cl",
      "category": "boisson",
      "title": "Tropico 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:tropico",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "tropico"
      ]
    },
    {
      "id": "boisson-minute-maid-orange-33cl",
      "category": "boisson",
      "title": "Minute Maid Orange 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:minute maid",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "maid",
        "minute",
        "orange"
      ]
    },
    {
      "id": "boisson-fuze-tea-the-glace-intense-33cl",
      "category": "boisson",
      "title": "Fuze Tea The Glace Intense 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:fuze tea",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "fuze",
        "glace",
        "intense",
        "tea",
        "the"
      ]
    },
    {
      "id": "boisson-perrir-33cl",
      "category": "boisson",
      "title": "Perrir 33CL",
      "price": 1.8,
      "currency": "EUR",
      "badges": [
        "brand:perrir",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "perrir"
      ]
    },
    {
      "id": "boisson-capri-sun",
      "category": "boisson",
      "title": "Capri Sun",
      "price": 1.5,
      "currency": "EUR",
      "badges": [
        "brand:capri sun",
        "cat:boisson",
        "drink"
      ],
      "searchTags": [
        "boisson",
        "capri",
        "sun"
      ]
    },
    {
      "id": "boisson-eau-cristaline-33cl",
      "category": "boisson",
      "title": "Eau Cristaline 33CL",
      "price": 1.2,
      "currency": "EUR",
      "badges": [
        "brand:eau cristaline",
        "cat:boisson",
        "drink",
        "size:33cl"
      ],
      "searchTags": [
        "33cl",
        "boisson",
        "cristaline",
        "eau"
      ]
    },
    {
      "id": "tacos-kebab",
      imageSrc: "/images/menu/tacos-kebab.png",
      "category": "tacos",
      "title": "Kebab",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:kebab",
        "wrap"
      ],
      "searchTags": [
        "kebab",
        "tacos"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    },
    {
      "id": "tacos-chicken",
      "category": "tacos",
      "title": "Chicken",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:chicken",
        "wrap"
      ],
      "searchTags": [
        "chicken",
        "tacos"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    },
    {
      "id": "tacos-tenders",
      "category": "tacos",
      "title": "Tenders",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:chicken",
        "wrap"
      ],
      "searchTags": [
        "tacos",
        "tenders"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    },
    {
      "id": "tacos-steak-hache",
      "category": "tacos",
      "title": "Steak Hache",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:beef",
        "wrap"
      ],
      "searchTags": [
        "hache",
        "steak",
        "tacos"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    },
    {
      "id": "tacos-kefta",
      "category": "tacos",
      "title": "Kefta",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:beef",
        "wrap"
      ],
      "searchTags": [
        "kefta",
        "tacos"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    },
    {
      "id": "tacos-cordon-bleu",
      "category": "tacos",
      "title": "Cordon Bleu",
      "price": 7.5,
      "currency": "EUR",
      "badges": [
        "cat:tacos",
        "fries-inside",
        "handheld",
        "meat:chicken",
        "wrap"
      ],
      "searchTags": [
        "bleu",
        "cordon",
        "tacos"
      ],
      "options": {
        "meats": [
          "kebab",
          "chicken",
          "tenders",
          "steak haché",
          "kefta",
          "cordon bleu"
        ],
        "sauces": [
          "fromagère",
          "algérienne",
          "ketchup",
          "mayo",
          "barbecue",
          "blanche"
        ],
        "size": [
          "M"
        ],
        "extraCheese": [
          true,
          false
        ]
      }
    }
  ]
} as const;

export const findByCategory = (cat: T_MenuCategory) => MENU.items.filter(i => i.category === cat);
export const search = (q: string) => {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean);
  return MENU.items.filter(i =>
    t.every(k => i.title.toLowerCase().includes(k) || i.searchTags.includes(k) || i.badges.some(b => b.includes(k)))
  );
};
