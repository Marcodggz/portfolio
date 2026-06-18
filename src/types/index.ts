export interface ProjectData {
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export interface SkillItem {
  name: string
  iconClass: string
  label: string
}

export interface Certification {
  name: string
  issuer: string
  inProgress?: boolean
}
