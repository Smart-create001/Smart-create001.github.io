export type ProjectStatus = 'CONCEPT' | 'PROTOTYPE / TESTED' | 'TESTING' | 'DEPLOYED' | 'ITERATING';

export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  status: ProjectStatus;
  problem: string;
  contribution: string[];
  result: string;
  stack: string[];
  visualType: 'irrigation' | 'robotics' | 'vision';
  evidence: string;
  visualLabel: string;
  summary: string;
  role: string;
  objective: string;
  system: { label: string; detail: string }[];
  decisions: { title: string; detail: string }[];
  evidenceItems: { claim: string; support: string; strength: 'OBSERVED' | 'TESTED' | 'USED IN BUILD' }[];
  lessons: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    id: 'smart-irrigation',
    number: '01',
    category: 'AGRICULTURE × INDUSTRIAL IoT',
    title: 'Industrial Smart Irrigation System',
    status: 'DEPLOYED',
    problem: 'Reducing manual irrigation control while enabling remote monitoring and automation.',
    contribution: ['Embedded Systems', 'Sensors', 'Control', 'IoT Dashboard'],
    result: 'A working control and monitoring build was deployed. Quantitative field impact has not yet been published.',
    stack: ['ESP32', 'MQTT', 'Industrial Sensors', 'Automation'],
    visualType: 'irrigation',
    evidence: 'USED IN A REAL BUILD',
    visualLabel: 'REAL BUILD',
    summary: 'A connected irrigation control build combining embedded control, industrial sensing and a remote monitoring layer.',
    role: 'Embedded systems, sensing, control logic and dashboard integration.',
    objective: 'Create a practical path from manual irrigation control toward monitored, repeatable automation without overstating field impact.',
    system: [
      { label: 'INPUT', detail: 'Industrial sensors and operator commands' },
      { label: 'CONTROL', detail: 'ESP32 control logic and actuator handling' },
      { label: 'NETWORK', detail: 'MQTT telemetry and remote status' },
      { label: 'OUTPUT', detail: 'Irrigation control and monitoring dashboard' }
    ],
    decisions: [
      { title: 'Separate control from display', detail: 'The irrigation system should keep its control responsibilities clear even when the dashboard is unavailable.' },
      { title: 'Treat connectivity as a layer', detail: 'Remote monitoring supports the build; it is not presented as proof of agricultural impact.' },
      { title: 'Design for replacement evidence', detail: 'The interface reserves large areas for real field photos, wiring views and future test logs.' }
    ],
    evidenceItems: [
      { claim: 'A physical control build exists.', support: 'Project is labeled as a real build and deployed system.', strength: 'USED IN BUILD' },
      { claim: 'Remote monitoring was integrated.', support: 'MQTT and dashboard integration are part of the documented contribution.', strength: 'USED IN BUILD' },
      { claim: 'The system reduces labor.', support: 'Not yet supported by published field measurement.', strength: 'OBSERVED' }
    ],
    lessons: [
      'A useful control system needs clear behavior when connectivity is interrupted.',
      'Field value should be measured separately from whether the electronics function.',
      'Operator workflow belongs in the engineering requirements, not as an afterthought.'
    ],
    nextSteps: ['Add verified field photographs and wiring evidence.', 'Document operating limits and failure states.', 'Measure field workflow before making labor-impact claims.']
  },
  {
    id: 'rescue-robotics',
    number: '02',
    category: 'ROBOTICS × MECHANICAL × CONTROL',
    title: 'Combat / Rescue Robotics',
    status: 'PROTOTYPE / TESTED',
    problem: 'Building robust mobile robotic systems for demanding competition environments.',
    contribution: ['Mechanical Fabrication', 'Motor Control', 'Integration', 'Testing'],
    result: 'Physical prototypes were assembled and tested; observations informed the next mechanical and control iteration.',
    stack: ['Robotics', 'Fabrication', 'Motor Drivers', 'Mechanical Systems'],
    visualType: 'robotics',
    evidence: 'PHYSICAL PROTOTYPE',
    visualLabel: 'REAL BUILD / PROTOTYPE',
    summary: 'A physical mobile robotics platform used to learn mechanical fabrication, motor control, integration and testing under demanding conditions.',
    role: 'Mechanical fabrication, motor control, subsystem integration and physical testing.',
    objective: 'Build a robust mobile platform, expose real integration problems and use test evidence to guide the next iteration.',
    system: [
      { label: 'STRUCTURE', detail: 'Fabricated chassis and mechanical assembly' },
      { label: 'DRIVE', detail: 'Motors, drivers and power delivery' },
      { label: 'CONTROL', detail: 'Operator input and motor response' },
      { label: 'TEST', detail: 'Physical trials and iteration notes' }
    ],
    decisions: [
      { title: 'Build for access', detail: 'The prototype should allow fast inspection and adjustment during testing.' },
      { title: 'Use failure as a signal', detail: 'Thermal and loading problems become explicit questions for the next build.' },
      { title: 'Keep prototype claims bounded', detail: 'Physical testing is evidence of a working prototype, not evidence of field readiness.' }
    ],
    evidenceItems: [
      { claim: 'A physical mobile robot was assembled.', support: 'Mechanical fabrication and integration are documented project contributions.', strength: 'USED IN BUILD' },
      { claim: 'The drive system was tested.', support: 'Motor-control behavior was observed during physical trials.', strength: 'TESTED' },
      { claim: 'The platform is field-ready.', support: 'No field-readiness validation is claimed.', strength: 'OBSERVED' }
    ],
    lessons: [
      'Mechanical access and serviceability matter during rapid iteration.',
      'Motor loading, driver selection and thermal behavior must be considered together.',
      'Integration quality is often limited by interfaces between disciplines.'
    ],
    nextSteps: ['Complete Prototype V0.4 thermal adjustments.', 'Create a repeatable motor-load test.', 'Document chassis revisions with real build evidence.']
  },
  {
    id: 'book-detector',
    number: '03',
    category: 'SOFTWARE × AI × VISION',
    title: 'AI Computer Vision Book Detector',
    status: 'TESTING',
    problem: 'Exploring machine perception through a working object-detection pipeline.',
    contribution: ['Dataset Preparation', 'Model Testing', 'Computer Vision Pipeline'],
    result: 'The pipeline can be tested on sample inputs. Accuracy is intentionally not claimed without a validated evaluation set.',
    stack: ['Python', 'Computer Vision', 'Object Detection'],
    visualType: 'vision',
    evidence: 'TESTED IN SOFTWARE',
    visualLabel: 'SOFTWARE TEST',
    summary: 'An early computer-vision pipeline exploring dataset preparation, object detection and honest evaluation boundaries.',
    role: 'Dataset preparation, model testing and computer-vision pipeline integration.',
    objective: 'Understand the complete perception workflow before claiming accuracy or production readiness.',
    system: [
      { label: 'INPUT', detail: 'Labeled image samples' },
      { label: 'MODEL', detail: 'Object-detection experiment' },
      { label: 'PIPELINE', detail: 'Python inference and result handling' },
      { label: 'REVIEW', detail: 'Visual inspection without invented metrics' }
    ],
    decisions: [
      { title: 'Show the evaluation gap', detail: 'The interface states clearly that no validated accuracy figure is available.' },
      { title: 'Treat data as engineering work', detail: 'Dataset preparation is documented as part of the project, not hidden behind the model.' },
      { title: 'Connect perception to future machines', detail: 'The experiment is positioned as a learning foundation for robotic sensing.' }
    ],
    evidenceItems: [
      { claim: 'The pipeline can run on sample inputs.', support: 'Software testing and detection output are documented.', strength: 'TESTED' },
      { claim: 'The workflow includes dataset preparation.', support: 'Dataset work is listed as a direct contribution.', strength: 'USED IN BUILD' },
      { claim: 'The detector has production-grade accuracy.', support: 'No validated evaluation set or accuracy metric is claimed.', strength: 'OBSERVED' }
    ],
    lessons: [
      'A visible detection result is not the same as a validated model.',
      'Dataset quality and test design determine whether an accuracy claim is meaningful.',
      'Perception experiments are most useful when connected to a physical system question.'
    ],
    nextSteps: ['Define a separate evaluation set.', 'Document failure examples and edge cases.', 'Test how the pipeline behaves under changing light and camera position.']
  }
];

export const subsystems = [
  { id: 'mechanical', label: 'MECHANICAL', tech: ['CNC', 'Welding', 'Fabrication', 'Robotics'], x: 14, y: 18, line: 'm' },
  { id: 'electronics', label: 'ELECTRONICS', tech: ['PCB', 'ESP32', 'Sensors', 'Motor Drivers'], x: 78, y: 18, line: 'e' },
  { id: 'iot', label: 'IoT', tech: ['MQTT', 'Telemetry', 'Monitoring', 'Control'], x: 8, y: 52, line: 'i' },
  { id: 'software', label: 'SOFTWARE', tech: ['Python', 'C++', 'Web Systems', 'Data'], x: 82, y: 52, line: 's' },
  { id: 'vision', label: 'AI / VISION', tech: ['OpenCV', 'Datasets', 'Detection', 'Perception'], x: 18, y: 84, line: 'v' },
  { id: 'agriculture', label: 'AGRICULTURE', tech: ['Field Work', 'Farmers', 'Workflow', 'Adoption'], x: 76, y: 84, line: 'a' }
] as const;

export const capabilities = [
  {
    number: '01',
    title: 'MECHATRONICS',
    statement: 'From physical structure to moving machines.',
    items: ['Mechanical Fabrication', 'CNC', 'Lathe', 'Welding', 'Mechanical Assembly', 'Robotics'],
    evidence: [
      { name: 'Welding', detail: 'USED IN ROBOTICS / STRUCTURAL BUILD' },
      { name: 'Fabrication', detail: 'USED IN PHYSICAL PROTOTYPES' }
    ]
  },
  {
    number: '02',
    title: 'ELECTRONICS & INDUSTRIAL IoT',
    statement: 'Connecting machines, sensors and control systems.',
    items: ['PCB Design', 'ESP32', 'Industrial Sensors', 'Motor Drivers', 'MQTT', 'Monitoring Systems'],
    evidence: [
      { name: 'ESP32', detail: 'USED IN MULTIPLE BUILDS' },
      { name: 'MQTT', detail: 'USED IN SMART IRRIGATION' }
    ]
  },
  {
    number: '03',
    title: 'SOFTWARE, AI & COMPUTER VISION',
    statement: 'Giving machines perception, logic and intelligence.',
    items: ['Python', 'C++', 'OpenCV', 'Object Detection', 'Data', 'Web Systems'],
    evidence: [
      { name: 'OpenCV', detail: 'USED IN 1 PROJECT / EARLY EXPERIMENTS' },
      { name: 'Python', detail: 'USED IN VISION TESTING' }
    ]
  }
];

export const labStatus = [
  { kind: 'BUILDING', title: 'Autonomous Mobile Robot Platform', status: 'PROTOTYPING' },
  { kind: 'LEARNING', title: 'ROS2 / Navigation / Autonomous Systems', status: 'EXPLORING' },
  { kind: 'RESEARCHING', title: 'Agricultural Manipulation & Harvesting Robotics', status: 'RESEARCHING' }
];

export const activities = [
  { kind: 'LATEST BUILD', title: 'Motor Control Experiment', when: '3 DAYS AGO' },
  { kind: 'LATEST NOTE', title: 'Understanding Autonomous Navigation', when: '1 WEEK AGO' },
  { kind: 'LATEST FIELD QUESTION', title: 'Which agricultural tasks are actually worth automating?', when: 'OPEN QUESTION' }
];

export const processSteps = ['BUILD', 'GET STUCK', 'QUESTION', 'LEARN', 'EXPERIMENT', 'FIX', 'ITERATE'];

export const roadmap = [
  { title: 'BUILD RELIABLE MACHINES', note: 'Create structures and control systems that survive repeat testing.' },
  { title: 'SENSE THE ENVIRONMENT', note: 'Capture useful signals from crops, machines and field conditions.' },
  { title: 'CONNECT SYSTEMS', note: 'Move information between sensors, control logic and operators.' },
  { title: 'AUTONOMOUS OPERATION', note: 'Develop navigation and decision-making with clear operating limits.' },
  { title: 'PHYSICAL INTERACTION', note: 'Manipulate real objects safely in unpredictable environments.' },
  { title: 'FIELD-READY AGRI-ROBOTICS', note: 'Integrate capability around farmer workflow and real field constraints.' }
];

export const researchQuestions = [
  'Where does autonomy actually reduce farmer workload?',
  'Which agricultural tasks are worth automating first?',
  'How should robots adapt to unpredictable agricultural environments?'
];

export type KnowledgeEntry = {
  slug: string;
  type: string;
  title: string;
  status: string;
  evidence: string;
  source: string;
  interpretation: string;
  question: string;
  summary: string;
  observations: string[];
  nextAction: string;
  relatedProjects: string[];
};

export const knowledge: KnowledgeEntry[] = [
  {
    slug: 'farmer-workflow-before-automation',
    type: 'FIELD NOTE',
    title: 'Understanding farmer workflow before designing automation',
    status: 'OBSERVING',
    evidence: 'FIELD QUESTION',
    source: '',
    interpretation: '',
    question: 'Where does a farmer lose time, energy or attention before technology is introduced?',
    summary: 'A field-first note for mapping tasks, constraints and adoption friction before selecting a robotic solution.',
    observations: ['Start with the existing workflow.', 'Separate repeated physical work from occasional difficult work.', 'Ask what happens when the system fails or needs maintenance.'],
    nextAction: 'Create a structured field-observation sheet and validate it with real farmer conversations.',
    relatedProjects: ['smart-irrigation']
  },
  {
    slug: 'autonomous-navigation-learning-map',
    type: 'LEARNING NOTE',
    title: 'What I currently understand about autonomous navigation',
    status: 'LEARNING',
    evidence: 'EARLY EXPLORATION',
    source: '',
    interpretation: '',
    question: 'Which navigation capabilities are required before a mobile robot can operate safely in a useful environment?',
    summary: 'An early map of localization, perception, planning and control—kept explicitly separate from proven implementation.',
    observations: ['Navigation is a system, not a single algorithm.', 'Operating assumptions need to be visible.', 'Simulation evidence and physical test evidence should remain distinct.'],
    nextAction: 'Build a small ROS2 learning environment and document each assumption as it becomes testable.',
    relatedProjects: ['rescue-robotics']
  },
  {
    slug: 'motor-control-test-04',
    type: 'EXPERIMENT',
    title: 'Motor Control Test #04',
    status: 'TESTING',
    evidence: 'TESTED ONCE',
    source: '',
    interpretation: '',
    question: 'Why did the motor driver temperature increase beyond expected behavior?',
    summary: 'A single-run test log that turns an overheating observation into a more focused investigation.',
    observations: ['Thermal behavior increased under load.', 'A single run is not enough for a generalized conclusion.', 'Current draw, loading and cooling need to be checked together.'],
    nextAction: 'Repeat the test with controlled load, current measurement and a documented cooling configuration.',
    relatedProjects: ['rescue-robotics']
  },
  {
    slug: 'harvesting-robots-thai-farms',
    type: 'RESEARCH NOTE',
    title: 'Agricultural Harvesting Robots: What could apply to Thai farms?',
    status: 'EXPLORING',
    evidence: 'LITERATURE REVIEW',
    source: 'Harvesting robots combine perception, planning and compliant physical interaction.',
    interpretation: 'The useful question is not only whether a robot can harvest, but whether its workflow fits Thai field conditions.',
    question: 'Which parts of harvesting robotics transfer to Thai farm conditions, and which assumptions must be redesigned?',
    summary: 'A research framing note connecting global robotics capability with local workflow, crop and adoption constraints.',
    observations: ['Technical capability does not guarantee workflow fit.', 'Environmental unpredictability changes the manipulation problem.', 'Maintenance and operator experience shape adoption.'],
    nextAction: 'Compare one crop workflow against specific perception and manipulation requirements.',
    relatedProjects: ['book-detector', 'rescue-robotics']
  }
];

export const labExperiments = [
  { id: 'EXP-004', title: 'Motor Control Load Test', state: 'RETEST PLANNED', evidence: 'TESTED ONCE', signal: 'THERMAL' },
  { id: 'EXP-005', title: 'ROS2 Navigation Learning Map', state: 'EXPLORING', evidence: 'EARLY NOTE', signal: 'AUTONOMY' },
  { id: 'EXP-006', title: 'Field Workflow Interview Frame', state: 'PREPARING', evidence: 'QUESTION', signal: 'AGRICULTURE' }
];

export const trail = [
  'Motor Overheating',
  'Current Draw Question',
  'Motor Driver Note',
  'Cooling Experiment',
  'Prototype V0.4'
];
