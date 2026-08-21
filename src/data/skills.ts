import type { SkillItem } from '../types'
import cssIcon from '../assets/icons/css3.svg'
import gitIcon from '../assets/icons/git.svg'
import htmlIcon from '../assets/icons/html5.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import jsonIcon from '../assets/icons/json.svg'
import nodeIcon from '../assets/icons/nodejs.svg'
import reactIcon from '../assets/icons/react.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import xmlIcon from '../assets/icons/xml.svg'

export const skills: SkillItem[] = [
  { name: 'React', icon: reactIcon, label: 'React' },
  { name: 'TypeScript', icon: typescriptIcon, label: 'TypeScript' },
  { name: 'JavaScript', icon: javascriptIcon, label: 'JavaScript' },
  { name: 'Node.js', icon: nodeIcon, label: 'Node.js' },
  { name: 'HTML5', icon: htmlIcon, label: 'HTML5' },
  { name: 'CSS3', icon: cssIcon, label: 'CSS3' },
  { name: 'Git', icon: gitIcon, label: 'Git' },
  { name: 'JSON', icon: jsonIcon, label: 'JSON' },
  { name: 'XML', icon: xmlIcon, label: 'XML' },
]
