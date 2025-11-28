# Feature: Editable Text Block for Todo Items

## Overview
This feature introduces an editable block of plain text to each todo item. The block allows users to add, update, or remove notes or details associated with a todo item. The text block is strictly plain text—no formatting, rich text, or markdown support.

## Requirements
- Each todo item should display a block of editable text.
- The text block should be editable directly within the todo item UI.
- No formatting options (bold, italics, lists, etc.) are allowed—only plain text.
- Changes to the text block should be saved automatically or via a save button.
- The editable text should be persistent (saved to backend or local storage).

## User Stories
- As a user, I want to add notes to my todo items so I can remember details or context.
- As a user, I want to edit the notes for a todo item at any time.
- As a user, I want my notes to be saved and available when I return to the app.

## Acceptance Criteria
- Editable text block is present for each todo item.
- Editing the text block updates the underlying data model.
- No formatting is possible in the text block.
- Notes persist across sessions.

## Implementation Notes
- UI: Use a simple `<textarea>` or input field for editing.
- Data: Extend the todo item model to include a `notes` or `details` field (string).
- Persistence: Update backend API and/or local storage logic to handle the new field.
