import re

# Read the about page
with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

# Replace the hero section to match homepage style
old_pattern = r'        <section className="relative">\s*<div className="relative w-full h-\[500px\] md:h-\[600px\]">'
new_replacement = '''        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">'''

content = re.sub(old_pattern, new_replacement, content, flags=re.MULTILINE)

# Also need to close the new div structure
content = re.sub(r'(            </div>\s*</div>\s*        </section>)', '            </div>\n          </div>\n        </section>', content)

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)
