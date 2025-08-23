# Portfolio Joaquín Suárez

Portfolio personal desarrollado con React + Vite + Tailwind CSS con estética "liquid glass" y modo oscuro.

## 🚀 Instalación y configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
\`\`\`bash
git clone [tu-repositorio]
cd portfolio-joaquin
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
\`\`\`

3. **Configurar archivos estáticos**
   - Coloca tu foto de perfil en `/public/avatar.jpg`
   - Coloca tu CV en `/public/cv.pdf`
   - Ambos archivos son opcionales, se mostrarán placeholders si no existen

4. **Ejecutar en desarrollo**
\`\`\`bash
npm run dev
\`\`\`

5. **Construir para producción**
\`\`\`bash
npm run build
\`\`\`

## 📁 Estructura del proyecto

\`\`\`
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navbar con navegación
│   ├── Hero.jsx        # Sección principal
│   ├── About.jsx       # Sobre mí
│   ├── ProjectsGrid.jsx # Grid de proyectos
│   ├── ProjectCard.jsx # Tarjeta individual de proyecto
│   ├── Timeline.jsx    # Timeline de estudios
│   ├── Experience.jsx  # Experiencia laboral
│   ├── Contact.jsx     # Formulario de contacto
│   ├── Footer.jsx      # Pie de página
│   └── ThemeToggle.jsx # Toggle modo oscuro/claro
├── data/               # Datos del portfolio
│   ├── projects.js     # Array de proyectos
│   └── studies.js      # Array de estudios
├── App.jsx            # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales y Tailwind
\`\`\`

## ✏️ Personalización

### Datos personales
Edita los siguientes archivos para personalizar el contenido:

- **Proyectos**: `src/data/projects.js`
- **Estudios**: `src/data/studies.js`
- **Información personal**: Directamente en los componentes (Hero.jsx, About.jsx, etc.)

### Estilos
- **Colores**: Modifica la variable `accent` en `tailwind.config.js`
- **Tipografía**: Descomenta las líneas en `src/index.css` para usar Geist u otra fuente
- **Efectos glass**: Personaliza la clase `.glass` en `src/index.css`

### Integración de formulario
Para activar el formulario de contacto:
1. Regístrate en [Formspree](https://formspree.io/) o [EmailJS](https://www.emailjs.com/)
2. Modifica la función `handleSubmit` en `Contact.jsx`
3. Agrega la lógica de envío según el servicio elegido

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Modo oscuro/claro con toggle
- ✅ Estética "liquid glass" tipo Apple
- ✅ Navegación suave por anclas
- ✅ Accesibilidad (ARIA labels, foco visible, semántica)
- ✅ Animaciones sutiles
- ✅ Optimizado para SEO
- ✅ Data-driven (proyectos y estudios editables)

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Vanilla CSS** - Efectos personalizados

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter (si está configurado)

---

¿Necesitas ayuda? Abre un issue o contacta al desarrollador.
