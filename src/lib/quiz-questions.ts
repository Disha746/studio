export type Question = {
  id: number;
  text: string;
  type: 'likert' | 'mcq' | 'mcq-multi';
  options?: { value: string; label: string }[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'I am confident when speaking in front of groups.',
    type: 'likert',
  },
  {
    id: 2,
    text: 'I enjoy solving puzzles, complex problems, or coding challenges.',
    type: 'likert',
  },
  {
    id: 3,
    text: 'I often help friends or family resolve conflicts.',
    type: 'likert',
  },
  {
    id: 4,
    text: 'Which two skills best describe you?',
    type: 'mcq-multi',
    options: [
      { value: 'Analytical', label: 'Analytical' },
      { value: 'Creative', label: 'Creative' },
      { value: 'Communicative', label: 'Communicative' },
      { value: 'Practical', label: 'Practical' },
      { value: 'Empathetic', label: 'Empathetic' },
    ],
  },
  {
    id: 5,
    text: 'In a group project, I usually:',
    type: 'mcq',
    options: [
      { value: 'lead', label: 'Take charge and delegate tasks' },
      { value: 'support', label: 'Support others with their tasks' },
      { value: 'focus', label: 'Focus on my part and finish quickly' },
      { value: 'observe', label: 'Step back and observe before contributing' },
    ],
  },
  {
    id: 6,
    text: 'I have a strong eye for color, lighting, and spatial arrangements.',
    type: 'likert',
  },
  {
    id: 7,
    text: 'Following a budget and timeline comes naturally to me.',
    type: 'likert',
  },
  {
    id: 8,
    text: 'When faced with criticism of my work, I:',
    type: 'mcq',
    options: [
      { value: 'listen', label: 'Listen openly and consider the feedback' },
      { value: 'defend', label: 'Defend my original choices' },
      { value: 'ignore', label: 'Feel discouraged and want to start over' },
      { value: 'compromise', label: 'Look for a quick compromise' },
    ],
  },
  {
    id: 9,
    text: 'I enjoy reading about architecture and design trends.',
    type: 'likert',
  },
  {
    id: 10,
    text: 'I am comfortable networking and marketing my own services.',
    type: 'likert',
  },
  {
    id: 11,
    text: 'I prefer working on:',
    type: 'mcq',
    options: [
      { value: 'big-picture', label: 'The big-picture concepts of a project' },
      { value: 'details', label: 'The fine details and finishing touches' },
    ],
  },
  {
    id: 12,
    text: "I am persistent, even when a project doesn't go as planned.",
    type: 'likert',
  },
  {
    id: 13,
    text: 'I am proficient with digital tools like photo editing or 3D modeling software.',
    type: 'likert',
  },
  {
    id: 14,
    text: 'My ideal work environment is:',
    type: 'mcq',
    options: [
      { value: 'collaborative', label: 'A busy, collaborative office' },
      { value: 'independent', label: 'A quiet, independent setting' },
      { value: 'varied', label: 'A mix of on-site work and office time' },
      { value: 'remote', label: 'Fully remote from a home office' },
    ],
  },
  {
    id: 15,
    text: "I find it easy to understand a client's needs, even when they are not clearly expressed.",
    type: 'likert',
  },
  {
    id: 16,
    text: 'I am skilled at drawing, sketching, or other visual arts.',
    type: 'likert',
  },
  {
    id: 17,
    text: "When choosing a project to work on, I'm most motivated by:",
    type: 'mcq',
    options: [
        { value: 'creativity', label: 'The opportunity for creative expression' },
        { value: 'challenge', label: 'The complexity of the technical challenge' },
        { value: 'impact', label: "The positive impact on the client's life" },
        { value: 'money', label: 'The financial compensation' },
    ]
  },
  {
    id: 18,
    text: "I'm organized and enjoy planning projects step-by-step.",
    type: 'likert',
  },
  {
    id: 19,
    text: 'I am interested in the history and theory behind design styles.',
    type: 'likert',
  },
  {
    id: 20,
    text: 'Dealing with difficult clients or contractors is something I can handle professionally.',
    type: 'likert',
  },
];
