# Accessible Language Selector

* Contrasting colours for select element and graphical attributes
* Explicit fill set on SVG used as graphic for button, with colour change on hover via CSS
* Dark mode colours set to better follow a users preference for accessibility reasons, and also to avoid SVG being broken by Windows High Contrast mode
* Language set on body
* Language set on each option element to correctly hint to screen readers what accent/voice to use
* SVG hidden from accessibility tree and text alternative hidden only from visual display for the select element
* Event handler to capture change of language
