import type { Props as ExperienceProp } from '../components/experience/props'

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: 'Janvier 2022 — Present',
    title: 'Full Stack Engineer | Dart Developer',
    company: 'Mineral (Remote)',
    companyUrl: 'https://mineral-foundation.org',
    description:
        'As an Application Developer at Mineral, I specialize in building Discord bots using Dart. We leverage our custom Dart-based framework to create highly efficient, scalable, and innovative bots that enhance user interaction on Discord. My role involves designing, developing, and optimizing features tailored to meet specific community needs, while contributing to the evolution of our in-house framework.',
    technologies: [
      'Dart',
      'Discord API',
      'Discord Websockets'
    ],
    logo: '/logos/mineral.png'
  },
  {
    dates: 'February 2021 — July 2024',
    title: 'Full Stack Engineer | Java Developer',
    company: 'Conodia',
    companyUrl: 'https://conodia.fr',
    description:
'As a developer on the Conodia project, I built a RESTful web API with a WebSocket connection that seamlessly linked Minecraft to Discord bots. I developed all the custom Minecraft plugins from scratch. At launch, the server had over 95 players connected. This integration enabled smooth interaction between the game and Discord, enhancing both gameplay and communication.',
    technologies: [
      'React JS',
      'PostgreSQL',
      'Adonis JS',
      'Java',
      'Spigot API',
      'Mineral',
    ],
    logo: '/logos/conodia.gif'
  },
]
