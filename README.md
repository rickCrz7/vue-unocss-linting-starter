# Vue + TypeScript + UnoCSS Starter

A modern Vue 3 starter template with:
- **TypeScript**: Strongly typed JavaScript.
- **UnoCSS**: Instant on-demand atomic CSS engine.
- **ESLint**: Modern linting configuration.
- **Prettier**: Code formatting for consistent style.

---

## **Getting Started**

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/vue-ts-unocss-starter.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## **VS Code Setup for Linting**

To ensure ESLint and Prettier work seamlessly in VS Code, create a `.vscode/settings.json` file in the root of your project and add the following configuration:

```json
{
    "eslint.validate": ["vue", "javascript", "typescript"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always",
        "source.fixAll.stylelint": "always"
    },
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    }
}
```

This configuration will:
- Enable ESLint validation for Vue, JavaScript, and TypeScript files.
- Automatically fix ESLint and Stylelint issues on save.
- Improve code suggestions in VS Code.

---

## **Features**
- **Vue 3**: Composition API and script setup.
- **TypeScript**: Type-safe development.
- **UnoCSS**: Utility-first CSS with on-demand generation.
- **ESLint**: Modern linting setup.
- **Prettier**: Consistent code formatting.

---

## **Contributing**
Feel free to open issues or submit pull requests for improvements.

---

## **License**
This project is licensed under the MIT License.
