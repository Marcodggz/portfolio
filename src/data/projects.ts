import type { ProjectData } from '../types'
import jammmingImage from '../assets/jammming-screenshot.webp'
import portfolioImage from '../assets/portfolio-screenshot.webp'
import bellokImage from '../assets/bellok.webp'
import dayzImage from '../assets/DayZ.webp'

export const projects: ProjectData[] = [
  {
    title: "Bellok's Killfeed",
    descriptionKey: 'bellokDescription',
    image: bellokImage,
    imageWidth: 1200,
    imageHeight: 900,
    imageAlt: "Screenshot of Bellok's Killfeed project showing a Discord killfeed interface",
    technologies: ['TypeScript','Node.js', 'Discord.js', 'Nitrado API', 'GitHub Actions'],
    githubUrl: 'https://github.com/Marcodggz/bellok-dayz-bot',
  },
  {
    title: 'Jammming',
    descriptionKey: 'jammmingDescription',
    image: jammmingImage,
    imageWidth: 1200,
    imageHeight: 658,
    imageAlt: 'Screenshot of the Jammming app showing track search and an editable playlist',
    technologies: ['React', 'JavaScript', 'Spotify API', 'OAuth PKCE', 'CSS'],
    liveUrl: 'https://jammming-navy.vercel.app/',
    githubUrl: 'https://github.com/Marcodggz/jammming',
  },
  {
    title: 'DayZ Vanilla+ Server',
    descriptionKey: 'dayzDescription',
    image: dayzImage,
    imageWidth: 1200,
    imageHeight: 800,
    imageAlt: 'Screenshot of the DayZ Vanilla+ Server project showing its custom server configuration',
    technologies: ['XML', 'JSON', 'Python', 'Shell', 'GitHub Actions'],
    githubUrl: 'https://github.com/Marcodggz/DayZ-Vanilla-Plus-Server',
  },
  {
    title: 'Portfolio',
    descriptionKey: 'portfolioDescription',
    image: portfolioImage,
    imageWidth: 1200,
    imageHeight: 840,
    imageAlt: 'Screenshot of the Portfolio home page layout',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://marcodggz.com/',
    githubUrl: 'https://github.com/Marcodggz/portfolio',
  },
]

// Start fetching project artwork before the user navigates to the projects page.
// The assets are small and this removes the first-visit image flash.
if (typeof window !== 'undefined') {
  const preload = new Image()
  preload.decoding = 'async'
  preload.src = projects[0].image
}
