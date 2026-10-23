# Héctor Franco Magallo — Portafolio Personal

Sitio web personal que funciona como portafolio profesional: reúne mi perfil, formación académica, certificados, proyectos y vías de contacto en una única experiencia navegable, responsive y con animaciones nativas.

---

## Descripción

Es una **página web estática** desarrollada a mano con **HTML**, **CSS** y **TypeScript**, sin frameworks ni librerías externas. El objetivo es presentar de forma clara y visual mi recorrido como desarrollador en formación, mis proyectos y mi disponibilidad profesional.

El código está pensado para ser **ligero, mantenible y fácil de desplegar** en cualquier hosting estático o páginas de GitHub.

---

## Secciones

| Sección | Contenido |
| :------ | :-------- |
| **Inicio** | Presentación breve y bienvenida |
| **Sobre mí** | Perfil profesional con efecto máquina de escribir |
| **Certificados** | Certificados obtenidos y en curso |
| **Estudios académicos** | Formación y ciclos cursados |
| **Proyectos** | Proyectos desarrollados y próximamente |
| **Contacto** | Enlaces a redes y vías de comunicación |

---

## Funcionalidades

- **Menú lateral responsive** con botón hamburguesa y capa difuminada de fondo.
- **Animaciones de aparición** (`reveal`) activadas mediante `IntersectionObserver` al hacer scroll.
- **Diseño adaptable** a distintos tamaños de pantalla.
- **Tipado estricto** con TypeScript para mayor seguridad y legibilidad del código.

---

## Estructura

```
Pagina-Web/
├── index.html            # Página de inicio
├── pages/                # Resto de secciones
│   ├── sobre_mi.html
│   ├── certificados.html
│   ├── estudios.html
│   ├── proyectos.html
│   ├── contactos.html
│   └── calendario.html
├── ts/                   # Código fuente en TypeScript
│   └── programacion.ts
├── js/                   # JavaScript compilado (generado)
│   └── programacion.js
├── css/
│   └── cuerpo.css
├── assets/               # Imágenes y recursos
├── tsconfig.json
└── package.json
```

---

## Tecnologías

- **HTML5** — Estructura y semántica.
- **CSS3** — Diseño, transiciones y animaciones.
- **TypeScript** — Lógica de interacción con tipado estricto.
- **Git / GitHub** — Control de versiones y publicación.

---

## Desarrollo local

Para trabajar con el proyecto y compilar el TypeScript:

```bash
# Instalar dependencias
npm install

# Compilar TypeScript a JavaScript
npm run build

# Compilar en modo continuo (recompila al guardar)
npm run watch
```

> **Nota:** `js/programacion.js` es un archivo **generado** a partir de `ts/programacion.ts`. Edita siempre el archivo `.ts` y vuelve a compilar; no modifiques el `.js` directamente.

---

## Autor

**Héctor Franco Magallo**

- GitHub: [HectorFM99](https://github.com/HectorFM99)
- Repositorio: [Pagina-Web](https://github.com/HectorFM99/Pagina-Web)

---

Desarrollado con HTML, CSS y TypeScript.
