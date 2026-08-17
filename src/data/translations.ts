export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    layout: {
      skipToMainContent: 'Skip to main content',
    },
    home: {
      aboutHeading: 'About',
      aboutText:
        'Software Engineer focused on writing clean, high-performance code and building reliable digital products. I care about technical quality, product thinking, system efficiency, edge cases, and maintainability. Driven by continuous learning, agile workflows, and shipping well-tested software.',
      aboutTextTablet:
        'Focused on writing clean, high-performance code and building reliable digital products. I care about technical quality, product thinking, system efficiency, edge cases, and maintainability. Driven by continuous learning, agile workflows, and shipping well-tested software.',
      softwareEngineer: 'Software Engineer',
      technologiesHeading: 'Technologies I work with',
      vision: '"Envision it. Build it."',
      certificationsHeading: 'Courses & Learning',
      inProgress: 'In progress',
    },
    projects: {
      heading: 'Projects',
      live: 'Live',
      github: 'GitHub',
      scroll: 'scroll',
      scrollTo: 'Scroll to',
      viewLiveProject: 'View {{title}} live project',
      viewGitHub: 'View {{title}} GitHub repository',
      // Individual project descriptions
      jammmingDescription:
        'React playlist builder that lets users search tracks, create playlists, and save them to Spotify using the Spotify Web API and OAuth PKCE. Includes a demo mode so anyone can try the main flows without Spotify access.',
      portfolioDescription:
        'Personal portfolio built with React, TypeScript, and CSS Modules, focused on responsive design, accessibility, and maintainable component architecture. It showcases selected projects through a clean, adaptive interface with semantic structure, keyboard-friendly interactions, and layouts designed to stay consistent across screen sizes.',
      bellokDescription:
        'Discord bot for DayZ servers that processes game logs in real time to generate structured killfeeds, persistent player statistics, leaderboards, and activity heatmaps. Built with strict TypeScript and integrated with Discord and the Nitrado API, with automated testing and a modular architecture designed for reliable event processing, maintainability, and resilience to external service failures.',
      dayzDescription:
        'Custom DayZ server for Livonia, with version-controlled XML and JSON configuration and an automated validation workflow using Shell and Python. Includes custom loot, spawn and economy settings, reversible changes, deployment to Nitrado, and validation checks run through GitHub Actions before changes are integrated.',
    },
    contact: {
      heading: 'Contact',
      githubProfileHeading: 'Github Profile',
      formHeading: 'Let\'s talk',
      formSubtitle: 'You can reach me directly through this form.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Enter your message here',
      sendButton: 'Send Message',
      sendingButton: 'Sending...',
      sentButton: 'Message sent',
      errorButton: 'Try again',
      successMessage: 'Message sent successfully.',
      errorMessage: 'Something went wrong. Please try again.',
      // Validation messages
      nameRequired: 'Name is required.',
      nameMinLength: 'Name must be at least 2 characters.',
      nameMaxLength: 'Name must be less than 100 characters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Message is required.',
      messageMinLength: 'Message must be at least 10 characters.',
      messageMaxLength: 'Message must be less than 500 characters.',
      // Aria labels
      linkedinAriaLabel: 'Open LinkedIn profile',
      githubAriaLabel: 'Open GitHub profile',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    layout: {
      skipToMainContent: 'Ir al contenido principal',
    },
    home: {
      aboutHeading: 'Sobre mí',
      aboutText:
        'Desarrollador de Software centrado en crear productos digitales sólidos, con código limpio y de alto rendimiento. Valoro la calidad técnica, la visión de producto, la eficiencia, los edge cases y la mantenibilidad. Me motiva seguir aprendiendo, trabajar con metodologías ágiles y desarrollar software fiable y bien testeado.',
      aboutTextTablet:
        'Centrado en crear productos digitales sólidos, con código limpio y de alto rendimiento. Valoro la calidad técnica, la visión de producto, la eficiencia, los edge cases y la mantenibilidad. Me motiva seguir aprendiendo, trabajar con metodologías ágiles y desarrollar software fiable y bien testeado.',
      softwareEngineer: 'Desarrollador de Software',
      technologiesHeading: 'Tecnologías con las que trabajo',
      vision: '"Imagínalo. Créalo."',
      certificationsHeading: 'Cursos y Formación',
      inProgress: 'En curso',
    },
    projects: {
      heading: 'Proyectos',
      live: 'Ver',
      github: 'GitHub',
      scroll: 'Desliza',
      scrollTo: 'Desliza hasta',
      viewLiveProject: 'Ver proyecto en vivo: {{title}}',
      viewGitHub: 'Ver repositorio en GitHub: {{title}}',
      // Individual project descriptions
      jammmingDescription:
        'Aplicación en React para crear y gestionar playlists de Spotify, con búsqueda de canciones, organización de listas y guardado mediante la Spotify Web API y OAuth PKCE. Incluye modo demo para probar funciones sin iniciar sesión con Spotify.',
      portfolioDescription:
        'Portfolio personal desarrollado con React, TypeScript y CSS Modules, centrado en el diseño responsive, la accesibilidad y una arquitectura de componentes fácil de mantener. Presenta una selección de proyectos mediante una interfaz limpia y adaptable, con estructura semántica, interacciones optimizadas para teclado y layouts diseñados para mantener su coherencia en cualquier tamaño de pantalla.',
      bellokDescription:
        'Bot de Discord para servidores de DayZ que procesa logs del juego en tiempo real para generar killfeeds estructurados, estadísticas persistentes de jugadores, tablas de clasificación y mapas de calor de actividad. Desarrollado con TypeScript estricto e integrado con Discord y la API de Nitrado, incorpora testing automatizado y una arquitectura modular diseñada para procesar eventos de forma fiable, facilitar el mantenimiento y resistir fallos de servicios externos.',
      dayzDescription:
        'Servidor DayZ personalizado para Livonia, con configuración versionada en XML y JSON y un flujo de validación automatizado con Shell y Python. Incluye ajustes de loot, spawns y economía, cambios reversibles y despliegue en Nitrado, con validaciones ejecutadas también en GitHub Actions antes de integrar cambios.',
    },
    contact: {
      heading: 'Contacto',
      githubProfileHeading: 'Perfil de Github',
      formHeading: '¿Hablamos?',
      formSubtitle: 'Puedes escribirme directamente desde este formulario.',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Escribe tu mensaje aquí',
      sendButton: 'Enviar mensaje',
      sendingButton: 'Enviando...',
      sentButton: 'Mensaje enviado',
      errorButton: 'Reintentar',
      successMessage: 'Mensaje enviado correctamente.',
      errorMessage: 'Algo ha fallado. Por favor, inténtalo de nuevo.',
      // Validation messages
      nameRequired: 'El nombre es obligatorio.',
      nameMinLength: 'El nombre debe tener al menos 2 caracteres.',
      nameMaxLength: 'El nombre debe tener menos de 100 caracteres.',
      emailRequired: 'El email es obligatorio.',
      emailInvalid: 'Por favor, introduce un email válido.',
      messageRequired: 'El mensaje es obligatorio.',
      messageMinLength: 'El mensaje debe tener al menos 10 caracteres.',
      messageMaxLength: 'El mensaje debe tener menos de 500 caracteres.',
      // Aria labels
      linkedinAriaLabel: 'Abrir perfil de LinkedIn',
      githubAriaLabel: 'Abrir perfil de GitHub',
    },
  },
} as const;

// Type helpers for type-safe translation keys
export type TranslationKey = typeof translations.en;
export type Language = keyof typeof translations;

// Helper function to get nested translation value with simple {{variable}} replacement
export function getTranslation(
  language: Language,
  path: string,
  replacements?: Record<string, string>
): string {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[language];

  for (const key of keys) {
    if (value && typeof value === 'object') {
      value = value[key];
    } else {
      return path; // Return the path if not found
    }
  }

  if (typeof value !== 'string') {
    return path;
  }

  // Replace {{variable}} patterns
  if (replacements) {
    return Object.entries(replacements).reduce(
      (text, [key, val]) => text.replace(new RegExp(`{{${key}}}`, 'g'), val),
      value
    );
  }

  return value;
}
