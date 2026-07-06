"""Generate recipes.ts and vegRecipesContent.ts from Google Doc export."""
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(r'C:\Users\m.fedorova\.cursor\projects\c-Ahimsa-Kitchen\agent-tools\1baa8219-2cb5-4b99-abeb-8ac91d9e8bba.txt')

IDS = [
    'oatmeal-almond-seeds',
    'rye-toast-hummus-avocado',
    'korean-chickpea-pancakes',
    'vegan-miso-ramen',
    'quinoa-black-beans-sweet-potato',
    'baked-tempeh-sweet-chili',
    'pea-soup-vegan-sausages',
    'falafel-wrap',
    'edamame-vegetable-salad',
    'turkish-red-lentil-soup',
    'vegetable-chickpea-curry',
    'mediterranean-stewed-beans',
    'wholegrain-pasta-bean-sauce',
    'sweet-protein-pancakes',
    'stir-fry-noodles-tofu-sauce',
    'vegan-berry-pie',
    'vegan-panna-cotta',
    'chickpea-chocolate-mousse',
    'chickpea-brownies',
    'brown-lentil-dal',
    'vegan-butter-masala',
    'pesto-pasta-green-peas',
    'potato-mushroom-pea-stew',
]

META = [
    {'cuisine': 'american', 'mealType': 'breakfast', 'tags': ['protein', 'fiber'], 'prepTimeMin': 10, 'servings': 1, 'perServing': {'kcal': 420, 'proteinG': 20, 'fatG': 16, 'carbsG': 48, 'fiberG': 10, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'levantine', 'mealType': 'breakfast', 'tags': ['balanced'], 'prepTimeMin': 10, 'servings': 1, 'perServing': {'kcal': 380, 'proteinG': 12, 'fatG': 18, 'carbsG': 42, 'fiberG': 9, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'korean', 'mealType': 'breakfast', 'tags': ['protein'], 'prepTimeMin': 25, 'servings': 2, 'perServing': {'kcal': 340, 'proteinG': 17, 'fatG': 10, 'carbsG': 48, 'fiberG': 8, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'japanese', 'mealType': 'dinner', 'tags': ['protein', 'iodine'], 'prepTimeMin': 30, 'servings': 2, 'perServing': {'kcal': 480, 'proteinG': 28, 'fatG': 14, 'carbsG': 58, 'fiberG': 6, 'ironMg': 4, 'iodineMcg': 40, 'd3Mcg': 0}},
    {'cuisine': 'mexican', 'mealType': 'dinner', 'tags': ['protein', 'iron'], 'prepTimeMin': 40, 'servings': 2, 'perServing': {'kcal': 450, 'proteinG': 20, 'fatG': 12, 'carbsG': 62, 'fiberG': 11, 'ironMg': 4, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'fusion', 'mealType': 'dinner', 'tags': ['protein'], 'prepTimeMin': 35, 'servings': 2, 'perServing': {'kcal': 390, 'proteinG': 20, 'fatG': 14, 'carbsG': 38, 'fiberG': 4, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'scandinavian', 'mealType': 'lunch', 'tags': ['protein'], 'prepTimeMin': 60, 'servings': 4, 'perServing': {'kcal': 320, 'proteinG': 20, 'fatG': 8, 'carbsG': 48, 'fiberG': 10, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'levantine', 'mealType': 'lunch', 'tags': ['protein'], 'prepTimeMin': 15, 'servings': 1, 'perServing': {'kcal': 420, 'proteinG': 20, 'fatG': 16, 'carbsG': 48, 'fiberG': 10, 'ironMg': 4, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'japanese', 'mealType': 'lunch', 'tags': ['protein'], 'prepTimeMin': 15, 'servings': 2, 'perServing': {'kcal': 280, 'proteinG': 18, 'fatG': 14, 'carbsG': 18, 'fiberG': 6, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'turkish', 'mealType': 'lunch', 'tags': ['protein', 'iron'], 'prepTimeMin': 35, 'servings': 4, 'perServing': {'kcal': 260, 'proteinG': 13, 'fatG': 6, 'carbsG': 38, 'fiberG': 8, 'ironMg': 4, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'indian', 'mealType': 'dinner', 'tags': ['protein'], 'prepTimeMin': 35, 'servings': 3, 'perServing': {'kcal': 380, 'proteinG': 14, 'fatG': 18, 'carbsG': 42, 'fiberG': 9, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'mediterranean', 'mealType': 'dinner', 'tags': ['protein', 'iron'], 'prepTimeMin': 35, 'servings': 3, 'perServing': {'kcal': 340, 'proteinG': 16, 'fatG': 10, 'carbsG': 48, 'fiberG': 12, 'ironMg': 4, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'italian', 'mealType': 'dinner', 'tags': ['protein', 'iron'], 'prepTimeMin': 30, 'servings': 2, 'perServing': {'kcal': 480, 'proteinG': 22, 'fatG': 12, 'carbsG': 68, 'fiberG': 11, 'ironMg': 4, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'american', 'mealType': 'breakfast', 'tags': ['protein', 'fiber'], 'prepTimeMin': 20, 'servings': 2, 'perServing': {'kcal': 360, 'proteinG': 15, 'fatG': 10, 'carbsG': 52, 'fiberG': 8, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'korean', 'mealType': 'dinner', 'tags': ['protein'], 'prepTimeMin': 25, 'servings': 2, 'perServing': {'kcal': 440, 'proteinG': 26, 'fatG': 14, 'carbsG': 52, 'fiberG': 6, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'european', 'mealType': 'snack', 'tags': [], 'prepTimeMin': 50, 'servings': 8, 'perServing': {'kcal': 280, 'proteinG': 5, 'fatG': 14, 'carbsG': 34, 'fiberG': 3, 'ironMg': 1, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'italian', 'mealType': 'snack', 'tags': [], 'prepTimeMin': 20, 'servings': 4, 'perServing': {'kcal': 220, 'proteinG': 2, 'fatG': 14, 'carbsG': 20, 'fiberG': 1, 'ironMg': 1, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'european', 'mealType': 'snack', 'tags': [], 'prepTimeMin': 30, 'servings': 4, 'perServing': {'kcal': 240, 'proteinG': 4, 'fatG': 12, 'carbsG': 28, 'fiberG': 3, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'american', 'mealType': 'snack', 'tags': [], 'prepTimeMin': 35, 'servings': 9, 'perServing': {'kcal': 180, 'proteinG': 4, 'fatG': 8, 'carbsG': 24, 'fiberG': 3, 'ironMg': 1, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'indian', 'mealType': 'dinner', 'tags': ['protein', 'iron'], 'prepTimeMin': 45, 'servings': 4, 'perServing': {'kcal': 400, 'proteinG': 18, 'fatG': 10, 'carbsG': 58, 'fiberG': 12, 'ironMg': 5, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'indian', 'mealType': 'dinner', 'tags': ['protein'], 'prepTimeMin': 45, 'servings': 4, 'perServing': {'kcal': 420, 'proteinG': 20, 'fatG': 16, 'carbsG': 48, 'fiberG': 6, 'ironMg': 3, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'italian', 'mealType': 'dinner', 'tags': ['protein'], 'prepTimeMin': 20, 'servings': 2, 'perServing': {'kcal': 460, 'proteinG': 18, 'fatG': 16, 'carbsG': 62, 'fiberG': 8, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
    {'cuisine': 'european', 'mealType': 'dinner', 'tags': ['balanced'], 'prepTimeMin': 35, 'servings': 4, 'perServing': {'kcal': 280, 'proteinG': 8, 'fatG': 8, 'carbsG': 42, 'fiberG': 6, 'ironMg': 2, 'iodineMcg': 0, 'd3Mcg': 0}},
]

# EN/UK translations: name, description (short), optional tip override
I18N = {
    'oatmeal-almond-seeds': {
        'en': {'name': 'Oatmeal with almond milk and seeds', 'description': 'Warm oats with flax, hemp, pumpkin seeds and peanut butter — about 20 g protein per serving.'},
        'uk': {'name': 'Вівсянка на мигдальному молоці з насінням', 'description': 'Тепла вівсянка з льоном, коноплею, гарбузовим насінням і арахісовою пастою — близько 20 г білка на порцію.'},
    },
    'rye-toast-hummus-avocado': {
        'en': {'name': 'Rye toast with hummus, tomatoes and avocado', 'description': 'Crispy rye with hummus, grated tomato and avocado slices.'},
        'uk': {'name': 'Житній тост з хумусом, помідорами та авокадо', 'description': 'Хрусткий житній тост з хумусом, тертим помідором і авокадо.'},
    },
    'korean-chickpea-pancakes': {
        'en': {'name': 'Korean-style vegetable pancakes (chickpea flour)', 'description': 'Savory pancakes with carrot, cabbage and zucchini — choice of tzatziki or Korean soy dressing.'},
        'uk': {'name': 'Овочеві млинці в корейському стилі (нутова мука)', 'description': 'Пікантні млинці з морквою, капустою та цукіні — соус тадзики або корейський соєвий.'},
    },
    'vegan-miso-ramen': {
        'en': {'name': 'Vegan miso ramen with tofu and shiitake', 'description': 'Rich miso broth with crispy tofu, shiitake and vegetables — mild or medium spicy.'},
        'uk': {'name': 'Веганський місо-рамен з тофу та шиітаке', 'description': 'Насичений місо-бульйон з хрустким тофу, шиітаке та овочами.'},
    },
    'quinoa-black-beans-sweet-potato': {
        'en': {'name': 'Quinoa with black beans and roasted sweet potato', 'description': 'Hearty bowl with cumin-spiced sweet potato, peppers and lime.'},
        'uk': {'name': 'Кіноа з чорною квасолею та запеченим бататом', 'description': 'Ситна миска з бататом, перцем і лаймом.'},
    },
    'baked-tempeh-sweet-chili': {
        'en': {'name': 'Baked tempeh in sweet chili sauce', 'description': 'Glazed tempeh with caramelized edges — serve with rice and vegetables.'},
        'uk': {'name': 'Запечений темпе в соусі солодкий чилі', 'description': 'Темпе з карамелізованою глазур\'ю — подавати з рисом та овочами.'},
    },
    'pea-soup-vegan-sausages': {
        'en': {'name': 'Split pea soup with vegan sausages', 'description': 'Creamy yellow pea soup with smoked paprika and pan-fried vegan sausages.'},
        'uk': {'name': 'Гороховий суп з веганськими сосисками', 'description': 'Кремовий суп із жовтого гороху з копченою паприкою та веганськими сосисками.'},
    },
    'falafel-wrap': {
        'en': {'name': 'Falafel wrap with hummus and tzatziki', 'description': 'Warm wrap with crispy falafel, hummus, tzatziki and fresh tomatoes.'},
        'uk': {'name': 'Врап з фалафелем, хумусом і тадзики', 'description': 'Теплий врап з хрустким фалафелем, хумусом, тадзики та помідорами.'},
    },
    'edamame-vegetable-salad': {
        'en': {'name': 'Vegetable salad with edamame', 'description': 'Fresh crunchy salad with edamame and sesame — light lemon dressing.'},
        'uk': {'name': 'Овочевий салат з едамаме', 'description': 'Свіжий хрусткий салат з едамаме та кунжутом.'},
    },
    'turkish-red-lentil-soup': {
        'en': {'name': 'Turkish red lentil soup with spinach', 'description': 'Creamy mercimek-style soup with cumin, paprika and wilted spinach.'},
        'uk': {'name': 'Турецький суп із червоної сочевиці зі шпинатом', 'description': 'Кремовий суп у стилі мерджимек з кумином, паприкою та шпинатом.'},
    },
    'vegetable-chickpea-curry': {
        'en': {'name': 'Vegetable chickpea curry', 'description': 'Coconut curry with chickpeas, seasonal vegetables and spinach.'},
        'uk': {'name': 'Овочеве каррі з нутом', 'description': 'Кокосове каррі з нутом, сезонними овочами та шпинатом.'},
    },
    'mediterranean-stewed-beans': {
        'en': {'name': 'Mediterranean stewed beans with tomatoes', 'description': 'Cannellini beans simmered in tomato sauce with oregano and olive oil.'},
        'uk': {'name': 'Тушкована фасоль з томатами (середземноморський стиль)', 'description': 'Біла фасоль у томатному соусі з орегано та оливковою олією.'},
    },
    'wholegrain-pasta-bean-sauce': {
        'en': {'name': 'Whole-grain pasta with bean tomato sauce', 'description': 'Italian-style sauce from blended and whole beans over whole-grain pasta.'},
        'uk': {'name': 'Цільнозернова паста з фасолевим томатним соусом', 'description': 'Італійський соус із подрібненої та цілої фасолі на цільнозерновій пасті.'},
    },
    'sweet-protein-pancakes': {
        'en': {'name': 'Sweet vegan protein pancakes', 'description': 'Fiber-rich breakfast pancakes with banana, flax and hemp seeds.'},
        'uk': {'name': 'Солодкі веганські оладки', 'description': 'Сніданкові оладки з бананом, льоном і насінням коноплі.'},
    },
    'stir-fry-noodles-tofu-sauce': {
        'en': {'name': 'Stir-fry noodles with creamy tofu sauce', 'description': 'Crisp vegetables and noodles in a spicy silken tofu sauce.'},
        'uk': {'name': 'Стір-фрай з локшиною та кремовим тофу-соусом', 'description': 'Хрусткі овочі та локшина в пікантному соусі з силкен-тофу.'},
    },
    'vegan-berry-pie': {
        'en': {'name': 'Vegan berry tart', 'description': 'Tart with soy yogurt and coconut condensed milk filling — a dessert, not high in protein.'},
        'uk': {'name': 'Пиріг з ягодами на веганському тісті', 'description': 'Тарт з соєвим йогуртом і кокосовою згущенкою — десерт, не високобілковий.'},
    },
    'vegan-panna-cotta': {
        'en': {'name': 'Vegan panna cotta', 'description': 'Coconut cream dessert set with agar-agar and vanilla.'},
        'uk': {'name': 'Веганська панна-котта', 'description': 'Десерт із кокосових вершків на агар-агарі з ваніллю.'},
    },
    'chickpea-chocolate-mousse': {
        'en': {'name': 'Vegan chickpea chocolate mousse', 'description': 'Airy dark chocolate mousse whipped with aquafaba.'},
        'uk': {'name': 'Веганський нутовий шоколадний мус', 'description': 'Повітряний темний шоколадний мус на аквафабі.'},
    },
    'chickpea-brownies': {
        'en': {'name': 'Vegan chickpea brownies', 'description': 'Fudgy brownies from blended chickpeas and dark chocolate.'},
        'uk': {'name': 'Веганські нутові брауні', 'description': 'Вологі брауні з подрібненого нуту та темного шоколаду.'},
    },
    'brown-lentil-dal': {
        'en': {'name': 'Brown lentil dal with rice', 'description': 'Hearty dal with mustard seed tadka — serve with rice and cilantro.'},
        'uk': {'name': 'Дал із коричневої сочевиці з рисом', 'description': 'Ситний дал з тадкою з гірчичного насіння — подавати з рисом і кінзою.'},
    },
    'vegan-butter-masala': {
        'en': {'name': 'Vegan butter masala with rice', 'description': 'Creamy tomato sauce with soy chunks or tofu — Indian restaurant classic, veganized.'},
        'uk': {'name': 'Веганська чікен баттер масала з рисом', 'description': 'Кремовий томатний соус з соєвим м\'ясом або тофу.'},
    },
    'pesto-pasta-green-peas': {
        'en': {'name': 'Pesto pasta with green peas', 'description': 'Fresh basil pesto with peas, nuts and nutritional yeast over pasta.'},
        'uk': {'name': 'Паста песто із зеленим горошком', 'description': 'Свіжий песто з базиліку, горошку, горіхів і пивних дріжджів.'},
    },
    'potato-mushroom-pea-stew': {
        'en': {'name': 'Potato stew with mushrooms and peas', 'description': 'Comforting one-pot stew with mushrooms, potatoes and dill.'},
        'uk': {'name': 'Картопля тушкована з грибами та зеленим горошком', 'description': 'Домашнє рагу з грибами, картоплею та кропом.'},
    },
}


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def parse_recipes(text: str) -> list[dict]:
    blocks = re.split(r'_{5,}', text)
    recipes = []
    for block in blocks:
        block = block.strip()
        m = re.search(r'(?:^|\n)(\d{1,2})\.\s+(.+?)(?:\n|$)', block)
        if not m:
            continue
        num = int(m.group(1))
        if num < 1 or num > 23:
            continue
        title = m.group(2).strip()
        rid = IDS[num - 1]

        ingredients = []
        for line in block.split('\n'):
            line = line.strip()
            if line.startswith('*'):
                ingredients.append(re.sub(r'^\*\s*', '', line))

        steps = []
        in_steps = False
        for line in block.split('\n'):
            line = line.strip()
            if line == 'Приготовление:':
                in_steps = True
                continue
            if in_steps:
                sm = re.match(r'^\d+\.\s+(.+)', line)
                if sm:
                    steps.append(sm.group(1))
                elif line.startswith('Белок:') or line.startswith('Как добрать') or line.startswith('Примечание:') or line.startswith('Вкусовые'):
                    in_steps = False

        protein = ''
        pm = re.search(r'(?:Белок:|Как добрать белок:)\s*(.+?)(?:\n\n|\n+Вкусовые|\n+Примечание:|\Z)', block, re.DOTALL)
        if pm:
            protein = re.sub(r'\s+', ' ', pm.group(1).strip())
        note = ''
        nm = re.search(r'Примечание:\s*(.+?)(?:\n\n|\Z)', block, re.DOTALL)
        if nm:
            note = re.sub(r'\s+', ' ', nm.group(1).strip())
        tip = protein or note

        recipes.append({
            'id': rid, 'num': num, 'title': title,
            'ingredients': ingredients, 'steps': steps, 'tip': tip,
        })
    recipes.sort(key=lambda r: r['num'])
    return recipes


def gen_recipes_ts(recipes: list[dict]) -> str:
    lines = [
        "import type { Recipe } from '../types';",
        '',
        '/** Vegan recipe collection from curated document (23 recipes). */',
        'export const recipes: Recipe[] = [',
    ]
    for i, r in enumerate(recipes):
        m = META[i]
        ps = m['perServing']
        tags = ', '.join(f"'{t}'" for t in m['tags']) or ''
        tag_part = f"tags: [{tags}], " if m['tags'] else 'tags: [], '
        lines.append(f"  {{")
        lines.append(f"    id: '{r['id']}',")
        lines.append(f"    cuisine: '{m['cuisine']}',")
        lines.append(f"    mealType: '{m['mealType']}',")
        lines.append(f"    {tag_part}")
        lines.append(f"    ingredients: [],")
        lines.append(f"    prepTimeMin: {m['prepTimeMin']},")
        lines.append(f"    servings: {m['servings']},")
        lines.append(f"    perServing: {{ kcal: {ps['kcal']}, proteinG: {ps['proteinG']}, fatG: {ps['fatG']}, carbsG: {ps['carbsG']}, fiberG: {ps['fiberG']}, ironMg: {ps['ironMg']}, iodineMcg: {ps['iodineMcg']}, d3Mcg: {ps['d3Mcg']} }},")
        lines.append(f"  }},")
    lines.append('];')
    lines.append('')
    return '\n'.join(lines)


def gen_content_ts(recipes: list[dict]) -> str:
    lines = [
        "import type { Locale } from './types';",
        "import type { RecipeText } from './recipeTranslations';",
        '',
        'type LocaleMap<T> = Record<Locale, T>;',
        '',
        'export const vegRecipeTexts: Record<string, LocaleMap<RecipeText>> = {',
    ]
    for r in recipes:
        rid = r['id']
        i18n = I18N[rid]
        ru_desc = r['title'] + ' — веганский рецепт из подборки.'
        lines.append(f"  '{rid}': {{")
        for loc in ('ru', 'en', 'uk'):
            if loc == 'ru':
                name = r['title']
                desc = ru_desc
                ing = r['ingredients']
                steps = r['steps']
                tip = r['tip'] or None
            else:
                t = i18n[loc]
                name = t['name']
                desc = t['description']
                ing = r['ingredients']  # keep RU ingredients for now - need EN
                steps = r['steps']
                tip = r['tip'] or None
            lines.append(f"    {loc}: {{")
            lines.append(f"      name: {ts_str(name)},")
            lines.append(f"      description: {ts_str(desc)},")
            lines.append(f"      ingredientLines: [{', '.join(ts_str(x) for x in ing)}],")
            lines.append(f"      steps: [{', '.join(ts_str(x) for x in steps)}],")
            if tip:
                lines.append(f"      tip: {ts_str(tip)},")
            lines.append(f"    }},")
        lines.append(f"  }},")
    lines.append('};')
    lines.append('')
    return '\n'.join(lines)


def main():
    text = SRC.read_text(encoding='utf-8')
    recipes = parse_recipes(text)
    print(f'Parsed {len(recipes)} recipes')
    if len(recipes) != 23:
        missing = set(range(1, 24)) - {r['num'] for r in recipes}
        print('Missing recipe numbers:', sorted(missing))
        raise SystemExit('Expected 23 recipes')

    (ROOT / 'src' / 'data' / 'recipes.ts').write_text(gen_recipes_ts(recipes), encoding='utf-8')
    (ROOT / 'src' / 'i18n' / 'vegRecipesContent.ts').write_text(gen_content_ts(recipes), encoding='utf-8')
    print('Generated recipes.ts and vegRecipesContent.ts')


if __name__ == '__main__':
    main()
