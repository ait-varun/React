# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Add TailwindCSS

1. Install Tailwind CSS via npm, and create a `tailwind.config.js` file:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. Configure Vite to use Tailwind CSS:

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```css
/** src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```


4. Run the CLI tool to scan your template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

5. Import the generated CSS file in your `index.html` file:

```html
<link rel="stylesheet" href="./src/output.css">
```

6. Start the dev server:

```bash
npm run dev
```
