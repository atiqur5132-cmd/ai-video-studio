import re

with open('src/scenes/AiEscapeUnderOathScenes.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace openai_logo with openai_logo_black
content = content.replace('logos/openai_logo.png', 'logos/openai_logo_black.png')

# Remove import MascotRobot
content = re.sub(r'import\s+\{\s*MascotRobot\s*\}\s+from\s+["\'][^"\']+["\'];\n?', '', content)

# Remove MascotRobot tags
content = re.sub(r'\n\s*<MascotRobot[^/]*/>', '', content)

with open('src/scenes/AiEscapeUnderOathScenes.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated AiEscapeUnderOathScenes.tsx successfully!')
