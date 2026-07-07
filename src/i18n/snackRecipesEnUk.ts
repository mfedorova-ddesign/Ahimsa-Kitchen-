export type LocaleContent = {
  ingredientLines: string[];
  steps: string[];
  tip?: string;
};

export const snackRecipesEnUk: Record<string, Partial<Record<'en' | 'uk', LocaleContent>>> = {
  'hummus-crispbread': {
    en: {
      ingredientLines: ['3–4 whole-grain crispbreads', '4–5 tbsp hummus'],
      steps: ['Spread hummus on crispbreads.', 'Serve immediately or pack in a container.'],
      tip: 'Protein ~10–12 g. Pairs well with vegetable sticks for extra fiber.',
    },
    uk: {
      ingredientLines: ['3–4 цільнозернові хлібці', '4–5 ст. л. хумусу'],
      steps: ['Намазати хумус на хлібці.', 'Подавати одразу або покласти в контейнер.'],
      tip: 'Білок ~10–12 г. Добре поєднується з овочевими паличками для додаткової клітковини.',
    },
  },
  'peanut-butter-apple': {
    en: {
      ingredientLines: ['1 medium apple', '2 tbsp peanut butter (no added sugar)'],
      steps: ['Slice the apple.', 'Dip slices in peanut butter or spread paste on slices.'],
      tip: 'Protein ~8–10 g from the paste. Choose peanut-only butter without palm oil or added sugar.',
    },
    uk: {
      ingredientLines: ['1 середнє яблуко', '2 ст. л. арахісової пасти (без доданого цукру)'],
      steps: ['Нарізати яблуко скибочками.', 'Макати скибочки в пасту або намазати пасту на скибочки.'],
      tip: 'Білок ~8–10 г за рахунок пасти. Обирайте пасту лише з арахісу, без пальмової олії та цукру.',
    },
  },
  'almonds-handful': {
    en: {
      ingredientLines: ['30 g almonds (a handful)'],
      steps: ['Measure 30 g of almonds.', 'Serve as is.'],
      tip: 'Protein ~6 g per 30 g. Easy to take in a small container on the go.',
    },
    uk: {
      ingredientLines: ['30 г мигдалю (жменя)'],
      steps: ['Відміряти 30 г мигдалю.', 'Подавати як є.'],
      tip: 'Білок ~6 г на 30 г. Зручно брати з собою в маленькому контейнері.',
    },
  },
  'peanuts-handful': {
    en: {
      ingredientLines: ['30 g peanuts (a handful, unsalted or lightly salted)'],
      steps: ['Measure 30 g of peanuts.', 'Serve as is.'],
      tip: 'Protein ~7–8 g per 30 g. Unsalted is better for everyday snacking.',
    },
    uk: {
      ingredientLines: ['30 г арахісу (жменя, несолоного або злегка солоного)'],
      steps: ['Відміряти 30 г арахісу.', 'Подавати як є.'],
      tip: 'Білок ~7–8 г на 30 г. Несолоний варіант кращий для щоденного перекусу.',
    },
  },
  'pistachios-handful': {
    en: {
      ingredientLines: ['30 g pistachios (in shell or shelled)'],
      steps: ['Measure 30 g of pistachios.', 'Serve as is.'],
      tip: 'Protein ~6 g per 30 g. Shelled pistachios are quicker for a fast snack.',
    },
    uk: {
      ingredientLines: ['30 г фісташок (у шкірці або очищених)'],
      steps: ['Відміряти 30 г фісташок.', 'Подавати як є.'],
      tip: 'Білок ~6 г на 30 г. Очищені фісташки зручніші для швидкого перекусу.',
    },
  },
  'pumpkin-seeds-handful': {
    en: {
      ingredientLines: ['30 g pumpkin seeds (hulled)'],
      steps: ['Measure 30 g of seeds.', 'Serve as is or lightly toast in a dry pan.'],
      tip: 'Protein ~9–10 g per 30 g — one of the highest-protein nut/seed snacks. Also a source of iron and zinc.',
    },
    uk: {
      ingredientLines: ['30 г гарбузового насіння (очищеного)'],
      steps: ['Відміряти 30 г насіння.', 'Подавати як є або злегка підсушити на сухій сковорідці.'],
      tip: 'Білок ~9–10 г на 30 г — один із найбілковіших горіхово-насіннєвих перекусів. Також джерело заліза та цинку.',
    },
  },
  'soy-yogurt-plain': {
    en: {
      ingredientLines: ['150 g unsweetened soy yogurt'],
      steps: ['Serve in a bowl or eat straight from the pack.'],
      tip: 'Protein ~5–8 g per 150 g. Check the label — protein content varies 1.5–2× between brands.',
    },
    uk: {
      ingredientLines: ['150 г несолодкого соєвого йогурту'],
      steps: ['Викласти в миску або їсти прямо з упаковки.'],
      tip: 'Білок ~5–8 г на 150 г. Перевіряйте етикетку — вміст білка відрізняється в 1,5–2 рази між марками.',
    },
  },
  'soy-yogurt-chia': {
    en: {
      ingredientLines: ['150 g unsweetened soy yogurt', '1 tbsp chia seeds'],
      steps: ['Mix yogurt with chia.', 'Rest 5–10 minutes (or refrigerate overnight).', 'Stir and serve.'],
      tip: 'Protein ~8–11 g. Chia adds fiber and thickens the texture.',
    },
    uk: {
      ingredientLines: ['150 г несолодкого соєвого йогурту', '1 ст. л. насіння чіа'],
      steps: ['Змішати йогурт з чіа.', 'Дати настоятися 5–10 хвилин (або залишити в холодильнику на ніч).', 'Перемішати й подати.'],
      tip: 'Білок ~8–11 г. Чіа додає клітковину та робить текстуру густішою.',
    },
  },
  'soy-yogurt-peanut-butter': {
    en: {
      ingredientLines: ['150 g unsweetened soy yogurt', '1 tbsp peanut butter'],
      steps: ['Add peanut butter to yogurt.', 'Mix until smooth.', 'Serve immediately.'],
      tip: 'Protein ~12–15 g. Optional: sprinkle with cinnamon or unsweetened cocoa.',
    },
    uk: {
      ingredientLines: ['150 г несолодкого соєвого йогурту', '1 ст. л. арахісової пасти'],
      steps: ['Додати пасту в йогурт.', 'Ретельно перемішати до однорідності.', 'Подавати одразу.'],
      tip: 'Білок ~12–15 г. Можна посипати корицею або какао-порошком без цукру.',
    },
  },
  'vegan-protein-bar': {
    en: {
      ingredientLines: ['1 vegan protein bar (per label)'],
      steps: ['Choose a bar with a clear ingredient list and minimal added sugar.', 'Serve as is.'],
      tip: 'Protein typically 15–20 g. Check the label — some “protein” bars contain more sugar than protein.',
    },
    uk: {
      ingredientLines: ['1 веганський протеїновий батончик (за етикеткою)'],
      steps: ['Обрати батончик з прозорим складом і без зайвого цукру.', 'Подавати як є.'],
      tip: 'Білок зазвичай 15–20 г. Перевіряйте етикетку — частина «протеїнових» батончиків містить більше цукру, ніж білка.',
    },
  },
  'vegan-protein-smoothie': {
    en: {
      ingredientLines: [
        '200–250 ml plant milk or water',
        '1 scoop vegan protein powder (per package instructions)',
        '1 handful of berries or 1 banana / 1 apple',
        'optional: ice',
      ],
      steps: [
        'Add milk, fruit and protein to a blender.',
        'Blend 30–45 seconds until smooth.',
        'Serve immediately.',
      ],
      tip: 'Protein 20–30 g depending on powder. Mix protein into cold liquid, not hot.',
    },
    uk: {
      ingredientLines: [
        '200–250 мл рослинного молока або води',
        '1 мірна ложка веганського протеїну (за інструкцією на упаковці)',
        '1 жменя ягід або 1 банан / 1 яблуко',
        'за бажанням: лід',
      ],
      steps: [
        'Покласти молоко, фрукти та протеїн у блендер.',
        'Збити 30–45 секунд до однорідності.',
        'Подавати одразу.',
      ],
      tip: 'Білок 20–30 г залежно від порошку. Вмішуйте протеїн у холодну рідину, не в гарячу.',
    },
  },
  'dark-chocolate-nuts': {
    en: {
      ingredientLines: ['10 g dark chocolate (70%+ cocoa)', '15–20 g nuts (almonds, hazelnuts or walnuts)'],
      steps: ['Measure chocolate and nuts.', 'Serve together.'],
      tip: 'Protein ~5 g. Most comes from nuts; chocolate is for taste and antioxidants — keep the portion small.',
    },
    uk: {
      ingredientLines: ['10 г темного шоколаду (70%+ какао)', '15–20 г горіхів (мигдаль, фундук або волоські)'],
      steps: ['Відміряти шоколад і горіхи.', 'Подавати разом.'],
      tip: 'Білок ~5 г. Основний внесок дають горіхи; шоколад — для смаку та антиоксидантів, тримайте порцію невеликою.',
    },
  },
  'nuts-dried-fruit': {
    en: {
      ingredientLines: [
        '20–25 g mixed nuts',
        '20–25 g dried fruit (apricots, prunes, raisins — no added sugar)',
      ],
      steps: ['Mix nuts and dried fruit.', 'Measure one portion.'],
      tip: 'Protein ~6 g. Dried fruit adds quick carbs — good before/after a workout; watch portion size.',
    },
    uk: {
      ingredientLines: [
        '20–25 г горіхів (асорті)',
        '20–25 г сухофруктів (курага, чорнослив, родзинки — без доданого цукру)',
      ],
      steps: ['Змішати горіхи та сухофрукти.', 'Відміряти одну порцію.'],
      tip: 'Білок ~6 г. Сухофрукти дають швидкі вуглеводи — зручно до або після тренування; стежте за розміром порції.',
    },
  },
  'lentil-crispbread': {
    en: {
      ingredientLines: ['2–3 lentil crispbreads (30–40 g per label)'],
      steps: ['Place crispbreads on a plate.', 'Serve plain or with hummus / a slice of tofu.'],
      tip: 'Per 100 g — ~12–18 g protein, but portions are small so a snack is usually 3–6 g. Add 2 tbsp hummus for ~8–10 g total.',
    },
    uk: {
      ingredientLines: ['2–3 сочевичних хлібці (30–40 г за етикеткою)'],
      steps: ['Викласти хлібці на тарілку.', 'Подавати як є або з хумусом / скибочкою тофу.'],
      tip: 'На 100 г — ~12–18 г білка, але порція невелика, тому на перекус зазвичай 3–6 г. Додайте 2 ст. л. хумусу для ~8–10 г разом.',
    },
  },
  'roasted-chickpeas-snack': {
    en: {
      ingredientLines: ['40–50 g roasted chickpeas (store-bought or homemade)'],
      steps: ['Measure one portion.', 'If store-bought — simply open the pack and serve.'],
      tip: 'Per 40–50 g portion — about 8–10 g protein. One of the best vegan snacks: high protein and fiber with minimal prep.',
    },
    uk: {
      ingredientLines: ['40–50 г запеченого нуту (магазинного або домашнього)'],
      steps: ['Відміряти порцію.', 'Якщо магазинний — просто відкрити упаковку й подати.'],
      tip: 'На порцію ~40–50 г — близько 8–10 г білка. Один із найкращих веганських перекусів: багато білка та клітковини при мінімумі приготування.',
    },
  },
  'chickpea-chips': {
    en: {
      ingredientLines: ['25–35 g chickpea chips (per label)'],
      steps: ['Measure one portion from the pack.', 'Serve as is.'],
      tip: 'Protein per 100 g — 10–20 g, but some products are mostly starch or oil. Always check the label: chickpeas should be first in the ingredients.',
    },
    uk: {
      ingredientLines: ['25–35 г нутових чіпсів (за етикеткою)'],
      steps: ['Відміряти одну порцію з упаковки.', 'Подавати як є.'],
      tip: 'Білок на 100 г — 10–20 г, але частина продуктів містить мало нуту та більше крохмалю чи олії. Завжди перевіряйте етикетку: нут має бути першим у складі.',
    },
  },
};
