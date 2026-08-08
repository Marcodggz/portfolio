import type { ProjectData } from '../types'
import jammmingImage from '../assets/jammming-screenshot.png'
import portfolioImage from '../assets/portfolio-screenshot.png'
import bellokImage from '../assets/bellok.png'
import dayzImage from '../assets/DayZ.png'

export const projects: ProjectData[] = [
  {
    title: 'Jammming',
    description:
      'React playlist builder that lets users search tracks, create playlists, and save them to Spotify using the Spotify Web API and OAuth PKCE. Includes a demo mode so anyone can try the main flows without Spotify access.',
    image: jammmingImage,
    imageAlt: 'Screenshot of the Jammming app showing track search and an editable playlist',
    technologies: ['React', 'JavaScript', 'Spotify API', 'OAuth PKCE', 'CSS'],
    liveUrl: 'https://jammming-navy.vercel.app/',
    githubUrl: 'https://github.com/Marcodggz/jammming',
  },
  {
    title: 'Portfolio',
    description:
      'Personal portfolio built with React, TypeScript and CSS Modules. It showcases selected projects, responsive layouts, accessible contact flows, and a clean component-based structure.',
    image: portfolioImage,
    imageAlt: 'Screenshot of the Portfolio home page layout',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://tu-portfolio-url.vercel.app/', // Uncomment when deployed
    githubUrl: 'https://github.com/Marcodggz/portfolio',
  },
  {
    title: "Bellok's Killfeed",
    description:
      'Production-style Discord bot that transforms DayZ server logs into live kill notifications, persistent player statistics, leaderboards, and activity heatmaps. Built with strict TypeScript, automated testing, and defensive handling of external API failures.',
    image: bellokImage,
    imageAlt: "Bellok's Killfeed project placeholder",
    technologies: ['TypeScript','Node.js', 'Discord.js', 'Nitrado API'],
    githubUrl: 'https://github.com/Marcodggz/bellok-dayz-bot',
  },
  {
    title: 'DayZ Vanilla + Server',
    description:
      'Version-controlled DayZ server configuration for Livonia, managed through validated XML and JSON files. Includes custom loot, spawn and economy settings, rollback-friendly changes, and deployment to Nitrado.',
    image: dayzImage,
    imageAlt: 'DayZ Vanilla + Server project placeholder',
    technologies: ['XML', 'JSON', 'Nitrado'],
    githubUrl: 'https://github.com/Marcodggz/DayZ-Vanilla-Plus-Server',
  },
]
