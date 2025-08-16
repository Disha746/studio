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
];
