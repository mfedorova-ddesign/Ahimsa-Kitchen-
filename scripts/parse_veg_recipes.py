"""Parse veg_recipes Google Doc export into structured JSON."""
import re
import json
from pathlib import Path

SRC = Path(r'C:\Users\m.fedorova\.cursor\projects\c-Ahimsa-Kitchen\agent-tools\1baa8219-2cb5-4b99-abeb-8ac91d9e8bba.txt')
OUT = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'veg_recipes_parsed.json'

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

text = SRC.read_text(encoding='utf-8')
parts = re.split(r'\n(\d+)\.\s+', text)
parsed = []
for i in range(1, len(parts), 2):
    num = int(parts[i])
    body = parts[i + 1]
    lines = body.split('\n')
    title = lines[0].strip()
    rid = IDS[num - 1] if num <= len(IDS) else f'recipe-{num}'

    # ingredients: bullet lines between "На " and "Приготовление"
    ing_section = re.search(r'(?:На \d+.*?:|На форму.*?:)\s*\n+(.*?)\n+Приготовление:', body, re.DOTALL)
    ingredients = []
    if ing_section:
        for line in ing_section.group(1).split('\n'):
            line = line.strip()
            if line.startswith('*'):
                ingredients.append(re.sub(r'^\*\s*', '', line))

    # steps
    steps_section = re.search(r'Приготовление:\s*\n+(.*?)(?:\n+Белок:|\n+Как добрать|\n+Примечание:|\n+Топпинги:|\n+Соус |\n+________________|\Z)', body, re.DOTALL)
    steps = []
    if steps_section:
        for line in steps_section.group(1).split('\n'):
            line = line.strip()
            m = re.match(r'^\d+\.\s+(.+)', line)
            if m:
                steps.append(m.group(1))

    # protein note
    protein = ''
    pm = re.search(r'Белок:\s*(.+?)(?:\n\n|\n+Вкусовые|\n+Как добрать|\Z)', body, re.DOTALL)
    if pm:
        protein = pm.group(1).strip().replace('\n', ' ')

    parsed.append({
        'id': rid,
        'num': num,
        'title': title,
        'ingredients': ingredients,
        'steps': steps,
        'proteinNote': protein,
    })

OUT.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Wrote {len(parsed)} recipes to {OUT}')
