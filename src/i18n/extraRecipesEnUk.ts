export type LocaleContent = {
  ingredientLines: string[];
  steps: string[];
  tip?: string;
};

export const extraRecipesEnUk: Record<string, Partial<Record<'en' | 'uk', LocaleContent>>> = {
  'protein-smoothie-chia-flax': {
    en: {
      ingredientLines: [
        '1 banana',
        '1 orange or a handful of berries',
        '1 scoop vegan protein powder',
        '1 tbsp chia seeds or ground flax',
        'water, plant milk or ice — to reach desired thickness',
      ],
      steps: [
        'Add banana, orange or berries, protein and chia/flax to a blender.',
        'Add a little water, plant milk or ice until you reach the desired consistency.',
        'Blend 30–40 seconds until smooth.',
      ],
      tip: 'Protein ~25–30 g depending on powder. Mix protein into cold liquid, not hot.',
    },
    uk: {
      ingredientLines: [
        '1 банан',
        '1 апельсин або жменя ягід',
        '1 мірна ложка веганського протеїну',
        '1 ст. л. насіння чіа або меленого льону',
        'вода, рослинне молоко або лід — до потрібної густини',
      ],
      steps: [
        'У блендер: банан, апельсин або ягоди, протеїн, чіа/лён.',
        'Додати трохи води, рослинного молока або льоду до потрібної консистенції.',
        'Збити 30–40 секунд до однорідності.',
      ],
      tip: 'Білок ~25–30 г залежно від порошку. Вмішуйте протеїн у холодну рідину.',
    },
  },
  'pumpkin-paste-toast': {
    en: {
      ingredientLines: [
        '2 slices whole-grain bread',
        '3–4 tbsp pumpkin paste (homemade or store-bought)',
        '1 banana',
        '1 tbsp hemp seeds',
      ],
      steps: [
        'Toast the bread until crisp.',
        'Spread pumpkin paste (homemade or ready-made).',
        'Top with banana slices and a sprinkle of hemp seeds.',
      ],
    },
    uk: {
      ingredientLines: [
        '2 скибки цільнозернового хліба',
        '3–4 ст. л. гарбузової пасти (домашньої або готової)',
        '1 банан',
        '1 ст. л. конопляного насіння',
      ],
      steps: [
        'Підсушити/обсмажити тост.',
        'Намазати гарбузову пасту.',
        'Зверху — банан скибочками і трохи конопляного насіння.',
      ],
    },
  },
  'avocado-toast-egg-whites': {
    en: {
      ingredientLines: [
        '2 egg whites',
        '2 slices toast bread',
        '2–3 tbsp hummus',
        '⅓ avocado',
        'lemon juice, salt, pepper',
      ],
      steps: [
        'Separate 2 egg whites from yolks, whisk with a fork and cook in a dry pan for 2–3 minutes (thin omelette or scramble).',
        'Toast the bread and spread with hummus.',
        'Mash ⅓ avocado with lemon, salt and pepper and spread on toast.',
        'Top with the cooked egg white.',
      ],
      tip: 'Vegan swap: use tofu scramble or chickpea flour with turmeric instead of egg whites.',
    },
    uk: {
      ingredientLines: [
        '2 яєчних білки',
        '2 скибки хліба для тосту',
        '2–3 ст. л. хумусу',
        '⅓ авокадо',
        'сік лимона, сіль, перець',
      ],
      steps: [
        'Відділити 2 білки від жовтків, збити виделкою і обсмажити на сухій сковорідці 2–3 хвилини.',
        'Підсушити тост, намазати хумусом.',
        'Розім’яти ⅓ авокадо з лимоном, сіллю та перцем, викласти на тост.',
        'Зверху покласти готовий яєчний білок.',
      ],
      tip: 'Веган-варіант: замініть білки на тофу-скрембл або нутову муку з куркумою.',
    },
  },
  'moroccan-quinoa-tempeh': {
    en: {
      ingredientLines: [
        '60 g dry quinoa (for 2 servings)',
        '1 carrot',
        '1 can (400 g) chickpeas, drained',
        '150 g tempeh',
        'ras el hanout, turmeric, cinnamon, ginger',
        'herbs (cilantro, parsley)',
        'chili sauce for tempeh',
        '1 orange, in wedges',
      ],
      steps: [
        'Cook quinoa (~60 g dry for 2 servings). Portion ~90 g cooked quinoa per serving — slightly less than usual.',
        'Slice or grate carrot and lightly sauté with spices (ras el hanout, turmeric, cinnamon, ginger).',
        'Mix quinoa, chickpeas, carrot and herbs.',
        'Slice tempeh (75 g per portion), pan-fry and coat in chili sauce or simmer with it for a couple of minutes.',
        'Serve with orange wedges.',
      ],
      tip: 'Protein ~24 g per serving from chickpeas and tempeh.',
    },
    uk: {
      ingredientLines: [
        '60 г сухої кіноа (на 2 порції)',
        '1 морква',
        '1 банка (400 г) нуту, злити рідину',
        '150 г темпе',
        'ras el hanout, куркума, кориця, імбир',
        'зелень (кінза, петрушка)',
        'чилі-соус для темпе',
        '1 апельсин, часточками',
      ],
      steps: [
        'Відварити кіноа (~60 г сухої на 2 порції). На порцію ~90 г готової крупи.',
        'Моркву нарізати тонко або натерти, злегка обсмажити зі спеціями.',
        'Змішати кіноа, нут, моркву, зелень.',
        'Темпе (75 г) нарізати, обсмажити і обваляти в чилі-соусі.',
        'Подавати з часточками апельсина.',
      ],
      tip: 'Білок ~24 г на порцію за рахунок нуту та темпе.',
    },
  },
  'lentil-salad-smoked-tofu': {
    en: {
      ingredientLines: [
        '200 g dry brown lentils (or 400 g cooked)',
        '150 g green peas',
        '1 bell pepper',
        '1 shallot',
        '50 g sun-dried tomatoes',
        '200 g smoked tofu',
        '2 tbsp pumpkin seeds',
        'parsley, mint, dill',
        'olive oil, vinegar, grated ginger, lemon juice — for dressing',
      ],
      steps: [
        'Cook brown lentils until tender, cool.',
        'Mix with peas, diced pepper, shallot and sun-dried tomatoes.',
        'Dice smoked tofu, lightly pan-fry or add raw.',
        'Add pumpkin seeds and chopped herbs (parsley, mint, dill).',
        'Dressing: olive oil, vinegar, a little grated ginger and lemon juice — toss with salad.',
      ],
    },
    uk: {
      ingredientLines: [
        '200 г сухої коричневої сочевиці (або 400 г вареної)',
        '150 г зеленого горошку',
        '1 болгарський перець',
        '1 шалот',
        '50 г в’ялених помідорів',
        '200 г копченого тофу',
        '2 ст. л. гарбузового насіння',
        'петрушка, м’ята, кріп',
        'оливкова олія, оцет, тертий імбир, лимонний сік — для заправки',
      ],
      steps: [
        'Відварити коричневу сочевицю, охолодити.',
        'Змішати з горошком, перцем, шалотом і в’яленими помідорами.',
        'Копчений тофу нарізати кубиками, злегка обсмажити або додати сирим.',
        'Додати гарбузове насіння та рублену зелень.',
        'Заправка: оливкова олія, оцет, трохи тертого імбиру та лимонного соку.',
      ],
    },
  },
  'simple-lentil-soup': {
    en: {
      ingredientLines: [
        '1 onion',
        '2 garlic cloves',
        '300 g red or green lentils',
        '1.2 l water or vegetable broth',
        'salt, pepper, bay leaf — to taste',
        'bread to serve',
      ],
      steps: [
        'Sauté onion and garlic until soft.',
        'Add lentils and pour in water or broth.',
        'Simmer 20–25 minutes until lentils are tender.',
        'Season to taste and serve with bread.',
      ],
    },
    uk: {
      ingredientLines: [
        '1 цибулина',
        '2 зубчики часнику',
        '300 г червоної або зеленої сочевиці',
        '1,2 л води або овочевого бульйону',
        'сіль, перець, лавровий лист — за смаком',
        'хліб для подачі',
      ],
      steps: [
        'Обсмажити цибулю та часник до м’якості.',
        'Додати сочевицю, залити водою або бульйоном.',
        'Варити 20–25 хвилин до готовності.',
        'Приправити за смаком, подавати з хлібом.',
      ],
    },
  },
  'bean-soup-spinach': {
    en: {
      ingredientLines: [
        '1 onion',
        '2 garlic cloves',
        '1 bell pepper',
        '2 cans (400 g) beans, drained',
        '2 tbsp tomato paste',
        '800 ml water',
        '150 g spinach',
        'salt, pepper',
      ],
      steps: [
        'Sauté onion and garlic, add bell pepper.',
        'Add beans and tomato paste, pour in water.',
        'Simmer 10–15 minutes.',
        'Stir in spinach at the end and remove from heat after 1–2 minutes.',
      ],
    },
    uk: {
      ingredientLines: [
        '1 цибулина',
        '2 зубчики часнику',
        '1 болгарський перець',
        '2 банки (400 г) квасолі, злити рідину',
        '2 ст. л. томатної пасти',
        '800 мл води',
        '150 г шпинату',
        'сіль, перець',
      ],
      steps: [
        'Обсмажити цибулю та часник, додати перець.',
        'Додати квасолю та томатну пасту, залити водою.',
        'Варити 10–15 хвилин.',
        'Наприкінці додати шпинат, зняти з вогню через 1–2 хвилини.',
      ],
    },
  },
  'falafel-wrap-yogurt': {
    en: {
      ingredientLines: [
        '4–5 falafel balls (ready-made or homemade)',
        '1 large wrap / tortilla',
        'handful of salad (iceberg, arugula)',
        '3–4 tbsp tzatziki-style sauce (soy yogurt based)',
      ],
      steps: [
        'Heat falafel (ready-made or homemade from chickpeas).',
        'Warm the wrap slightly so it is more pliable.',
        'Add falafel, a little salad and tzatziki sauce, roll up.',
      ],
    },
    uk: {
      ingredientLines: [
        '4–5 фалафелів (готових або домашніх)',
        '1 велика лепішка / тортилья',
        'жменя салату (айсберг, рукола)',
        '3–4 ст. л. соусу дзадзики (на соєвому йогурті)',
      ],
      steps: [
        'Розігріти фалафель.',
        'Легко підігріти врап, щоб був м’якшим.',
        'Викласти фалафель, трохи салату та соус дзадзики, скрутити.',
      ],
    },
  },
  'baked-fish-veg-salad': {
    en: {
      ingredientLines: [
        '2 white fish fillets (~150 g each)',
        'olive oil, lemon, salt, pepper',
        'cucumber, tomatoes, herbs — for salad',
        '1 tbsp pumpkin seeds',
      ],
      steps: [
        'Season fish with salt and pepper, drizzle with olive oil and lemon.',
        'Bake at 180–200°C for 12–15 minutes (depending on thickness).',
        'Chop vegetables for salad and dress with olive oil.',
        'Sprinkle fish or salad with pumpkin seeds before serving.',
      ],
      tip: 'Vegan swap: baked tamari tempeh or marinated tofu instead of fish.',
    },
    uk: {
      ingredientLines: [
        '2 філе білої риби (~150 г кожне)',
        'оливкова олія, лимон, сіль, перець',
        'огірок, помідори, зелень — для салату',
        '1 ст. л. гарбузового насіння',
      ],
      steps: [
        'Посолити рибу, поперчити, збризнути оливковою олією та лимоном.',
        'Запікати при 180–200°C 12–15 хвилин.',
        'Овочі для салату нарізати, заправити оливковою олією.',
        'Перед подачею посипати гарбузовим насінням.',
      ],
      tip: 'Веган-варіант: запечений тамарі-темпе або маринований тофу замість риби.',
    },
  },
  'edamame-boiled-snack': {
    en: {
      ingredientLines: [
        '250–300 g frozen edamame pods',
        'salt to taste',
      ],
      steps: [
        'Boil frozen edamame pods in salted water for 4–5 minutes.',
        'Cool slightly and salt to taste.',
        'Eat by squeezing beans from pods — a satisfying snack ritual.',
      ],
      tip: 'Protein ~15–17 g per portion. A handy alternative to chips.',
    },
    uk: {
      ingredientLines: [
        '250–300 г заморожених стручків едамаме',
        'сіль за смаком',
      ],
      steps: [
        'Відварити заморожені стручки едамаме в підсоленій воді 4–5 хвилин.',
        'Злегка охолодити, посолити за смаком.',
        'Їсти, вичавлюючи боби зі стручків.',
      ],
      tip: 'Білок ~15–17 г на порцію. Зручна заміна чипсам.',
    },
  },
};
