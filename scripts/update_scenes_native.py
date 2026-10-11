import re

with open('src/scenes/AiEscapeUnderOathScenes.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace CleanEvidenceView import with direct native canvas components
new_imports = '''import { DirectTestimonyCanvas } from "../components/DirectTestimonyCanvas";
import { DirectIncidentCanvas } from "../components/DirectIncidentCanvas";
import { DirectAustraliaBreachCanvas } from "../components/DirectAustraliaBreachCanvas";
import { DirectZeroTrustCanvas } from "../components/DirectZeroTrustCanvas";'''

code = code.replace('import { CleanEvidenceView } from "../components/CleanEvidenceView";', new_imports)

# 1. P01 Beat 2
old_p01_b2 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/nyc_council_hearing_sworn_record\.png"\s+headline="ADMITTED UNDER PENALTY OF PERJURY"[\s\S]*?/>', code)
if old_p01_b2:
    code = code.replace(old_p01_b2.group(0), '<DirectTestimonyCanvas />')

# 2. P02 Beat 1
old_p02_b1 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/nyc_council_hearing_sworn_record\.png"\s+headline="OFFICIAL TESTIMONY[^\"]*"\s+width=\{1500\}[\s\S]*?/>', code)
if old_p02_b1:
    code = code.replace(old_p02_b1.group(0), '<DirectTestimonyCanvas />')

# 3. P04
old_p04 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/irregular_ctf_incident_report\.png"[\s\S]*?/>', code)
if old_p04:
    code = code.replace(old_p04.group(0), '<DirectIncidentCanvas />')

# 4. P08 Beat 1
old_p08_b1 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/australia_parliament_medical_breach\.png"[\s\S]*?/>', code)
if old_p08_b1:
    code = code.replace(old_p08_b1.group(0), '<DirectAustraliaBreachCanvas />')

# 5. P10 Beat 1
old_p10_b1 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/nyc_council_hearing_sworn_record\.png"\s+headline="NYC COUNCIL: COMMITTEE OF THE WHOLE"[\s\S]*?/>', code)
if old_p10_b1:
    code = code.replace(old_p10_b1.group(0), '''<DirectTestimonyCanvas
              speaker="WHISTLEBLOWERS UNDER OATH"
              role="Google DeepMind, OpenAI, Anthropic"
              logoSrc="logos/openai_logo_black.png"
              quote="Current alignment techniques are completely insufficient for models that possess code compilation tools and dynamic network access."
              highlightedPhrase="completely insufficient"
              pills={[
                { label: "COMMITTEE HEARING", value: "NEW YORK CITY", color: "#38bdf8" },
                { label: "ALIGNMENT STATUS", value: "INSUFFICIENT", color: "#ef4444" },
                { label: "LABS IMPLICATED", value: "ALL 4 FRONTIERS", color: "#f59e0b" },
              ]}
            />''')

# 6. P14 Beat 1
old_p14_b1 = re.search(r'<CleanEvidenceView\s+imageSrc="evidence/escapes_hearing/zero_trust_architecture_playbook\.png"[\s\S]*?/>', code)
if old_p14_b1:
    code = code.replace(old_p14_b1.group(0), '<DirectZeroTrustCanvas />')

with open('src/scenes/AiEscapeUnderOathScenes.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Successfully replaced all CleanEvidenceView instances with native single-canvas components!")
