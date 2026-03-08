# Documentation: Toastro 🍞

**Toastro** es una librería de notificaciones minimalista y framework-agnostic, diseñada específicamente para el ecosistema moderno de **Astro**. Enfocada en la ligereza, el diseño limpio y una experiencia de desarrollo (DX) superior.

---

## 🚀 Instalación

Instala Toastro usando tu gestor de paquetes favorito:

```bash
# npm
npm i toastro

# bun
bun add toastro

# pnpm
pnpm add toastro
🛠️ Configuración Rápida
Sigue estos pasos para integrar Toastro en tu proyecto en menos de un minuto:

1. Añadir el Contenedor

Inserta el componente <ToastContainer /> en tu layout principal (ej. src/layouts/Layout.astro). Este componente gestionará la cola de mensajes y las animaciones.

Fragmento de código
---
// src/layouts/Layout.astro
import { ToastContainer } from 'toastro';
---

<html lang="es">
  <body>
    <slot />
    <ToastContainer />
  </body>
</html>
2. Lanzar un Toast

Dispara notificaciones desde cualquier script de cliente (<script>) en tus componentes o páginas.

HTML
<button id="toast-btn">Saludar</button>

<script>
  document.getElementById('toast-btn')?.addEventListener('click', () => {
    window.showToast({
      message: "¡Acción completada con éxito!",
      type: "success",
      variant: "glass"
    });
  });
</script>
⚙️ API de showToast
La función window.showToast acepta un objeto de configuración con las siguientes propiedades:

Propiedad	Tipo	Por defecto	Descripción
message	string	Requerido	El mensaje principal de la notificación.
type	Type	'default'	Estilos: 'default', 'success', 'error', 'warning'.
variant	Variant	'solid'	Apariencia: 'solid', 'outline', 'glass'.
duration	number	4000	Tiempo en ms antes del auto-cierre.
icon	string	null	auto
gradientColors	string[]	undefined	Array de colores para fondos degradados.
📐 Posicionamiento Dinámico
Puedes configurar la ubicación global de los toasts mediante la prop position en el contenedor.

Fragmento de código
<ToastContainer position="top-right" />
Próximamente: Soporte para top-center, bottom-left y animaciones direccionales inteligentes.

🎨 Personalización y Temas
Toastro utiliza variables CSS para que puedas heredar el diseño de tu web sin esfuerzo:

CSS
:root {
  --toastro-bg: var(--bg-color);
  --toastro-text: var(--text-color);
  --toastro-radius: 12px;
}
<style>
/* Estilos para que el .md se vea increíble en tu web */
h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-color); }
h2 { font-size: 1.75rem; margin-top: 2.5rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
h3 { font-size: 1.25rem; margin-top: 1.5rem; color: #555; }

table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
th { background: #f9f9f9; text-align: left; padding: 12px; border-bottom: 2px solid #eee; }
td { padding: 12px; border-bottom: 1px solid #eee; }

code { background: #f4f4f4; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.9em; }
pre { background: #1e1e1e; color: #fff; padding: 1.5rem; border-radius: 12px; overflow-x: auto; margin: 1rem 0; }

.dark h3 { color: #ccc; }
.dark th { background: #1a1a1a; border-bottom-color: #333; }
.dark td { border-bottom-color: #333; }
.dark code { background: #2a2a2a; }
</style>