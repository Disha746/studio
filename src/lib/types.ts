export type QuizAnswer = {
  questionId: number;
  value: string | string[];
};

export type CareerPathStep = {
    step: number;
    title: string;
    description:string;
};

export type OccupationDetails = {
    advantages: string[];
    disadvantages: string[];
    skills: string[];
    fees: string;
    timeInvestment: string;
    careerPath: CareerPathStep[];
};
