// experience/experienceData.js

// Experience data
export const experienceData = [
  {
    company: 'ASSURAF INC.',
    role: 'Ingénieur Full Stack',
    project: 'Assuraf, Assur\'Agent',
    duration: '05/2023 - Présent',
    description: [
      'Direction du développement des applications mobiles sur Android et iOS',
      'Mentorat de 2 développeurs juniors',
      'Optimisation de l\'interface (-25% du temps de navigation)',
      'Implémentation de notifications push avec Firebase',
      'Mise en place d\'architecture microservices (Node.js/Express) sur AWS (-20% de latence)',
      'Automatisation des pipelines CI/CD',
    ],
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express', 'AWS', 'Firebase', 'GitLab CI/CD', 'Riverpod'],
    logo: 'A',
    logoColor: '#3498db',
    logoBackground: 'rgba(52, 152, 219, 0.1)',
    achievements: [
      { text: 'Réduction de 25% du temps de navigation', icon: 'performance' },
      { text: 'Diminution de 20% de la latence', icon: 'server' },
      { text: 'Amélioration de l\'expérience utilisateur', icon: 'ux' },
    ]
  },
  {
    company: 'SBG AFRICA',
    role: 'Ingénieur Full Stack',
    project: 'WoyofPay',
    duration: '08/2022 - 05/2023',
    description: [
      'Lead technique - Sprint planning et gestion des priorités',
      'Développement d\'interfaces UX/UI (+25% d\'engagement)',
      'Développement de services web bancaires/mobile money',
      'Optimisation des performances backend et sécurité',
    ],
    technologies: ['Flutter', 'Dart', 'Floor', 'Riverpod', 'MVVM', 'Firebase', 'Tests Unitaires'],
    logo: 'S',
    logoColor: '#2ecc71',
    logoBackground: 'rgba(46, 204, 113, 0.1)',
    achievements: [
      { text: 'Augmentation de 25% de l\'engagement utilisateur', icon: 'engagement' },
      { text: 'Mise en place d\'une architecture MVVM robuste', icon: 'architecture' },
      { text: 'Amélioration de la sécurité des transactions', icon: 'security' },
    ]
  },
  {
    company: 'SBG AFRICA',
    role: 'Ingénieur Full Stack',
    project: 'Parrainel',
    duration: '08/2022 - 05/2023',
    description: [
      'Conception UX/UI avec Adobe XD',
      'Développement full-stack',
      'Création de tableaux de bord (+35% de précision des données)',
      'Direction des processus de test et déploiement (-10% de problèmes post-déploiement)',
    ],
    technologies: ['PHP', 'HTML5', 'JavaScript', 'jQuery', 'CSS3', 'Bootstrap', 'MySQL'],
    logo: 'S',
    logoColor: '#2ecc71',
    logoBackground: 'rgba(46, 204, 113, 0.1)',
    achievements: [
      { text: 'Augmentation de 35% de la précision des données', icon: 'data' },
      { text: 'Réduction de 10% des problèmes post-déploiement', icon: 'bugfix' },
      { text: 'Interface intuitive pour l\'analyse de données', icon: 'analytics' },
    ]
  },
  {
    company: 'TÉRANGA BUSINESS SOLUTIONS',
    role: 'Développeur Android',
    project: 'Kliner',
    duration: '08/2021 - 08/2022',
    description: [
      'Développement d\'application mobile de services ménagers',
      'Réduction de 30% du cycle de développement',
      'Augmentation de 20% du taux d\'adoption',
      'Optimisation de l\'interface utilisateur',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'MVVM'],
    logo: 'T',
    logoColor: '#9b59b6',
    logoBackground: 'rgba(155, 89, 182, 0.1)',
    achievements: [
      { text: 'Réduction de 30% du cycle de développement', icon: 'agile' },
      { text: 'Augmentation de 20% du taux d\'adoption', icon: 'growth' },
      { text: 'Mise en place de l\'architecture MVVM', icon: 'architecture' },
    ]
  },
  {
    company: 'INNOV4AFRICA',
    role: 'Développeur Android Junior',
    project: 'I-pay, I-shop',
    duration: '12/2019 - 03/2020',
    description: [
      'Développement d\'applications mobiles pour les services de paiement (I-pay) et e-commerce (I-shop)',
      'Intégration de SOAP API pour des transactions sécurisées',
      'Amélioration de l\'interface pour une navigation intuitive',
      'Participation aux tests pour un déploiement rapide en mode Agile',
    ],
    technologies: ['Java', 'XML', 'SOAP API', 'SQLite', 'okHttp', 'GitHub', 'Trello'],
    logo: 'I',
    logoColor: '#e74c3c',
    logoBackground: 'rgba(231, 76, 60, 0.1)',
    achievements: [
      { text: 'Intégration réussie avec SOAP API', icon: 'api' },
      { text: 'Documentation complète du processus', icon: 'documentation' },
      { text: 'Interface utilisateur intuitive', icon: 'ux' },
    ]
  },
];

// Group experiences by company for the tab view
export const companiesWithExperiences = experienceData.reduce((acc, exp) => {
  if (!acc[exp.company]) {
    acc[exp.company] = [];
  }
  acc[exp.company].push(exp);
  return acc;
}, {});

export const companyTabs = Object.keys(companiesWithExperiences);
