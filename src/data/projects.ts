// src/data/projects.ts

interface Project {
  id: string;
  category: 'human-pose-recognition' | 'networks' | 'cell-tracking' | 'galaxies';
  // category: 'human-pose-recognition' | 'networks' | 'cell-tracking' | 'haplotype-assembly' | 'galaxies' | 'classifiers-pvalues' | 'other';
  name: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

const projects: Project[] = [

  // Network analysis tools
  {
    id: 'global network alignment', // sana
    category: 'networks',
    name: 'Global Network Alignment (SANA)',
    imageUrl: '/assets/SANA.gif',
    description: 'The Simulating Annealing Network Aligner (SANA) is designed originally to align protein-protein interaction (PPI) networks, but now is able to align arbitrary undirected graphs, weighted on unweighted. It can produce near-optimal alignments of PPI-sized networks in about an hour, and it has been used to successfully align networks with up to 100,000 nodes and 100 million edges (though those alignments take about a week of CPU to complete).',
    projectUrl: '/sana', // Placeholder link
  },
  {
    id: 'local network alignment', // blant
    category: 'networks',
    name: 'Local Network Alignment (BLANT)',
    imageUrl: '/assets/blant.jpeg',
    description: 'Basic Local Alignment of Network Topology - fast, unbiased statistical graphlet sampling for any graphlet use.',
    projectUrl: 'https://hayeslab.ics.uci.edu/blant', // Placeholder link
  },
  // {
  //   id: 'link prediction', //blant
  //   category: 'networks',
  //   name: 'Link Prediction',
  //   imageUrl: '',
  //   description: '',
  //   projectUrl: '', // Placeholder link
  // },
  // {
  //   id: 'community detection', //blant
  //   category: 'networks',
  //   name: 'Community Detection',
  //   imageUrl: '',
  //   description: '',
  //   projectUrl: '', // Placeholder link
  // },

  // Cell tracking
  {
    id: 'cell-universe',
    category: 'cell-tracking',
    name: 'Cell Universe',
    imageUrl: '/assets/cell-tracking.gif',
    description: 'Tracks the movement of cells from a video source. See the docs directory for our first published paper, also found at https://www.mbp.com/1999-4803/16/251. The Python directory once worked well in 2D, with bacteria-shaped cells. The 3D Python code was experimental, but was abandoned after the complexity time it elapsed working due to Python\'s inherent scalability, at which point we moved to C++.',
    projectUrl: 'https://github.com/waynebhayes/CellUniverse',
  },

  // Human Pose Recognition
  {
    id: 'pose prediction',
    category: 'human-pose-recognition',
    name: 'Pose Prediction',
    imageUrl: '../public/assets/pose-sample.png',
    description: 'Estimating a person\'s \"pose\" (ie., the relative location of their limbs represented as a "skeleton") from a 2D image has many applications and is an active research area. There are many distinct data sets: each uses a different camera, different people, and in a different location; there are even slighly different skeletal representations between datasets. In this project we have a preliminary working method that works across datasets; our problem is testing it across the largest set of possible input datasets, due to the above differences between datasets. ',
    projectUrl: '', // Placeholder link
  },
  // {
  //   id: 'posebench3D',
  //   category: 'human-pose-recognition',
  //   name: 'PoseBench3D',
  //   imageUrl: '',
  //   description: '',
  //   projectUrl: '', // Placeholder link
  // },
  // {
  //   id: 'part segmentation',
  //   category: 'human-pose-recognition',
  //   name: 'Part Segmentation',
  //   imageUrl: '',
  //   description: '',
  //   projectUrl: '', // Placeholder link
  // },
  // {
  //   id: 'unrealpose dataset',
  //   category: 'human-pose-recognition',
  //   name: 'UnrealPose Dataset',
  //   imageUrl: '',
  //   description: '',l
  //   projectUrl: '', // Placeholder link
  // },

  // Haplotype Assembly
  // {
  //   id: 'sahap',
  //   category: 'haplotype-assembly',
  //   name: 'SAHap',
  //   imageUrl: '',
  //   description: 'Description for SAHap goes here.',
  //   projectUrl: 'https://github.com/waynebhayes/SAHap',
  // },

  // Galaxy Analysis
  {
    id: 'sparcfire',
    category: 'galaxies',
    name: 'SpArcFiRe',
    imageUrl: '/assets/sparcfire.jpg',
    description: 'Given an approximately centered image of a spiral galaxy, this tool finds, centers, and sizes \
            the galaxy and then automatically extracts structural information about the spiral arms. For each arm segment found, we list the pixels in that segment, allowing image analysis on a per-arm-segment basis. ',
    projectUrl: 'https://sparcfire.ics.uci.edu',
  },

  // classifiers-pvalues
  // {
  //   id: 'pidentify',
  //   category: 'classifiers-pvalues',
  //   name: 'Classifiers with p-values',
  //   imageUrl: '',
  //   description: 'Description for Pidentify goes here.',
  //   projectUrl: 'https://github.com/waynebhayes/Pidentify',
  // },
  // {
  //   id: 'gowild',
  //   category: 'other',
  //   name: 'GoWild',
  //   imageUrl: '',
  //   description: 'Description for GoWild goes here.',
  //   projectUrl: 'https://github.com/waynebhayes/GoWild',
  // },
  // {
  //   id: 'netgo',
  //   category: 'other',
  //   name: 'NetGO',
  //   imageUrl: '',
  //   description: 'Description for NetGO goes here.',
  //   projectUrl: 'https://github.com/waynebhayes/NetGO',
  // },
  // {
  //   id: 'adaptable-sigmoids',
  //   category: 'other',
  //   name: 'Adaptable-Sigmoids',
  //   imageUrl: '',
  //   description: 'Description for Adaptable-Sigmoids goes here.',
  //   projectUrl: 'https://github.com/waynebhayes/Adaptable-Sigmoids',
  // },
];

export default projects;