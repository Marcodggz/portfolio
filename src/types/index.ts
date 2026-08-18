export interface ProjectData {
  title: string
  descriptionKey: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  technologies: string[]
  liveUrl?: string
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
