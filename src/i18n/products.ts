import type { Locale } from './types';

export interface ProductText {
  name: string;
  portion: string;
}

export const productTexts: Record<string, Record<Locale, ProductText>> = {
  oatmeal: {
    en: { name: 'Oatmeal (dry)', portion: '1 cup (80 g)' },
    ru: { name: 'Овсянка (сухая)', portion: '1 стакан (80 г)' },
    uk: { name: 'Вівсянка (суха)', portion: '1 склянка (80 г)' },
  },
  'brown-rice': {
    en: { name: 'Brown rice (cooked)', portion: '1 cup (195 g)' },
    ru: { name: 'Бурый рис (варёный)', portion: '1 стакан (195 г)' },
    uk: { name: 'Бурий рис (варений)', portion: '1 склянка (195 г)' },
  },
  quinoa: {
    en: { name: 'Quinoa (cooked)', portion: '1 cup (185 g)' },
    ru: { name: 'Киноа (варёная)', portion: '1 стакан (185 г)' },
    uk: { name: 'Кіноа (варена)', portion: '1 склянка (185 г)' },
  },
  buckwheat: {
    en: { name: 'Buckwheat (cooked)', portion: '1 cup (168 g)' },
    ru: { name: 'Гречка (варёная)', portion: '1 стакан (168 г)' },
    uk: { name: 'Гречка (варена)', portion: '1 склянка (168 г)' },
  },
  'whole-wheat-bread': {
    en: { name: 'Whole wheat bread', portion: '2 slices (56 g)' },
    ru: { name: 'Цельнозерновой хлеб', portion: '2 ломтика (56 г)' },
    uk: { name: 'Цільнозерновий хліб', portion: '2 скибки (56 г)' },
  },
  lentils: {
    en: { name: 'Lentils (cooked)', portion: '1 cup (198 g)' },
    ru: { name: 'Чечевица (варёная)', portion: '1 стакан (198 г)' },
    uk: { name: 'Сочевиця (варена)', portion: '1 склянка (198 г)' },
  },
  chickpeas: {
    en: { name: 'Chickpeas (cooked)', portion: '1 cup (164 g)' },
    ru: { name: 'Нут (варёный)', portion: '1 стакан (164 г)' },
    uk: { name: 'Нут (варений)', portion: '1 склянка (164 г)' },
  },
  'black-beans': {
    en: { name: 'Black beans (cooked)', portion: '1 cup (172 g)' },
    ru: { name: 'Чёрная фасоль (варёная)', portion: '1 стакан (172 г)' },
    uk: { name: 'Чорна квасоля (варена)', portion: '1 склянка (172 г)' },
  },
  edamame: {
    en: { name: 'Edamame (cooked)', portion: '1 cup (155 g)' },
    ru: { name: 'Эдамаме (варёный)', portion: '1 стакан (155 г)' },
    uk: { name: 'Едамаме (варений)', portion: '1 склянка (155 г)' },
  },
  'tofu-firm': {
    en: { name: 'Tofu (firm)', portion: '150 g' },
    ru: { name: 'Тофу (твёрдый)', portion: '150 г' },
    uk: { name: 'Тофу (твердий)', portion: '150 г' },
  },
  tempeh: {
    en: { name: 'Tempeh', portion: '100 g' },
    ru: { name: 'Темпе', portion: '100 г' },
    uk: { name: 'Темпе', portion: '100 г' },
  },
  almonds: {
    en: { name: 'Almonds', portion: '30 g (handful)' },
    ru: { name: 'Миндаль', portion: '30 г (горсть)' },
    uk: { name: 'Мигдаль', portion: '30 г (жменя)' },
  },
  walnuts: {
    en: { name: 'Walnuts', portion: '30 g (handful)' },
    ru: { name: 'Грецкие орехи', portion: '30 г (горсть)' },
    uk: { name: 'Волоські горіхи', portion: '30 г (жменя)' },
  },
  chia: {
    en: { name: 'Chia seeds', portion: '2 tbsp (24 g)' },
    ru: { name: 'Семена чиа', portion: '2 ст.л. (24 г)' },
    uk: { name: 'Насіння чіа', portion: '2 ст.л. (24 г)' },
  },
  flax: {
    en: { name: 'Ground flax seeds', portion: '2 tbsp (14 g)' },
    ru: { name: 'Семена льна (молотые)', portion: '2 ст.л. (14 г)' },
    uk: { name: 'Насіння льону (мелене)', portion: '2 ст.л. (14 г)' },
  },
  'pumpkin-seeds': {
    en: { name: 'Pumpkin seeds', portion: '3 tbsp (30 g)' },
    ru: { name: 'Тыквенные семечки', portion: '3 ст.л. (30 г)' },
    uk: { name: 'Гарбузове насіння', portion: '3 ст.л. (30 г)' },
  },
  'sunflower-seeds': {
    en: { name: 'Sunflower seeds', portion: '3 tbsp (30 g)' },
    ru: { name: 'Семечки подсолнечника', portion: '3 ст.л. (30 г)' },
    uk: { name: 'Насіння соняшнику', portion: '3 ст.л. (30 г)' },
  },
  tahini: {
    en: { name: 'Tahini', portion: '2 tbsp (30 g)' },
    ru: { name: 'Тахини', portion: '2 ст.л. (30 г)' },
    uk: { name: 'Тахіні', portion: '2 ст.л. (30 г)' },
  },
  'peanut-butter': {
    en: { name: 'Peanut butter', portion: '2 tbsp (32 g)' },
    ru: { name: 'Арахисовая паста', portion: '2 ст.л. (32 г)' },
    uk: { name: 'Арахісова паста', portion: '2 ст.л. (32 г)' },
  },
  spinach: {
    en: { name: 'Spinach (fresh)', portion: '2 cups (60 g)' },
    ru: { name: 'Шпинат (свежий)', portion: '2 стакана (60 г)' },
    uk: { name: 'Шпинат (свіжий)', portion: '2 склянки (60 г)' },
  },
  kale: {
    en: { name: 'Kale', portion: '1 cup (67 g)' },
    ru: { name: 'Кейл', portion: '1 стакан (67 г)' },
    uk: { name: 'Кейл', portion: '1 склянка (67 г)' },
  },
  broccoli: {
    en: { name: 'Broccoli (cooked)', portion: '1 cup (156 g)' },
    ru: { name: 'Брокколи (варёная)', portion: '1 стакан (156 г)' },
    uk: { name: 'Броколі (варена)', portion: '1 склянка (156 г)' },
  },
  'bell-pepper': {
    en: { name: 'Bell pepper', portion: '1 medium (119 g)' },
    ru: { name: 'Болгарский перец', portion: '1 средний (119 г)' },
    uk: { name: 'Болгарський перець', portion: '1 середній (119 г)' },
  },
  tomato: {
    en: { name: 'Tomato', portion: '1 medium (123 g)' },
    ru: { name: 'Помидор', portion: '1 средний (123 г)' },
    uk: { name: 'Помідор', portion: '1 середній (123 г)' },
  },
  carrot: {
    en: { name: 'Carrot (raw)', portion: '1 medium (61 g)' },
    ru: { name: 'Морковь (сырая)', portion: '1 средняя (61 г)' },
    uk: { name: 'Морква (сира)', portion: '1 середня (61 г)' },
  },
  'sweet-potato': {
    en: { name: 'Sweet potato (baked)', portion: '1 medium (114 g)' },
    ru: { name: 'Батат (запечённый)', portion: '1 средний (114 г)' },
    uk: { name: 'Батат (запечений)', portion: '1 середній (114 г)' },
  },
  zucchini: {
    en: { name: 'Zucchini', portion: '1 cup (113 g)' },
    ru: { name: 'Кабачок', portion: '1 стакан (113 г)' },
    uk: { name: 'Кабачок', portion: '1 склянка (113 г)' },
  },
  avocado: {
    en: { name: 'Avocado', portion: '½ avocado (100 g)' },
    ru: { name: 'Авокадо', portion: '½ авокадо (100 г)' },
    uk: { name: 'Авокадо', portion: '½ авокадо (100 г)' },
  },
  orange: {
    en: { name: 'Orange', portion: '1 medium (131 g)' },
    ru: { name: 'Апельсин', portion: '1 средний (131 г)' },
    uk: { name: 'Апельсин', portion: '1 середній (131 г)' },
  },
  banana: {
    en: { name: 'Banana', portion: '1 medium (118 g)' },
    ru: { name: 'Банан', portion: '1 средний (118 г)' },
    uk: { name: 'Банан', portion: '1 середній (118 г)' },
  },
  berries: {
    en: { name: 'Mixed berries', portion: '1 cup (150 g)' },
    ru: { name: 'Ягоды (смесь)', portion: '1 стакан (150 г)' },
    uk: { name: 'Ягоди (суміш)', portion: '1 склянка (150 г)' },
  },
  apple: {
    en: { name: 'Apple', portion: '1 medium (182 g)' },
    ru: { name: 'Яблоко', portion: '1 среднее (182 г)' },
    uk: { name: 'Яблуко', portion: '1 середнє (182 г)' },
  },
  lemon: {
    en: { name: 'Lemon juice', portion: '2 tbsp (30 ml)' },
    ru: { name: 'Лимонный сок', portion: '2 ст.л. (30 мл)' },
    uk: { name: 'Лимонний сік', portion: '2 ст.л. (30 мл)' },
  },
  nori: {
    en: { name: 'Nori (dried sheets)', portion: '2 sheets (5 g)' },
    ru: { name: 'Нори (сушёные листы)', portion: '2 листа (5 г)' },
    uk: { name: 'Норі (сушені листи)', portion: '2 листи (5 г)' },
  },
  wakame: {
    en: { name: 'Wakame (dried)', portion: '2 tbsp (10 g)' },
    ru: { name: 'Вакаме (сушёная)', portion: '2 ст.л. (10 г)' },
    uk: { name: 'Вакаме (сушена)', portion: '2 ст.л. (10 г)' },
  },
  'iodized-salt': {
    en: { name: 'Iodized salt', portion: '½ tsp (3 g)' },
    ru: { name: 'Йодированная соль', portion: '½ ч.л. (3 г)' },
    uk: { name: 'Йодована сіль', portion: '½ ч.л. (3 г)' },
  },
  'uv-mushrooms': {
    en: { name: 'Mushrooms (UV-treated)', portion: '1 cup (70 g)' },
    ru: { name: 'Грибы (UV-обработанные)', portion: '1 стакан (70 г)' },
    uk: { name: 'Гриби (UV-оброблені)', portion: '1 склянка (70 г)' },
  },
  'fortified-oat-milk': {
    en: { name: 'Oat milk (with D2/D3)', portion: '1 cup (240 ml)' },
    ru: { name: 'Овсяное молоко (с D2/D3)', portion: '1 стакан (240 мл)' },
    uk: { name: 'Вівсяне молоко (з D2/D3)', portion: '1 склянка (240 мл)' },
  },
  'fortified-soy-milk': {
    en: { name: 'Soy milk (with D2/D3)', portion: '1 cup (240 ml)' },
    ru: { name: 'Соевое молоко (с D2/D3)', portion: '1 стакан (240 мл)' },
    uk: { name: 'Соєве молоко (з D2/D3)', portion: '1 склянка (240 мл)' },
  },
  'nutritional-yeast': {
    en: { name: 'Nutritional yeast', portion: '2 tbsp (16 g)' },
    ru: { name: 'Пищевые дрожжи', portion: '2 ст.л. (16 г)' },
    uk: { name: 'Харчові дріжджі', portion: '2 ст.л. (16 г)' },
  },
  hummus: {
    en: { name: 'Hummus', portion: '4 tbsp (60 g)' },
    ru: { name: 'Хумус', portion: '4 ст.л. (60 г)' },
    uk: { name: 'Хумус', portion: '4 ст.л. (60 г)' },
  },
  'olive-oil': {
    en: { name: 'Olive oil', portion: '1 tbsp (14 g)' },
    ru: { name: 'Оливковое масло', portion: '1 ст.л. (14 г)' },
    uk: { name: 'Оливкова олія', portion: '1 ст.л. (14 г)' },
  },
  'coconut-milk': {
    en: { name: 'Coconut milk (canned)', portion: '½ cup (120 ml)' },
    ru: { name: 'Кокосовое молоко (консерв.)', portion: '½ стакана (120 мл)' },
    uk: { name: 'Кокосове молоко (консерв.)', portion: '½ склянки (120 мл)' },
  },
  'green-peas': {
    en: { name: 'Green peas (cooked)', portion: '1 cup (160 g)' },
    ru: { name: 'Зелёный горошек (варёный)', portion: '1 стакан (160 г)' },
    uk: { name: 'Зелений горошок (варений)', portion: '1 склянка (160 г)' },
  },
  'white-beans': {
    en: { name: 'White beans (cooked)', portion: '1 cup (179 g)' },
    ru: { name: 'Белая фасоль (варёная)', portion: '1 стакан (179 г)' },
    uk: { name: 'Біла квасоля (варена)', portion: '1 склянка (179 г)' },
  },
  millet: {
    en: { name: 'Millet (cooked)', portion: '1 cup (174 g)' },
    ru: { name: 'Пшено (варёное)', portion: '1 стакан (174 г)' },
    uk: { name: 'Пшоно (варене)', portion: '1 склянка (174 г)' },
  },
  'pasta-whole': {
    en: { name: 'Whole wheat pasta (cooked)', portion: '1 cup (140 g)' },
    ru: { name: 'Цельнозерновая паста (варёная)', portion: '1 стакан (140 г)' },
    uk: { name: 'Цільнозернова паста (варена)', portion: '1 склянка (140 г)' },
  },
  'sesame-seeds': {
    en: { name: 'Sesame seeds', portion: '2 tbsp (18 g)' },
    ru: { name: 'Кунжут', portion: '2 ст.л. (18 г)' },
    uk: { name: 'Кунжут', portion: '2 ст.л. (18 г)' },
  },
  'hemp-seeds': {
    en: { name: 'Hemp seeds', portion: '3 tbsp (30 g)' },
    ru: { name: 'Семена конопли', portion: '3 ст.л. (30 г)' },
    uk: { name: 'Насіння коноплі', portion: '3 ст.л. (30 г)' },
  },
  'red-cabbage': {
    en: { name: 'Red cabbage', portion: '1 cup (89 g)' },
    ru: { name: 'Красная капуста', portion: '1 стакан (89 г)' },
    uk: { name: 'Червона капуста', portion: '1 склянка (89 г)' },
  },
  beetroot: {
    en: { name: 'Beetroot (cooked)', portion: '1 cup (170 g)' },
    ru: { name: 'Свёкла (варёная)', portion: '1 стакан (170 г)' },
    uk: { name: 'Буряк (варений)', portion: '1 склянка (170 г)' },
  },
  peanuts: {
    en: { name: 'Peanuts', portion: '30 g (handful)' },
    ru: { name: 'Арахис', portion: '30 г (горсть)' },
    uk: { name: 'Арахіс', portion: '30 г (жменя)' },
  },
  pistachios: {
    en: { name: 'Pistachios', portion: '30 g (handful)' },
    ru: { name: 'Фисташки', portion: '30 г (горсть)' },
    uk: { name: 'Фісташки', portion: '30 г (жменя)' },
  },
  cashews: {
    en: { name: 'Cashews', portion: '30 g (handful)' },
    ru: { name: 'Кешью', portion: '30 г (горсть)' },
    uk: { name: 'Кеш\'ю', portion: '30 г (жменя)' },
  },
  raisins: {
    en: { name: 'Raisins', portion: '40 g (handful)' },
    ru: { name: 'Изюм', portion: '40 г (горсть)' },
    uk: { name: 'Ізюм', portion: '40 г (жменя)' },
  },
  'dried-apricots': {
    en: { name: 'Dried apricots', portion: '40 g (6 halves)' },
    ru: { name: 'Курага', portion: '40 г (6 половинок)' },
    uk: { name: 'Курага', portion: '40 г (6 половинок)' },
  },
  dates: {
    en: { name: 'Medjool dates', portion: '2 pcs (48 g)' },
    ru: { name: 'Финики (меджул)', portion: '2 шт. (48 г)' },
    uk: { name: 'Фініки (меджул)', portion: '2 шт. (48 г)' },
  },
  'dark-chocolate-85': {
    en: { name: 'Dark chocolate 85%', portion: '30 g (3–4 squares)' },
    ru: { name: 'Тёмный шоколад 85%', portion: '30 г (3–4 дольки)' },
    uk: { name: 'Темний шоколад 85%', portion: '30 г (3–4 дольки)' },
  },
  'lentil-crispbread': {
    en: { name: 'Lentil crispbread', portion: '2 pcs (20 g)' },
    ru: { name: 'Чечевичные хлебцы', portion: '2 шт. (20 г)' },
    uk: { name: 'Сочевичні хлібці', portion: '2 шт. (20 г)' },
  },
  cucumber: {
    en: { name: 'Cucumber', portion: '1 medium (150 g)' },
    ru: { name: 'Огурец', portion: '1 средний (150 г)' },
    uk: { name: 'Огірок', portion: '1 середній (150 г)' },
  },
};

export function getProductText(productId: string, locale: Locale): ProductText {
  const texts = productTexts[productId];
  if (texts) return texts[locale];
  return { name: productId, portion: '' };
}
