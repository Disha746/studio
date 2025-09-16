
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
      teacher: number;
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
        scores: { softwareDeveloper: 2, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 1.5, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 1, astrologer: 0, meteorologist: 1.5, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'data_interpretation',
        label: 'Looking at data and patterns.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 2, contentCreator: 0, productManager: 1, athlete: 0, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 0, meteorologist: 2, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'creative_ideation',
        label: 'Coming up with creative ideas/designs.',
        scores: { softwareDeveloper: 0, interiorDesigner: 2, graphicDesigner: 2, doctor: 0, dataScientist: 0, contentCreator: 2, productManager: 1, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 2, lawyer: 1, astrologer: 0, meteorologist: 0, teacher: 1, pharmacist: 0 },
      },
      {
        value: 'interpersonal_dynamics',
        label: 'Talking with people to understand and guide them.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 0, contentCreator: 0, productManager: 2, athlete: 0, charteredAccountant: 0, civilServant: 2, mediaAndMassComm: 2, lawyer: 2, astrologer: 0, meteorologist: 0, teacher: 2, pharmacist: 2 },
      },
       {
        value: 'physical_challenge',
        label: 'A physical challenge that tests my endurance, strength, and coordination.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 2, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'structured_process',
        label: 'A challenge that requires a systematic, rule-based approach and meticulous attention to detail.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 2, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 2, civilServant: 2, mediaAndMassComm: 0, lawyer: 2, astrologer: 0, meteorologist: 0, teacher: 1, pharmacist: 2 },
      }
    ],
  },
  {
    id: 2,
    text: 'Which type of work sounds most fun to you? (Pick 1–2)',
    type: 'mcq-multi',
    options: [
      {
        value: 'coding_building',
        label: 'Coding or building apps/tools.',
        scores: { softwareDeveloper: 1.2, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0.8, contentCreator: 0, productManager: 1.2, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'designing_visuals',
        label: 'Designing spaces or visuals.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1.2, graphicDesigner: 1.2, doctor: 0, dataScientist: 0, contentCreator: 1.2, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'data_insights',
        label: 'Finding insights from data.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 1.2, contentCreator: 0, productManager: 1.2, athlete: 0, charteredAccountant: 1.2, civilServant: 1.2, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 1.2, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'health_wellness',
        label: 'Helping people with health or wellness.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.2, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 1.2, pharmacist: 1.2 },
      },
      {
        value: 'writing_content',
        label: 'Writing stories or creating content.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 1.2, productManager: 1.2, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 1.2, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 1.2, pharmacist: 0 },
      },
      {
        value: 'legal_social_issues',
        label: 'Debating or solving legal/social issues.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1.2, mediaAndMassComm: 1.2, lawyer: 1.2, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
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
        label: 'Innovate and build products that solve user problems.',
        scores: { softwareDeveloper: 1.5, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 1.5, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 1.5, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'efficiency',
        label: 'Analyze systems to make them more efficient and effective.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 1.5, athlete: 0, charteredAccountant: 1.5, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 1.5, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'expression',
        label: 'Express myself creatively through visual or written mediums.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1.5, graphicDesigner: 1.5, doctor: 0, dataScientist: 0, contentCreator: 1.5, productManager: 1.5, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 1.5, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'help_others',
        label: 'Directly help and care for people in a medical capacity.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.5, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 1.5, pharmacist: 1.5 },
      },
       {
        value: 'compete_win',
        label: 'Compete at the highest level and push my physical limits.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 1.5, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'provide_expertise',
        label: 'Provide expert financial advice and ensure financial integrity.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 1.5, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'serve_nation',
        label: 'Serve the nation and contribute to its governance and development.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 1.5, pharmacist: 0 },
      },
      {
        value: 'uphold_justice',
        label: 'Uphold justice and advocate for others within a legal framework.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 1.5, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
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
        scores: { softwareDeveloper: 0.8, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0.8, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0.8, astrologer: 0, meteorologist: 0.8, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'comfortable_with_examples',
        label: 'I grasp abstract concepts best when they are tied to real-world examples and applications.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0.8, graphicDesigner: 0, doctor: 0.8, dataScientist: 0, contentCreator: 0, productManager: 0.8, athlete: 0, charteredAccountant: 0.8, civilServant: 0.8, mediaAndMassComm: 0.8, lawyer: 0.8, astrologer: 0, meteorologist: 0, teacher: 0.8, pharmacist: 0 },
      },
      {
        value: 'prefer_concrete',
        label: 'I prefer concrete, hands-on tasks and find purely abstract thinking less engaging.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0.8, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0.8, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'rule_based_systems',
        label: 'I excel when working with well-defined rule-based systems like tax laws or medication protocols.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0.8, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0.8, civilServant: 0.8, mediaAndMassComm: 0, lawyer: 0.8, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0.8 },
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
        scores: { softwareDeveloper: 0.8, interiorDesigner: 0.8, graphicDesigner: 0.8, doctor: 0, dataScientist: 0, contentCreator: 0.8, productManager: 0.8, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0.8, lawyer: 0.8, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'structured',
        label: 'There is a clear structure, established protocols, and predictable workflow.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0.8, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0.8, civilServant: 0.8, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0.8 },
      },
      {
        value: 'collaborative',
        label: 'Collaboration and cross-functional teamwork are the primary focus.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0.8, graphicDesigner: 0, doctor: 0.8, dataScientist: 0, contentCreator: 0, productManager: 0.8, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0.8, lawyer: 0.8, astrologer: 0, meteorologist: 0, teacher: 0.8, pharmacist: 0 },
      },
      {
        value: 'independent',
        label: 'I can work independently with a high degree of autonomy.',
        scores: { softwareDeveloper: 0.8, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0.8, productManager: 0, athlete: 0.8, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
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
            scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0.6, lawyer: 0.6, astrologer: 1.5, meteorologist: 0, teacher: 0.6, pharmacist: 0 },
        },
        {
            value: 'curious',
            label: 'Curious about them from a historical or cultural perspective.',
            scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0.6, mediaAndMassComm: 0.6, lawyer: 0.6, astrologer: 0, meteorologist: 0, teacher: 0.6, pharmacist: 0 },
        },
        {
            value: 'sceptical',
            label: 'Skeptical and prefer evidence-based, scientific explanations for phenomena.',
            scores: { softwareDeveloper: 0.6, interiorDesigner: 0, graphicDesigner: 0, doctor: 0.6, dataScientist: 0.6, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0.6, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0.6, teacher: 0, pharmacist: 0.6 },
        },
        {
            value: 'neutral',
            label: 'Neutral and do not have a strong opinion either way.',
            scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
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
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.5, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 1.5, charteredAccountant: 0, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 1.5, astrologer: 0, meteorologist: 1.5, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'handle_it',
        label: 'I can handle pressure but prefer a more stable, predictable environment.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 1.5, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 1.5 },
      },
      {
        value: 'avoid_it',
        label: 'I prefer to avoid high-stakes, high-pressure situations and work at a steady pace.',
        scores: { softwareDeveloper: 0, interiorDesigner: 1.5, graphicDesigner: 1.5, doctor: 0, dataScientist: 0, contentCreator: 1.5, productManager: 0, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'depends',
        label: 'It depends on the situation and the team I am working with.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.5, dataScientist: 0, contentCreator: 0, productManager: 1.5, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 1.5, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 1.5, pharmacist: 0 },
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
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.5, dataScientist: 0, contentCreator: 0, productManager: 0, athlete: 0, charteredAccountant: 1.5, civilServant: 1.5, mediaAndMassComm: 0, lawyer: 1.5, astrologer: 0, meteorologist: 0, teacher: 1.5, pharmacist: 1.5 },
      },
      {
        value: 'rely_on_system',
        label: 'I use technology and systems to automate checks, but trust my own review.',
        scores: { softwareDeveloper: 0.6, interiorDesigner: 0, graphicDesigner: 0, doctor: 0, dataScientist: 0.6, contentCreator: 0, productManager: 0.6, athlete: 0, charteredAccountant: 0.6, civilServant: 0.6, mediaAndMassComm: 0, lawyer: 0, astrologer: 0, meteorologist: 0.6, teacher: 0, pharmacist: 0 },
      },
      {
        value: 'get_second_opinion',
        label: 'I prefer to get a second opinion from a colleague to ensure nothing is missed.',
        scores: { softwareDeveloper: 0, interiorDesigner: 0, graphicDesigner: 0, doctor: 1.5, dataScientist: 0, contentCreator: 0, productManager: 1.5, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0, lawyer: 1.5, astrologer: 0, meteorologist: 0, teacher: 1.5, pharmacist: 0 },
      },
      {
        value: 'trust_instincts',
        label: 'I am confident in my abilities and trust my creative or strategic instincts.',
        scores: { softwareDeveloper: 0.6, interiorDesigner: 0.6, graphicDesigner: 0.6, doctor: 0, dataScientist: 0, contentCreator: 0.6, productManager: 0.6, athlete: 0, charteredAccountant: 0, civilServant: 0, mediaAndMassComm: 0.6, lawyer: 0, astrologer: 0, meteorologist: 0, teacher: 0, pharmacist: 0 },
      }
    ]
  }
];

    