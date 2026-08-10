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
      softwareEngineer: 'Software Engineer',
      technologiesHeading: 'Technologies I have worked with',
      vision: '"Envision it. Build it."',
      certificationsHeading: 'Courses & Certifications',
      inProgress: 'In progress',
    },
    projects: {
      heading: 'Projects',
      live: 'Live',
      github: 'GitHub',
      viewLiveProject: 'View {{title}} live project',
      viewGitHub: 'View {{title}} GitHub repository',
      // Individual project descriptions
      jammmingDescription:
        'React playlist builder that lets users search tracks, create playlists, and save them to Spotify using the Spotify Web API and OAuth PKCE. Includes a demo mode so anyone can try the main flows without Spotify access.',
      portfolioDescription:
        'Personal portfolio built with React, TypeScript and CSS Modules. It showcases selected projects, responsive layouts, accessible contact flows, and a clean component-based structure.',
      bellokDescription:
        'Production-style Discord bot that transforms DayZ server logs into live kill notifications, persistent player statistics, leaderboards, and activity heatmaps. Built with strict TypeScript, automated testing, and defensive handling of external API failures.',
      dayzDescription:
        'Version-controlled DayZ server configuration for Livonia, managed through validated XML and JSON files. Includes custom loot, spawn and economy settings, rollback-friendly changes, and deployment to Nitrado.',
    },
    contact: {
      heading: 'Contact',
      githubProfileHeading: 'Github Profile',
      githubProfileText: 'Find more of my repositories',
      formHeading: 'Contact with me',
      formSubtitle: 'You can also get in touch with me through this form below.',
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
        'Desarrollador de Software enfocado en escribir código limpio y de alto rendimiento para construir productos digitales confiables. Me preocupo por la calidad técnica, la visión de producto, la eficiencia del sistema, los casos extremos y la mantenibilidad. Impulsado por el aprendizaje continuo, metodologías ágiles y entregar software bien probado.',
      softwareEngineer: 'Desarrollador de Software',
      technologiesHeading: 'Tecnologías con las que trabajo',
      vision: '"Imagínalo. Constrúyelo."',
      certificationsHeading: 'Cursos y Certificaciones',
      inProgress: 'En curso',
    },
    projects: {
      heading: 'Proyectos',
      live: 'Ver',
      github: 'GitHub',
      viewLiveProject: 'Ver proyecto en vivo: {{title}}',
      viewGitHub: 'Ver repositorio en GitHub: {{title}}',
      // Individual project descriptions
      jammmingDescription:
        'Aplicación React para crear listas de reproducción que permite buscar canciones, organizar listas y guardarlas en Spotify mediante la API Web de Spotify y OAuth PKCE. Incluye un modo demo para que cualquiera pueda probar las funciones principales sin necesidad de acceso a Spotify.',
      portfolioDescription:
        'Portfolio personal desarrollado con React, TypeScript y CSS Modules. Muestra proyectos seleccionados, diseños responsivos, flujos de contacto accesibles y una estructura limpia basada en componentes.',
      bellokDescription:
        'Bot de Discord de nivel producción que transforma los logs del servidor DayZ en notificaciones de bajas en tiempo real, estadísticas persistentes de jugadores, clasificaciones y mapas de calor de actividad. Desarrollado con TypeScript estricto, testing automatizado y manejo defensivo de fallos en APIs externas.',
      dayzDescription:
        'Configuración versionada de servidor DayZ para Livonia, gestionada mediante archivos XML y JSON validados. Incluye configuración personalizada de loot, spawns y economía, cambios reversibles y despliegue en Nitrado.',
    },
    contact: {
      heading: 'Contacto',
      githubProfileHeading: 'Perfil de Github',
      githubProfileText: 'Descubre más repositorios',
      formHeading: 'Escríbeme',
      formSubtitle: 'También puedes contactar conmigo a través de este formulario.',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Escribe tu nombre',
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
