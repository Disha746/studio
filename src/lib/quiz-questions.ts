
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
      mediaAndMassComm: number;
      lawyer: number;
      astrologer: number;
      meteorologist: number;
      edTechSpecialist: number;
      pharmacist: number;
    };
  }[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'When I face a problem, I enjoy:',
    type: 'mcq',
    options: [
      {
        value: 'logical_deduction',
        label: 'Solving it with logic and coding.',
        scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 2, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 1, civilServant: 1, mediaAndMassComm: 0, lawyer: 1, astrologer: 0, meteorologist: 2, edTechSpecialist: 1, pharmacist: 1 },
      },
      {
        value: 'data_interpretation',
        label: 'Looking at data and patterns.',
        scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 1, doctor: 2, dataScientist: 3, contentCreator: 1, productManager: 2, athlete: 0, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 1, lawyer: 2, astrologer: 2, meteorologist: 3, edTechSpecialist: 1, pharmacist: 1 },
      },
      {
        value: 'creative_ideation',
        label: 'Coming up with creative ideas/designs.',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 2, lawyer: 0, astrologer: 1, meteorologist: 0, edTechSpecialist: 2, pharmacist: 0 },
      },
      {
        value: 'interpersonal_dynamics',
        label: 'Talking with people to understand and guide them.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 0, doctor: 3, dataScientist: 0, contentCreator: 1, productManager: 3, athlete: 1, charteredAccountant: 1, civilServant: 3, mediaAndMassComm: 2, lawyer: 3, astrologer: 3, meteorologist: 0, edTechSpecialist: 2, pharmacist: 3 },
      },
       {
        value: 'physical_challenge',
        label: 'A physical challenge that tests my endurance, strength, and coordination.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 3, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
      },
      {
        value: 'structured_process',
        label: 'A challenge that requires a systematic, rule-based approach and meticulous attention to detail.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 3, civilServant: 2, mediaAndMassComm: 0, lawyer: 3, astrologer: 1, meteorologist: 1, edTechSpecialist: 0, pharmacist: 3 },
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
        label: 'Coding and building digital products or tools.',
        scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 1, doctor: 0, dataScientist: 2, contentCreator: 1, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 1, edTechSpecialist: 2, pharmacist: 0 },
      },
      {
        value: 'designing_spaces',
        label: 'Designing physical spaces, focusing on aesthetics and functionality.',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 2, doctor: 0, dataScientist: 0, contentCreator: 1, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
      },
      {
        value: 'analyzing_data',
        label: 'Analyzing complex data to find insights and drive business decisions.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 3, contentCreator: 1, productManager: 2, athlete: 0, charteredAccountant: 2, civilServant: 1, mediaAndMassComm: 1, lawyer: 1, astrologer: 1, meteorologist: 3, edTechSpecialist: 1, pharmacist: 1 },
      },
      {
        value: 'diagnosing_patients',
        label: 'Diagnosing patient symptoms and developing treatment plans.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 3, dataScientist: 1, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 1 },
      },
       {
        value: 'medication_safety',
        label: 'Ensuring medication safety, checking for interactions, and advising patients on usage.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 3 },
      },
      {
        value: 'physical_training',
        label: 'Engaging in rigorous physical training and competing.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 3, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
      },
      {
        value: 'auditing_compliance',
        label: 'Auditing financial records and ensuring regulatory compliance.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 1, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 3, civilServant: 1, mediaAndMassComm: 0, lawyer: 2, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 1 },
      },
      {
        value: 'public_policy',
        label: 'Developing public policy and working on social welfare initiatives.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 0, contentCreator: 1, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 3, mediaAndMassComm: 2, lawyer: 2, astrologer: 0, meteorologist: 1, edTechSpecialist: 1, pharmacist: 0 },
      },
      {
        value: 'crafting_narratives',
        label: 'Crafting compelling narratives, writing scripts, or reporting news.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 2, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 3, lawyer: 1, astrologer: 1, meteorologist: 0, edTechSpecialist: 2, pharmacist: 0 },
      },
      {
        value: 'arguing_case',
        label: 'Constructing arguments, debating, and advocating for a legal position.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 1, productManager: 1, athlete: 0, charteredAccountant: 1, civilServant: 2, mediaAndMassComm: 1, lawyer: 3, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
      },
      {
        value: 'interpreting_charts',
        label: 'Interpreting symbolic charts and providing intuitive guidance to people.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 1, contentCreator: 2, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 1, lawyer: 0, astrologer: 3, meteorologist: 1, edTechSpecialist: 1, pharmacist: 0 },
      },
       {
        value: 'designing_learning_tools',
        label: 'Designing digital tools and curriculum to improve education.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 1, doctor: 0, dataScientist: 1, contentCreator: 2, productManager: 2, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 1, lawyer: 0, astrologer: 0, meteorologist: 0, edTechSpecialist: 3, pharmacist: 0 },
      },
    ],
  },
  {
    id: 3,
    text: 'I am most motivated by the opportunity to:',
    type: 'mcq',
    options: [
      {
        value: 'innovate',
        label: 'Innovate and build products that solve user problems.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 2, contentCreator: 2, productManager: 3, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 1, lawyer: 0, astrologer: 0, meteorologist: 1, edTechSpecialist: 2, pharmacist: 0 },
      },
      {
        value: 'efficiency',
        label: 'Analyze systems to make them more efficient and effective.',
        scores: { softwareDeveloper: 2, interiorDesigner: 1, graphicDesigner: 0, doctor: 1, dataScientist: 3, contentCreator: 0, productManager: 2, athlete: 1, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 0, lawyer: 1, astrologer: 0, meteorologist: 3, edTechSpecialist: 1, pharmacist: 1 },
      },
      {
        value: 'expression',
        label: 'Express myself creatively through visual or written mediums.',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 3, lawyer: 0, astrologer: 1, meteorologist: 0, edTechSpecialist: 1, pharmacist: 0 },
      },
      {
        value: 'help_others',
        label: 'Directly help and care for people in a medical capacity.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 3, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 0, lawyer: 0, astrologer: 1, meteorologist: 0, edTechSpecialist: 0, pharmacist: 3 },
      },
       {
        value: 'compete_win',
        label: 'Compete at the highest level and push my physical limits.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 3, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 1, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
      },
      {
        value: 'provide_expertise',
        label: 'Provide expert financial advice and ensure financial integrity.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 3, civilServant: 1, mediaAndMassComm: 0, lawyer: 1, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 1 },
      },
      {
        value: 'serve_nation',
        label: 'Serve the nation and contribute to its governance and development.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 3, mediaAndMassComm: 1, lawyer: 2, astrologer: 0, meteorologist: 1, edTechSpecialist: 1, pharmacist: 0 },
      },
      {
        value: 'uphold_justice',
        label: 'Uphold justice and advocate for others within a legal framework.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 1, civilServant: 2, mediaAndMassComm: 1, lawyer: 3, astrologer: 0, meteorologist: 0, edTechSpecialist: 0, pharmacist: 0 },
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
        label: 'I love creating and working within logical frameworks and abstract systems.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 3, contentCreator: 0, productManager: 2, athlete: 0, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 0, lawyer: 3, astrologer: 2, meteorologist: 3, edTechSpecialist: 1, pharmacist: 1 },
      },
      {
        value: 'comfortable_with_examples',
        label: 'I grasp abstract concepts best when they are tied to real-world examples and applications.',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 3, athlete: 2, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 2, meteorologist: 2, edTechSpecialist: 3, pharmacist: 2 },
      },
      {
        value: 'prefer_concrete',
        label: 'I prefer concrete, hands-on tasks and find purely abstract thinking less engaging.',
        scores: { softwareDeveloper: 0, interiorDesigner: 3, graphicDesigner: 3, doctor: 2, dataScientist: 0, contentCreator: 3, productManager: 1, athlete: 3, charteredAccountant: 1, civilServant: 1, mediaAndMassComm: 3, lawyer: 1, astrologer: 1, meteorologist: 0, edTechSpecialist: 2, pharmacist: 3 },
      },
      {
        value: 'rule_based_systems',
        label: 'I excel when working with well-defined rule-based systems like tax laws or medication protocols.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 1, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 3, civilServant: 3, mediaAndMassComm: 0, lawyer: 3, astrologer: 1, meteorologist: 1, edTechSpecialist: 0, pharmacist: 3 },
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
        label: 'Processes are constantly evolving and being redefined.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 2, doctor: 1, dataScientist: 3, contentCreator: 3, productManager: 3, athlete: 2, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 3, lawyer: 1, astrologer: 2, meteorologist: 2, edTechSpecialist: 3, pharmacist: 1 },
      },
      {
        value: 'structured',
        label: 'There is a clear structure, established protocols, and predictable workflow.',
        scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 0, doctor: 3, dataScientist: 1, contentCreator: 0, productManager: 1, athlete: 1, charteredAccountant: 3, civilServant: 3, mediaAndMassComm: 1, lawyer: 3, astrologer: 1, meteorologist: 2, edTechSpecialist: 1, pharmacist: 3 },
      },
      {
        value: 'collaborative',
        label: 'Collaboration and cross-functional teamwork are the primary focus.',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 3, athlete: 3, charteredAccountant: 1, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 1, meteorologist: 1, edTechSpecialist: 3, pharmacist: 2 },
      },
      {
        value: 'independent',
        label: 'I can work independently with a high degree of autonomy.',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 1, dataScientist: 2, contentCreator: 3, productManager: 1, athlete: 2, charteredAccountant: 2, civilServant: 1, mediaAndMassComm: 2, lawyer: 2, astrologer: 3, meteorologist: 1, edTechSpecialist: 2, pharmacist: 2 },
      },
    ],
  },
  {
    id: 6,
    text: 'When it comes to ancient traditions and belief systems, I am:',
    type: 'mcq',
    options: [
        {
            value: 'fascinated',
            label: 'Fascinated by them and believe they hold deep, intuitive wisdom.',
            scores: { softwareDeveloper: 0, interiorDesigner: 1, graphicDesigner: 1, doctor: 0, dataScientist: 0, contentCreator: 2, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1, mediaAndMassComm: 2, lawyer: 1, astrologer: 3, meteorologist: 0, edTechSpecialist: 1, pharmacist: 0 },
        },
        {
            value: 'curious',
            label: 'Curious about them from a historical or cultural perspective.',
            scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 1, contentCreator: 2, productManager: 1, athlete: 1, charteredAccountant: 1, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 1, meteorologist: 1, edTechSpecialist: 2, pharmacist: 1 },
        },
        {
            value: 'sceptical',
            label: 'Skeptical and prefer evidence-based, scientific explanations for phenomena.',
            scores: { softwareDeveloper: 3, interiorDesigner: 0, graphicDesigner: 0, doctor: 3, dataScientist: 3, contentCreator: 0, productManager: 2, athlete: 1, charteredAccountant: 2, civilServant: 1, mediaAndMassComm: 0, lawyer: 2, astrologer: 0, meteorologist: 3, edTechSpecialist: 2, pharmacist: 3 },
        },
        {
            value: 'neutral',
            label: 'Neutral and do not have a strong opinion either way.',
            scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 1, contentCreator: 1, productManager: 1, athlete: 1, charteredAccountant: 1, civilServant: 1, mediaAndMassComm: 1, lawyer: 1, astrologer: 1, meteorologist: 1, edTechSpecialist: 1, pharmacist: 1 },
        }
    ]
  },
  {
    id: 7,
    text: 'How do you feel about working under high-pressure situations with critical outcomes (e.g., public safety, health)?',
    type: 'mcq',
    options: [
      {
        value: 'thrive',
        label: 'I thrive under pressure and make clear, decisive decisions.',
        scores: { softwareDeveloper: 1, interiorDesigner: 0, graphicDesigner: 0, doctor: 3, dataScientist: 1, contentCreator: 1, productManager: 2, athlete: 3, charteredAccountant: 2, civilServant: 3, mediaAndMassComm: 2, lawyer: 3, astrologer: 1, meteorologist: 3, edTechSpecialist: 1, pharmacist: 3 },
      },
      {
        value: 'handle_it',
        label: 'I can handle pressure but prefer a more stable, predictable environment.',
        scores: { softwareDeveloper: 2, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 2, athlete: 2, charteredAccountant: 3, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 2, meteorologist: 2, edTechSpecialist: 2, pharmacist: 2 },
      },
      {
        value: 'avoid_it',
        label: 'I prefer to avoid high-stakes, high-pressure situations and work at a steady pace.',
        scores: { softwareDeveloper: 2, interiorDesigner: 3, graphicDesigner: 2, doctor: 0, dataScientist: 2, contentCreator: 3, productManager: 1, athlete: 0, charteredAccountant: 1, civilServant: 0, mediaAndMassComm: 1, lawyer: 0, astrologer: 3, meteorologist: 1, edTechSpecialist: 3, pharmacist: 1 },
      },
      {
        value: 'depends',
        label: 'It depends on the situation and the team I am working with.',
        scores: { softwareDeveloper: 1, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 1, contentCreator: 1, productManager: 1, athlete: 1, charteredAccountant: 1, civilServant: 1, mediaAndMassComm: 1, lawyer: 1, astrologer: 1, meteorologist: 1, edTechSpecialist: 1, pharmacist: 1 },
      }
    ]
  },
   {
    id: 8,
    text: 'When accuracy is critical, such as in a medical prescription or financial report, how do you approach the task?',
    type: 'mcq',
    options: [
      {
        value: 'double_check',
        label: 'I meticulously double-check my work and follow a strict verification process.',
        scores: { softwareDeveloper: 2, interiorDesigner: 1, graphicDesigner: 1, doctor: 3, dataScientist: 2, contentCreator: 0, productManager: 1, athlete: 1, charteredAccountant: 3, civilServant: 2, mediaAndMassComm: 1, lawyer: 2, astrologer: 1, meteorologist: 2, edTechSpecialist: 1, pharmacist: 3 },
      },
      {
        value: 'rely_on_system',
        label: 'I use technology and systems to automate checks, but trust my own review.',
        scores: { softwareDeveloper: 3, interiorDesigner: 1, graphicDesigner: 1, doctor: 1, dataScientist: 3, contentCreator: 1, productManager: 2, athlete: 0, charteredAccountant: 2, civilServant: 1, mediaAndMassComm: 1, lawyer: 1, astrologer: 0, meteorologist: 3, edTechSpecialist: 2, pharmacist: 1 },
      },
      {
        value: 'get_second_opinion',
        label: 'I prefer to get a second opinion from a colleague to ensure nothing is missed.',
        scores: { softwareDeveloper: 1, interiorDesigner: 2, graphicDesigner: 2, doctor: 2, dataScientist: 2, contentCreator: 2, productManager: 2, athlete: 1, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 2, meteorologist: 2, edTechSpecialist: 2, pharmacist: 2 },
      },
      {
        value: 'trust_instincts',
        label: 'I am confident in my abilities and trust my creative or strategic instincts.',
        scores: { softwareDeveloper: 0, interiorDesigner: 2, graphicDesigner: 3, doctor: 0, dataScientist: 0, contentCreator: 3, productManager: 3, athlete: 2, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 2, lawyer: 0, astrologer: 3, meteorologist: 0, edTechSpecialist: 2, pharmacist: 0 },
      }
    ]
  }
];
