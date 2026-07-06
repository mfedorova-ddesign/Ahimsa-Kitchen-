import type { Locale } from './types';

export interface RecipeText {
  name: string;
  description: string;
}

type LocaleMap<T> = Record<Locale, T>;

export const cuisineTexts: Record<string, LocaleMap<string>> = {
  scandinavian: { en: 'Scandinavian', ru: 'Скандинавская', uk: 'Скандинавська' },
  mediterranean: { en: 'Mediterranean', ru: 'Средиземноморская', uk: 'Середземноморська' },
  caribbean: { en: 'Caribbean', ru: 'Карибская', uk: 'Карибська' },
  japanese: { en: 'Japanese', ru: 'Японская', uk: 'Японська' },
  levantine: { en: 'Levantine', ru: 'Левантийская', uk: 'Левантійська' },
  mexican: { en: 'Mexican', ru: 'Мексиканская', uk: 'Мексиканська' },
  indian: { en: 'Indian', ru: 'Индийская', uk: 'Індійська' },
  american: { en: 'American', ru: 'Американская', uk: 'Американська' },
  thai: { en: 'Thai', ru: 'Тайская', uk: 'Тайська' },
  ethiopian: { en: 'Ethiopian', ru: 'Эфиопская', uk: 'Ефіопська' },
  korean: { en: 'Korean', ru: 'Корейская', uk: 'Корейська' },
  moroccan: { en: 'Moroccan', ru: 'Марокканская', uk: 'Марокканська' },
  greek: { en: 'Greek', ru: 'Греческая', uk: 'Грецька' },
  chinese: { en: 'Chinese', ru: 'Китайская', uk: 'Китайська' },
  italian: { en: 'Italian', ru: 'Итальянская', uk: 'Італійська' },
  brazilian: { en: 'Brazilian', ru: 'Бразильская', uk: 'Бразильська' },
  fusion: { en: 'Fusion', ru: 'Фьюжн', uk: 'Ф\'южн' },
  'west-african': { en: 'West African', ru: 'Западноафриканская', uk: 'Західноафриканська' },
};

export const recipeTexts: Record<string, LocaleMap<RecipeText>> = {
  'golden-oat-parfait': {
    en: { name: 'Golden oat parfait', description: 'Creamy oats with berries, chia and fortified oat milk — a bright Nordic-style breakfast.' },
    ru: { name: 'Золотой овсяный парфе', description: 'Нежная овсянка с ягодами, чиа и овсяным молоком — яркий скандинавский завтрак.' },
    uk: { name: 'Золотий вівсяний парфе', description: 'Ніжна вівсянка з ягодами, чіа та вівсяним молоком — яскравий скандинавський сніданок.' },
  },
  'mediterranean-avocado-toast': {
    en: { name: 'Mediterranean avocado toast', description: 'Crispy whole-grain toast with ripe avocado, tomato and a drizzle of olive oil and lemon.' },
    ru: { name: 'Средиземноморский тост с авокадо', description: 'Хрустящий цельнозерновой тост с авокадо, помидором, оливковым маслом и лимоном.' },
    uk: { name: 'Середземноморський тост з авокадо', description: 'Хрусткий цільнозерновий тост з авокадо, помідором, оливковою олією та лимоном.' },
  },
  'tropical-smoothie-bowl': {
    en: { name: 'Tropical smoothie bowl', description: 'Silky soy milk base with banana, berries, hemp and chia — sunshine in a bowl.' },
    ru: { name: 'Тропический смузи-боул', description: 'Нежная основа из соевого молока с бананом, ягодами, коноплей и чиа.' },
    uk: { name: 'Тропічний смузі-боул', description: 'Ніжна основа з соєвого молока з бананом, ягодами, коноплею та чіа.' },
  },
  'japanese-miso-tofu-bowl': {
    en: { name: 'Japanese tofu breakfast bowl', description: 'Marinated tofu with rice, edamame, nori and sesame — umami-rich morning bowl.' },
    ru: { name: 'Японский завтрак с тофу', description: 'Тофу с рисом, эдамаме, нори и кунжутом — насыщенный умами завтрак.' },
    uk: { name: 'Японський сніданок з тофу', description: 'Тофу з рисом, едамаме, норі та кунжутом — насичений умамі сніданок.' },
  },
  'middle-eastern-mezze': {
    en: { name: 'Levantine mezze plate', description: 'Hummus, warm bread, fresh tomato and zucchini with olive oil — a colourful shared-style breakfast.' },
    ru: { name: 'Левантийская тарелка мезе', description: 'Хумус, тёплый хлеб, помидор и кабачок с оливковым маслом — яркий завтрак в стиле мезе.' },
    uk: { name: 'Левантійська тарілка мезе', description: 'Хумус, теплий хліб, помідор і кабачок з оливковою олією — яскравий сніданок у стилі мезе.' },
  },
  'mexican-breakfast-burrito-bowl': {
    en: { name: 'Mexican breakfast burrito bowl', description: 'Black beans, avocado, peppers and tomato — bold flavours to start the day.' },
    ru: { name: 'Мексиканский завтрак боул', description: 'Чёрная фасоль, авокадо, перец и помидор — яркие вкусы на старт дня.' },
    uk: { name: 'Мексиканський сніданковий боул', description: 'Чорна квасоля, авокадо, перець і помідор — яскраві смаки на початок дня.' },
  },
  'indian-spiced-porridge': {
    en: { name: 'Indian spiced millet porridge', description: 'Warm millet porridge with pumpkin seeds and banana — comforting and aromatic.' },
    ru: { name: 'Индийская пряная каша из пшена', description: 'Тёплая каша из пшена с тыквенными семечками и бананом — согревающая и ароматная.' },
    uk: { name: 'Індійська пряна каша з пшона', description: 'Тепла каша з пшона з гарбузовим насінням і бананом — зігріваюча та ароматна.' },
  },
  'protein-peanut-butter-toast': {
    en: { name: 'Protein peanut butter toast', description: 'Whole-grain toast with peanut butter, banana and hemp seeds — simple and satisfying.' },
    ru: { name: 'Протеиновый тост с арахисовой пастой', description: 'Цельнозерновой тост с арахисовой пастой, бананом и семенами конопли.' },
    uk: { name: 'Протеїновий тост з арахісовою пастою', description: 'Цільнозерновий тост з арахісовою пастою, бананом і насінням коноплі.' },
  },
  'indian-chana-masala': {
    en: { name: 'Chana masala with rice', description: 'Spiced chickpeas in tomato-coconut sauce with spinach and basmati-style brown rice.' },
    ru: { name: 'Чана масала с рисом', description: 'Пряный нут в томатно-кокосовом соусе со шпинатом и бурым рисом.' },
    uk: { name: 'Чана масала з рисом', description: 'Пряний нут у томатно-кокосовому соусі зі шпинатом і бурим рисом.' },
  },
  'thai-coconut-curry': {
    en: { name: 'Thai coconut tofu curry', description: 'Silky coconut curry with tofu, peppers and broccoli over fragrant rice.' },
    ru: { name: 'Тайское кокосовое карри с тофу', description: 'Нежное кокосовое карри с тофу, перцем и брокколи на ароматном рисе.' },
    uk: { name: 'Тайське кокосове каррі з тофу', description: 'Ніжне кокосове каррі з тофу, перцем і броколі на ароматному рисі.' },
  },
  'mexican-burrito-bowl': {
    en: { name: 'Mexican burrito bowl', description: 'Layered black beans, rice, avocado, peppers and lime — a fiesta in every bite.' },
    ru: { name: 'Мексиканский боул-буррито', description: 'Чёрная фасоль, рис, авокадо, перец и лайм — фиеста в каждом кусочке.' },
    uk: { name: 'Мексиканський боул-буріто', description: 'Чорна квасоля, рис, авокадо, перець і лайм — фієста в кожному шматочку.' },
  },
  'ethiopian-misir-wot': {
    en: { name: 'Ethiopian misir wot', description: 'Red lentil stew with berbere-style spices, kale and buckwheat — deep, warming flavours.' },
    ru: { name: 'Эфиопское мисир вот', description: 'Тушёная красная чечевица с пряностями, кейлом и гречкой — глубокие согревающие вкусы.' },
    uk: { name: 'Ефіопське місір вот', description: 'Тушкована червона сочевиця зі спеціями, кейлом і гречкою — глибокі зігріваючі смаки.' },
  },
  'mediterranean-falafel-bowl': {
    en: { name: 'Mediterranean falafel bowl', description: 'Hummus, quinoa, purple cabbage and tahini — crunchy, creamy and vibrant.' },
    ru: { name: 'Средиземноморский боул с фалафелем', description: 'Хумус, киноа, красная капуста и тахини — хрустящий, сливочный и яркий.' },
    uk: { name: 'Середземноморський боул з фалафелем', description: 'Хумус, кіноа, червона капуста та тахіні — хрусткий, вершковий і яскравий.' },
  },
  'korean-bibimbap': {
    en: { name: 'Korean bibimbap bowl', description: 'Colourful rice bowl with tofu, spinach, carrot, edamame and toasted sesame.' },
    ru: { name: 'Корейский пибимпап', description: 'Яркий рисовый боул с тофу, шпинатом, морковью, эдамаме и кунжутом.' },
    uk: { name: 'Корейський бібімбап', description: 'Яскравий рисовий боул з тофу, шпинатом, морквою, едамаме та кунжутом.' },
  },
  'moroccan-chickpea-tagine': {
    en: { name: 'Moroccan chickpea tagine', description: 'Slow-cooked style chickpeas with sweet potato, carrot and warming spices.' },
    ru: { name: 'Марокканский тажин с нутом', description: 'Нут с бататом, морковью и согревающими специями в стиле тушёного тажина.' },
    uk: { name: 'Марокканський тажин з нутом', description: 'Нут з бататом, морквою та зігріваючими спеціями у стилі тушкованого тажину.' },
  },
  'greek-hummus-plate': {
    en: { name: 'Greek hummus plate', description: 'Hummus, quinoa, zucchini, tomato and lemon — fresh Aegean flavours.' },
    ru: { name: 'Греческая тарелка с хумусом', description: 'Хумус, киноа, кабачок, помидор и лимон — свежие эгейские вкусы.' },
    uk: { name: 'Грецька тарілка з хумусом', description: 'Хумус, кіноа, кабачок, помідор і лимон — свіжі егейські смаки.' },
  },
  'japanese-poke-bowl': {
    en: { name: 'Japanese-inspired poke bowl', description: 'Rice with edamame, avocado, nori and sesame — fresh and satisfying.' },
    ru: { name: 'Японский поке-боул', description: 'Рис с эдамаме, авокадо, нори и кунжутом — свежий и сытный.' },
    uk: { name: 'Японський поке-боул', description: 'Рис з едамаме, авокадо, норі та кунжутом — свіжий і ситний.' },
  },
  'indian-dal-tadka': {
    en: { name: 'Indian dal tadka', description: 'Golden lentil dal with spinach, tomato and nutritional yeast over rice.' },
    ru: { name: 'Индийский дал тадка', description: 'Золотистый дал из чечевицы со шпинатом, помидором и пищевыми дрожжами на рисе.' },
    uk: { name: 'Індійський дал тадка', description: 'Золотистий дал із сочевиці зі шпинатом, помідором і харчовими дріжджами на рисі.' },
  },
  'chinese-tempeh-stir-fry': {
    en: { name: 'Chinese tempeh stir-fry', description: 'Crispy tempeh with broccoli and peppers in a savoury stir-fry over rice.' },
    ru: { name: 'Китайский стир-фрай с темпе', description: 'Хрустящее темпе с брокколи и перцем в пикантном стир-фрае на рисе.' },
    uk: { name: 'Китайський стір-фрай з темпе', description: 'Хрустке темпе з броколі та перцем у пікантному стір-фраї на рисі.' },
  },
  'italian-pasta-e-fagioli': {
    en: { name: 'Pasta e fagioli', description: 'Rustic Italian pasta with white beans, tomato and spinach — hearty and comforting.' },
    ru: { name: 'Паста э фаджоли', description: 'Деревенская итальянская паста с белой фасолью, помидором и шпинатом.' },
    uk: { name: 'Паста е фаджолі', description: 'Сільська італійська паста з білою квасолею, помідором і шпинатом.' },
  },
  'brazilian-feijoada-bowl': {
    en: { name: 'Brazilian feijoada bowl', description: 'Black beans and rice with orange and kale — a plant-based take on a classic.' },
    ru: { name: 'Бразильская фейжоада', description: 'Чёрная фасоль с рисом, апельсином и кейлом — растительная версия классики.' },
    uk: { name: 'Бразильська фейжоада', description: 'Чорна квасоля з рисом, апельсином і кейлом — рослинна версія класики.' },
  },
  'levantine-tahini-bowl': {
    en: { name: 'Levantine tahini bowl', description: 'Chickpeas, buckwheat, kale and creamy tahini-lemon dressing.' },
    ru: { name: 'Левантийский боул с тахини', description: 'Нут, гречка, кейл и сливочная заправка из тахини и лимона.' },
    uk: { name: 'Левантійський боул з тахіні', description: 'Нут, гречка, кейл і вершкова заправка з тахіні та лимону.' },
  },
  'protein-tofu-power-bowl': {
    en: { name: 'Protein tofu power bowl', description: 'Extra tofu with quinoa, edamame, broccoli and hemp — built for protein focus.' },
    ru: { name: 'Протеиновый боул с тофу', description: 'Дополнительное тофу с киноа, эдамаме, брокколи и коноплёй — для фокуса на белке.' },
    uk: { name: 'Протеїновий боул з тофу', description: 'Додаткове тофу з кіноа, едамаме, броколі та коноплею — для фокусу на білку.' },
  },
  'indian-palak-tofu': {
    en: { name: 'Palak tofu (spinach curry)', description: 'Creamy spinach curry with tofu and rice — a vegan take on palak paneer.' },
    ru: { name: 'Палак тофу (шпинатное карри)', description: 'Сливочное шпинатное карри с тофу и рисом — веганская версия палак панира.' },
    uk: { name: 'Палак тофу (шпинатне каррі)', description: 'Вершкове шпинатне каррі з тофу та рисом — веганська версія палак паніру.' },
  },
  'thai-peanut-noodles': {
    en: { name: 'Thai peanut noodles', description: 'Whole-wheat noodles in rich peanut sauce with tofu, peppers and carrot.' },
    ru: { name: 'Тайская лапша с арахисом', description: 'Цельнозерновая лапша в насыщенном арахисовом соусе с тофу, перцем и морковью.' },
    uk: { name: 'Тайська локша з арахісом', description: 'Цільнозернова локша в насиченому арахісовому соусі з тофу, перцем і морквою.' },
  },
  'mexican-enchilada-bowl': {
    en: { name: 'Mexican enchilada bowl', description: 'Black beans, roasted sweet potato, peppers and avocado — smoky and satisfying.' },
    ru: { name: 'Мексиканский боул-энчилада', description: 'Чёрная фасоль, запечённый батат, перец и авокадо — дымные насыщенные вкусы.' },
    uk: { name: 'Мексиканський боул-енчілада', description: 'Чорна квасоля, запечений батат, перець і авокадо — димні насичені смаки.' },
  },
  'ethiopian-berbere-lentils': {
    en: { name: 'Ethiopian berbere lentils', description: 'Spiced red lentils with millet and kale — earthy and deeply flavourful.' },
    ru: { name: 'Эфиопская чечевица с бербере', description: 'Пряная красная чечевица с пшеном и кейлом — землистые глубокие вкусы.' },
    uk: { name: 'Ефіопська сочевиця з бербере', description: 'Пряна червона сочевиця з пшеном і кейлом — землисті глибокі смаки.' },
  },
  'mediterranean-stuffed-peppers': {
    en: { name: 'Mediterranean stuffed peppers', description: 'Roasted peppers filled with quinoa, chickpeas and tomato — colourful and hearty.' },
    ru: { name: 'Средиземноморский фаршированный перец', description: 'Запечённый перец с киноа, нутом и помидором — яркий и сытный.' },
    uk: { name: 'Середземноморський фарширований перець', description: 'Запечений перець з кіноа, нутом і помідором — яскравий і ситний.' },
  },
  'japanese-teriyaki-tempeh': {
    en: { name: 'Japanese teriyaki tempeh', description: 'Glazed tempeh with rice, broccoli, edamame and nori — sweet-savoury balance.' },
    ru: { name: 'Японское темпе терияки', description: 'Глазированное темпе с рисом, брокколи, эдамаме и нори — баланс сладкого и солёного.' },
    uk: { name: 'Японське темпе теріякі', description: 'Глазуроване темпе з рисом, броколі, едамаме та норі — баланс солодкого й солоного.' },
  },
  'moroccan-harira-style': {
    en: { name: 'Moroccan harira-style soup', description: 'Hearty tomato-based soup with lentils, chickpeas and spinach.' },
    ru: { name: 'Марокканский суп в стиле харира', description: 'Сытный томатный суп с чечевицей, нутом и шпинатом.' },
    uk: { name: 'Марокканський суп у стилі харіра', description: 'Ситний томатний суп із сочевицею, нутом і шпинатом.' },
  },
  'italian-minestrone-bowl': {
    en: { name: 'Italian minestrone bowl', description: 'White beans, pasta, zucchini, tomato and spinach — rustic Italian comfort.' },
    ru: { name: 'Итальянская минестроне', description: 'Белая фасоль, паста, кабачок, помидор и шпинат — деревенский итальянский уют.' },
    uk: { name: 'Італійська мінестроне', description: 'Біла квасоля, паста, кабачок, помідор і шпинат — сільський італійський затишок.' },
  },
  'korean-tofu-jjigae': {
    en: { name: 'Korean tofu jjigae', description: 'Spicy-savoury tofu stew with zucchini, spinach and rice — warming and bold.' },
    ru: { name: 'Корейское тофу ччигэ', description: 'Пряное тофу с кабачком, шпинатом и рисом — согревающее и яркое блюдо.' },
    uk: { name: 'Корейське тофу ччіге', description: 'Пряне тофу з кабачком, шпинатом і рисом — зігріваюча й яскрава страва.' },
  },
  'west-african-groundnut-stew': {
    en: { name: 'West African groundnut stew', description: 'Peanut-rich stew with sweet potato, chickpeas and spinach over rice.' },
    ru: { name: 'Западноафриканское арахисовое рагу', description: 'Насыщенное арахисом рагу с бататом, нутом и шпинатом на рисе.' },
    uk: { name: 'Західноафриканське арахісове рагу', description: 'Насичене арахісом рагу з бататом, нутом і шпинатом на рисі.' },
  },
  'greek-gemista-bowl': {
    en: { name: 'Greek gemista bowl', description: 'Quinoa with chickpeas, tomato, zucchini and lemon — sunny Greek flavours.' },
    ru: { name: 'Греческий гемиста боул', description: 'Киноа с нутом, помидором, кабачком и лимоном — солнечные греческие вкусы.' },
    uk: { name: 'Грецький геміста боул', description: 'Кіноа з нутом, помідором, кабачком і лимоном — сонячні грецькі смаки.' },
  },
  'chinese-mapo-tofu-bowl': {
    en: { name: 'Chinese mapo tofu bowl', description: 'Silky tofu with spinach and peppers in a savoury sauce over rice.' },
    ru: { name: 'Китайский ма По тофу', description: 'Нежное тофу со шпинатом и перцем в пикантном соусе на рисе.' },
    uk: { name: 'Китайський ма По тофу', description: 'Ніжне тофу зі шпинатом і перцем у пікантному соусі на рисі.' },
  },
  'iodine-wakame-soup-bowl': {
    en: { name: 'Wakame miso-style soup bowl', description: 'Wakame seaweed with tofu, edamame and rice — a concentrated iodine source.' },
    ru: { name: 'Суп с вакаме в стиле мисо', description: 'Водоросли вакаме с тофу, эдамаме и рисом — концентрированный источник йода.' },
    uk: { name: 'Суп з вакаме у стилі місо', description: 'Водорості вакаме з тофу, едамаме та рисом — концентроване джерело йоду.' },
  },
  'd3-mushroom-risotto': {
    en: { name: 'UV mushroom risotto', description: 'Creamy rice with UV-treated mushrooms and fortified oat milk — a D3-focused dinner.' },
    ru: { name: 'Ризотто с UV-грибами', description: 'Сливочный рис с UV-грибами и фортифицированным овсяным молоком — ужин с фокусом на D3.' },
    uk: { name: 'Різотто з UV-грибами', description: 'Вершковий рис з UV-грибами та фортифікованим вівсяним молоком — вечеря з фокусом на D3.' },
  },
  'hummus-crudites': {
    en: { name: 'Hummus with crudités', description: 'Creamy hummus with crunchy carrot and bell pepper sticks.' },
    ru: { name: 'Хумус с овощными палочками', description: 'Нежный хумус с хрустящей морковью и болгарским перцем.' },
    uk: { name: 'Хумус з овочевими паличками', description: 'Ніжний хумус з хрусткою морквою та болгарським перцем.' },
  },
  'trail-mix-bowl': {
    en: { name: 'Trail mix snack bowl', description: 'Almonds, pumpkin seeds and apple — a crunchy, energising snack.' },
    ru: { name: 'Домашний трейл-микс', description: 'Миндаль, тыквенные семечки и яблоко — хрустящий энергетический перекус.' },
    uk: { name: 'Домашній трейл-мікс', description: 'Мигдаль, гарбузове насіння та яблуко — хрусткий енергетичний перекус.' },
  },
  'edamame-sea-salt': {
    en: { name: 'Edamame with lemon', description: 'Steamed edamame with a squeeze of lemon — simple Japanese snack.' },
    ru: { name: 'Эдамаме с лимоном', description: 'Эдамаме с лимоном — простой японский перекус.' },
    uk: { name: 'Едамаме з лимоном', description: 'Едамаме з лимоном — простий японський перекус.' },
  },
  'nut-butter-apple': {
    en: { name: 'Apple with nut butter', description: 'Crisp apple slices with peanut butter and ground flax.' },
    ru: { name: 'Яблоко с ореховой пастой', description: 'Хрустящее яблоко с арахисовой пастой и молотым льном.' },
    uk: { name: 'Яблуко з горіховою пастою', description: 'Хрустке яблуко з арахісовою пастою та меленим льоном.' },
  },
  'tropical-fruit-plate': {
    en: { name: 'Tropical fruit plate', description: 'Orange, berries and walnuts — bright, refreshing and vitamin C-rich.' },
    ru: { name: 'Тропическая фруктовая тарелка', description: 'Апельсин, ягоды и грецкие орехи — яркий освежающий перекус с витамином C.' },
    uk: { name: 'Тропічна фруктова тарілка', description: 'Апельсин, ягоди та волоські горіхи — яскравий освіжаючий перекус з вітаміном C.' },
  },
  'beet-hummus-toast': {
    en: { name: 'Beet hummus toast', description: 'Whole-grain toast with hummus and roasted beet — earthy and colourful.' },
    ru: { name: 'Тост с хумусом и свёклой', description: 'Цельнозерновой тост с хумусом и свёклой — землистый и яркий.' },
    uk: { name: 'Тост з хумусом і буряком', description: 'Цільнозерновий тост з хумусом і буряком — землистий і яскравий.' },
  },
  'protein-seed-mix': {
    en: { name: 'Protein seed mix', description: 'Hemp and pumpkin seeds with banana — concentrated plant protein snack.' },
    ru: { name: 'Протеиновый микс семян', description: 'Семена конопли и тыквы с бананом — концентрированный растительный белок.' },
    uk: { name: 'Протеїновий мікс насіння', description: 'Насіння коноплі та гарбуза з бананом — концентрований рослинний білок.' },
  },
  'iodine-nori-bites': {
    en: { name: 'Nori rice bites', description: 'Mini nori wraps with avocado and rice — a concentrated iodine snack.' },
    ru: { name: 'Нори-закуски с рисом', description: 'Мини-роллы из нори с авокадо и рисом — концентрированный источник йода.' },
    uk: { name: 'Норі-закуски з рисом', description: 'Міні-роли з норі з авокадо та рисом — концентроване джерело йоду.' },
  },
};

export function getRecipeText(recipeId: string, locale: Locale): RecipeText {
  const text = recipeTexts[recipeId];
  if (text) return text[locale];
  return { name: recipeId, description: '' };
}

export function getCuisineText(cuisineId: string, locale: Locale): string {
  return cuisineTexts[cuisineId]?.[locale] ?? cuisineId;
}
