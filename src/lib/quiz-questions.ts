export type Question = {
  id: number;
  text: string;
  type: 'likert' | 'mcq' | 'mcq-multi' | 'textarea';
  options?: { value: string; label: string }[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'When faced with a complex problem, I prefer:',
    type: 'mcq',
    options: [
      { value: 'logical_deduction', label: 'Technical challenges requiring logical deduction and precise solutions' },
      { value: 'data_interpretation', label: 'Analytical challenges that involve interpreting data and identifying patterns' },
      { value: 'creative_ideation', label: 'Creative challenges that require brainstorming and novel ideas' },
      { value: 'interpersonal_dynamics', label: 'Interpersonal challenges that involve negotiation and understanding different viewpoints' }
    ]
  },
  {
    id: 2,
    text: 'Which of the following work activities sounds most appealing to you?',
    type: 'mcq',
    options: [
        { value: 'coding', label: 'Coding/building digital solutions' },
        { value: 'troubleshooting', label: 'Troubleshooting and fixing complex technical issues' },
        { value: 'analyzing_data', label: 'Analyzing data and creating reports' },
        { value: 'designing_visuals', label: 'Designing visuals and user interfaces' }
    ]
  },
  {
    id: 3,
    text: 'I am most motivated by the opportunity to:',
    type: 'mcq',
    options: [
        { value: 'innovate', label: 'Innovate and push technological boundaries' },
        { value: 'efficiency', label: 'Make processes more efficient and effective' },
        { value: 'expression', label: 'Express myself creatively' },
        { value: 'help_others', label: 'Help others and improve their well-being' }
    ]
  },
  {
    id: 4,
    text: 'How comfortable are you with abstract concepts and logical systems?',
    type: 'mcq',
    options: [
        { value: 'very_comfortable', label: 'I enjoy working with abstract ideas and creating logical frameworks.' },
        { value: 'comfortable_with_examples', label: 'I can grasp abstract concepts when explained clearly, especially with examples.' },
        { value: 'prefer_concrete', label: 'I prefer concrete, hands-on tasks and find abstract concepts challenging.' },
        { value: 'motivated_by_complexity', label: 'I am motivated by understanding how complex systems work internally.' }
    ]
  },
  {
    id: 5,
    text: 'I prefer to work in environments where:',
    type: 'mcq',
    options: [
        { value: 'evolving', label: 'Processes are constantly evolving and being redefined' },
        { value: 'structured', label: 'There is a clear structure and predictable workflow' },
        { value: 'collaborative', label: 'Collaboration and teamwork are the primary focus' },
        { value: 'independent', label: 'I can work independently with minimal supervision' }
    ]
  },
];