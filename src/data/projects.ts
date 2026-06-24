import type { ProjectData } from '../types'
import soonImage from '../assets/soon.jpg'
import jammmingImage from '../assets/jammming-screenshot.png'

export const projects: ProjectData[] = [
  {
    title: 'Jammming',
    description:
      'React playlist builder that lets users search tracks, create playlists, and save them to Spotify using the Spotify Web API and OAuth PKCE. Includes a demo mode so anyone can try the main flows without Spotify access.',
    image: jammmingImage,
    imageAlt: 'Jammming app screenshot',
    technologies: ['React', 'JavaScript', 'Spotify API', 'OAuth PKCE', 'CSS'],
    liveUrl: 'https://jammming-navy.vercel.app/',
    githubUrl: 'https://github.com/Marcodggz/jammming',
  },
  {
    title: 'Coming soon',
    description: 'Project details will be added soon.',
    image: soonImage,
    imageAlt: 'Soon',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveUrl: 'https://blank.page',
    githubUrl: 'https://github.com/Marcodggz',
  },
  {
    title: 'Coming Soon',
    description: 'Project details will be added soon.',
    image: soonImage,
    imageAlt: 'Soon',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveUrl: 'https://blank.page',
    githubUrl: 'https://github.com/Marcodggz',
  },
]
