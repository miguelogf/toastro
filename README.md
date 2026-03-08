# Toastro 🍞

Minimal toast notification library for **Astro**.  
Lightweight, framework-agnostic, and fully customizable.

---

## 🚀 Getting Started

Install Toastro with your preferred package manager:

```bash
# npm
npm install toastro

# bun
bun add toastro

# pnpm
pnpm add toastro

# yarn
yarn add toastro
```

---

## ⚙️ Setup

Add `<ToastContainer />` once in your main layout. It handles the queue and animations automatically.

```astro
--- 
import { ToastContainer } from 'toastro';
---

<html lang="en">
  <body>
    <slot />
    <ToastContainer /> <!-- default position="bottom-right" -->
  </body>
</html>
```

---

## ✨ Usage

Call `window.showToast()` from any client script. No imports needed after mounting `<ToastContainer />`.

```html
<button id="btn">Show toast</button>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    window.showToast({
      message: "Hello from Toastro",
      type: "success",
      variant: "glass",
    });
  });
</script>
```

---

## 🏷 Types

| Type     | Icon | Use Case |
|----------|------|----------|
| `default` | —    | Neutral messages |
| `success` | ✓    | Completed actions |
| `error`   | ✕    | Failures or validation errors |
| `warning` | ⚠    | Non-critical alerts |
| `info`    | ℹ    | Informational messages |

---

## 🎨 Variants

| Variant  | Description |
|----------|-------------|
| `solid`  | Filled background, high contrast (default) |
| `soft`   | Subtle tint, low contrast |
| `outline`| Transparent background with colored border |
| `glass`  | Frosted glass effect with backdrop blur |

---

## 📍 Positions

```astro
<ToastContainer position="bottom-right" /> <!-- default -->
<ToastContainer position="top-left" />
<ToastContainer position="center" />
```

---

## 🖌️ Custom Icons

```js
window.showToast({
  message: "Deployed to production",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>`,
});
```

---

## 🌈 Custom Colors

```js
window.showToast({ message: "Custom brand color", color: "#6366f1" });
window.showToast({ message: "Gradient toast", gradientColors: ["#f97316", "#ec4899", "#8b5cf6"] });
```

---

## ⏱ Duration

```js
window.showToast({ message: "Quick!", duration: 1500 });
window.showToast({ message: "Longer…", duration: 8000 });
```

---

## 🎨 CSS Theming

```css
:root {
  --toastro-bg:     var(--bg-color);
  --toastro-text:   var(--text-color);
  --toastro-radius: 12px;
}
```

---

## ⚡ Libraries Used

- **Astro** – Main framework  
- **ParticlesJS** – Animated background particles
- **Lucide Icons** – General icons  
- **Simple Icons** – Social brand icons  
- **SVGL** – Tech brand icons  

---

## 📜 API Reference

### `<ToastContainer />` props

| Prop     | Type      | Default        | Description |
|----------|-----------|----------------|------------|
| `position` | `Position` | `"bottom-right"` | Toasts position |

### `showToast(options)`

| Option          | Type                  | Default     | Description |
|-----------------|----------------------|------------|------------|
| `message`       | `string`             | required   | Toast text |
| `type`          | `ToastType`          | `"default"`| Icon & color theme |
| `variant`       | `ToastVariant`       | `"solid"`  | Visual style |
| `icon`          | `string | null`      | undefined  | Custom SVG or null |
| `color`         | `string`             | undefined  | Custom accent color |
| `gradientColors`| `string[]`           | undefined  | Horizontal gradient |
| `duration`      | `number`             | 4000       | Time before auto-dismiss |

**Types:**
```ts
type ToastType    = "default" | "success" | "error" | "warning" | "info";
type ToastVariant = "solid" | "soft" | "outline" | "glass";
```

---

[Visit Documentation](https://toastro.vercel.app/docs)