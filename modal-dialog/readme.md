# Accessible Modal Dialog

* Contrasting colours for:
 * Modal body
 * Buttons (including separate hover and focus styles)
* Explicit fill set on SVG used as graphic for button, with colour change on hover via CSS
* Dark mode colours set to better follow a users preference for accessibility reasons, and also to avoid SVG being broken by Windows High Contrast mode
* Language set on body
* Role set on dialog
* Label and description given to dialog pointing to existing content of dialog, acts as a named anchor in the page
* SVG hidden from accessibility tree and text alternative hidden only from visual display for modal close button
* Event handler to capture escape key presses only while modal is visible to close the modal
* Tabbing elements is trapped within the modal elements when the modal is displayed
* Closing of the modal (via buttons or Escape key) will return focus back to whatever initially triggered the modal to open