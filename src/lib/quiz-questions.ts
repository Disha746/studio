export type Question = {
  id: number;
  text: string;
  type: 'likert' | 'mcq' | 'mcq-multi' | 'textarea';
  options?: {
    value: string;
    label: string;
    scores: {
      softwareDeveloper: number;
      interiorDesigner: number;
      graphicDesigner: number;
      doctor: number;
      dataScientist: number;
      contentCreator: number;
      productManager: number;
      athlete: number;
      charteredAccountant: number;
      civilServant: number;
    };
  }[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'When faced with a complex problem, I prefer:',
    type: 'mcq',
    options: [
      {
        value: 'logical_deduction',
        label: 'Technical challenges requiring logical deduction and precise solutions',
        scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 1, doctor: 1, dataScientist: 2, contentCreator: 0, productManager: 2, athlete: 1, charteredAccountant: 2, civilServant: 1 },
      },
      {
        value: 'data_interpretation',
        label: 'Analytical challenges that involve interpreting data and identifying patterns',
        scores: { softwareDeveloper: 2, interiorDesigner: 1, graphicDesigner: 1, doctor: 2, dataScientist: 3, contentCreator: 1, productManager: 3, athlete: 1, charteredAccountant: 3, civilServant: 2 },
      },
      {
        value: 'creative_ideation',
        label: 'Creative challenges that require brainstorming and novel ideas',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 2, athlete: 1, charteredAccountant: 0, civilServant: 1 },
      },
      {
        value: 'interpersonal_dynamics',
        label: 'Interpersonal challenges that involve negotiation and understanding different viewpoints',
        scores: { softwareDeveloper: 0, interiorDesigner: 2, graphicDesigner: 1, doctor: 3, dataScientist: 1, contentCreator: 2, productManager: 3, athlete: 2, charteredAccountant: 1, civilServant: 3 },
      },
       {
        value: 'physical_challenge',
        label: 'Physical challenges that test my endurance, strength, and coordination',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 3, charteredAccountant: 0, civilServant: 1 },
      },
      {
        value: 'structured_process',
        label: 'Challenges that require a systematic, rule-based approach and attention to detail',
        scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 0, doctor: 2, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 3, civilServant: 3 },
      }
    ],
  },
  {
    id: 2,
    text: 'Which of the following work activities sounds most appealing to you? (Choose up to 2)',
    type: 'mcq-multi',
    options: [
      {
        value: 'coding',
        label: 'Coding/building digital solutions',
        scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 2, contentCreator: 1, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 0 },
      },
      {
        value: 'troubleshooting',
        label: 'Troubleshooting and fixing complex technical issues',
        scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 1, charteredAccountant: 1, civilServant: 1 },
      },
      {
        value: 'analyzing_data',
        label: 'Analyzing data and creating reports',
        scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 3, contentCreator: 2, productManager: 3, athlete: 1, charteredAccountant: 3, civilServant: 2 },
      },
      {
        value: 'designing_visuals',
        label: 'Designing visuals and user interfaces',
        scores: { softwareDeveloper: 1, interiorDesigner: 3, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 2, athlete: 0, charteredAccountant: 0, civilServant: 0 },
      },
      {
        value: 'physical_training',
        label: 'Engaging in rigorous physical training and practice drills',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 3, charteredAccountant: 0, civilServant: 0 },
      },
      {
        value: 'auditing_compliance',
        label: 'Auditing records and ensuring regulatory compliance',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 3, civilServant: 2 },
      },
      {
        value: 'public_policy',
        label: 'Developing public policy and working on social welfare initiatives',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 1, contentCreator: 1, productManager: 1, athlete: 0, charteredAccountant: 1, civilServant: 3 },
      }
    ],
  },
  {
    id: 3,
    text: 'I am most motivated by the opportunity to:',
    type: 'mcq',
    options: [
      {
        value: 'innovate',
        label: 'Innovate and push technological boundaries',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 2, contentCreator: 2, productManager: 3, athlete: 1, charteredAccountant: 0, civilServant: 1 },
      },
      {
        value: 'efficiency',
        label: 'Make processes more efficient and effective',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 1, doctor: 1, dataScientist: 3, contentCreator: 1, productManager: 3, athlete: 1, charteredAccountant: 2, civilServant: 2 },
      },
      {
        value: 'expression',
        label: 'Express myself creatively',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 1, athlete: 1, charteredAccountant: 0, civilServant: 0 },
      },
      {
        value: 'help_others',
        label: 'Help others and improve their well-being',
        scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 0, doctor: 3, dataScientist: 1, contentCreator: 2, productManager: 2, athlete: 2, charteredAccountant: 1, civilServant: 3 },
      },
       {
        value: 'compete_win',
        label: 'Compete at the highest level and win',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 3, charteredAccountant: 1, civilServant: 0 },
      },
      {
        value: 'provide_expertise',
        label: 'Provide expert financial advice and ensure accuracy',
        scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 0, doctor: 1, dataScientist: 2, contentCreator: 0, productManager: 2, athlete: 0, charteredAccountant: 3, civilServant: 1 },
      },
      {
        value: 'serve_nation',
        label: 'Serve the nation and contribute to its governance',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 1, charteredAccountant: 1, civilServant: 3 },
      }
    ],
  },
  {
    id: 4,
    text: 'How comfortable are you with abstract concepts and logical systems?',
    type: 'mcq',
    options: [
      {
        value: 'very_comfortable',
        label: 'I enjoy working with abstract ideas and creating logical frameworks.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 3, contentCreator: 1, productManager: 3, athlete: 1, charteredAccountant: 2, civilServant: 2 },
      },
      {
        value: 'comfortable_with_examples',
        label: 'I can grasp abstract concepts when explained clearly, especially with examples.',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 2, athlete: 2, charteredAccountant: 2, civilServant: 2 },
      },
      {
        value: 'prefer_concrete',
        label: 'I prefer concrete, hands-on tasks and find abstract concepts challenging.',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 2, doctor: 1, dataScientist: 0, contentCreator: 2, productManager: 1, athlete: 3, charteredAccountant: 1, civilServant: 1 },
      },
      {
        value: 'motivated_by_complexity',
        label: 'I am motivated by understanding how complex systems work internally.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 0, doctor: 2, dataScientist: 2, contentCreator: 0, productManager: 2, athlete: 1, charteredAccountant: 2, civilServant: 2 },
      },
      {
        value: 'rule_based_systems',
        label: 'I excel when working with well-defined rule-based systems like tax laws or accounting standards.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 3, civilServant: 3 },
      }
    ],
  },
  {
    id: 5,
    text: 'I prefer to work in environments where:',
    type: 'mcq',
    options: [
      {
        value: 'evolving',
        label: 'Processes are constantly evolving and being redefined',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 2, doctor: 2, dataScientist: 3, contentCreator: 3, productManager: 3, athlete: 2, charteredAccountant: 1, civilServant: 1 },
      },
      {
        value: 'structured',
        label: 'There is a clear structure and predictable workflow',
        scores: { softwareDeveloper: 1, interiorDesigner: 2, graphicDesigner: 1, doctor: 3, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 2, charteredAccountant: 3, civilServant: 3 },
      },
      {
        value: 'collaborative',
        label: 'Collaboration and teamwork are the primary focus',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 3, athlete: 3, charteredAccountant: 2, civilServant: 2 },
      },
      {
        value: 'independent',
        label: 'I can work independently with minimal supervision',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 1, dataScientist: 2, contentCreator: 3, productManager: 2, athlete: 2, charteredAccountant: 2, civilServant: 1 },
      },
    ],
  },
];
