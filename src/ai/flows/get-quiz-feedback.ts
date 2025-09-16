// src/ai/flows/get-quiz-feedback.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate polished, professional micro-feedback for a quiz answer.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {
  QuizFeedbackInputSchema,
  QuizFeedbackOutputSchema,
  type QuizFeedbackInput,
  type QuizFeedbackOutput,
} from '@/ai/flows/types';

// This mapping contains the exact feedback for each quiz answer. It simulates the Firebase database from the design.
const feedbackDatabase: Record<string, { feedback: string; careers: string[] }> = {
  // Q1
  'Solving it with logic and coding.': {
    feedback: "You enjoy structured, logical problem-solving. This is core to coding, product design, and legal reasoning.",
    careers: ["Software Developer", "Product Manager", "Law"]
  },
  'Looking at data and patterns.': {
    feedback: "You’re detail-oriented and analytical, a key strength for finance, governance, and strategic fields.",
    careers: ["Chartered Accountant", "Civil Servant", "Product Manager"]
  },
  'Coming up with creative ideas/designs.': {
    feedback: "You think imaginatively and thrive in creative roles like design, media, or product strategy.",
    careers: ["Content Creator", "Interior Designer", "Graphic Designer", "Product Manager"]
  },
  'Talking with people to understand and guide them.': {
    feedback: "You value empathy and guidance, which fits teaching, healthcare, policy, and leadership roles.",
    careers: ["Teacher", "Doctor", "Civil Servant"]
  },
  'A physical challenge that tests my endurance, strength, and coordination.': {
    feedback: "You enjoy physical challenges and competition — the foundation for athletic careers.",
    careers: ["Athlete"]
  },
  'A challenge that requires a systematic, rule-based approach and meticulous attention to detail.': {
    feedback: "You prefer structure and precision, crucial for medicine, law, and finance.",
    careers: ["Doctor", "Pharmacist", "Chartered Accountant", "Law"]
  },
  // Q2
  'Coding or building apps/tools.': {
    feedback: "You enjoy building tech solutions, pointing toward software development and product careers.",
    careers: ["Software Developer", "Product Manager"]
  },
  'Designing spaces or visuals.': {
    feedback: "You’re drawn to visual creativity, whether in interiors, graphics, or digital content.",
    careers: ["Interior Designer", "Graphic Designer", "Content Creator"]
  },
  'Finding insights from data.': {
    feedback: "You like discovering patterns in data, an essential skill in finance, governance, and strategy.",
    careers: ["Chartered Accountant", "Product Manager"]
  },
  'Helping people with health or wellness.': {
    feedback: "You’re motivated by care and well-being, a strong trait for healthcare and teaching.",
    careers: ["Doctor", "Pharmacist", "Teacher"]
  },
  'Writing stories or creating content.': {
    feedback: "You enjoy storytelling and expression, which fits content, media, or education.",
    careers: ["Content Creator", "Media and Mass Communication", "Teacher"]
  },
  'Debating or solving legal/social issues.': {
    feedback: "You’re interested in fairness and social impact, a strong trait for law, policy, or journalism.",
    careers: ["Lawyer", "Civil Servant"]
  },
  // Q3
  'Innovate and build products that solve user problems.': {
    feedback: "You’re motivated by innovation and problem-solving, ideal for product and tech roles.",
    careers: ["Software Developer", "Product Manager"]
  },
  'Analyze systems to make them more efficient and effective.': {
    feedback: "You like improving systems, a strength for finance, governance, law, and management.",
    careers: ["Chartered Accountant", "Product Manager", "Lawyer"]
  },
  'Express myself creatively through visual or written mediums.': {
    feedback: "You’re driven by creative expression, suited to content, design, and media careers.",
    careers: ["Content Creator", "Graphic Designer", "Media and Mass Communication"]
  },
  'Directly help and care for people in a medical capacity.': {
    feedback: "You’re motivated by direct care, which aligns with healthcare professions.",
    careers: ["Doctor", "Pharmacist"]
  },
   // Q4
  'I love creating and working within logical frameworks and abstract systems.': {
      feedback: "A love for 'creating and working within logical frameworks' indicates a strength in abstract and systematic thinking. This is foundational for careers that require building or interpreting complex systems.",
      careers: ["Software Developer", "Lawyer"]
  },
  'I grasp abstract concepts best when they are tied to real-world examples and applications.': {
      feedback: "Grasping concepts through 'real-world examples' shows you are an applied and practical thinker. This is a valuable trait for careers where theoretical knowledge must be translated into tangible outcomes.",
      careers: ["Teacher", "Interior Designer"]
  },
  'I prefer concrete, hands-on tasks and find purely abstract thinking less engaging.': {
      feedback: "A preference for 'concrete, hands-on tasks' highlights a practical, tangible approach to work. This is well-suited for careers where the output is a physical or directly observable result.",
      careers: ["Interior Designer", "Athlete"]
  },
  'I excel when working with well-defined rule-based systems like tax laws or medication protocols.': {
      feedback: "Excelling in 'well-defined rule-based systems' points to a high degree of precision and comfort with compliance. This is essential for professions governed by strict standards.",
      careers: ["Chartered Accountant", "Pharmacist", "Lawyer"]
  },
  // Q5
  'Processes are constantly evolving and being redefined.': {
      feedback: "Thriving where 'processes are constantly evolving' shows you are adaptable and innovative. This mindset is crucial in dynamic fields like technology and media.",
      careers: ["Software Developer", "Product Manager"]
  },
  'There is a clear structure, established protocols, and predictable workflow.': {
      feedback: "A preference for 'clear structure and established protocols' indicates a strength in process-oriented and stable environments. This is a key trait for professions that rely on accuracy and established procedures.",
      careers: ["Chartered Accountant", "Pharmacist"]
  },
  'Collaboration and cross-functional teamwork are the primary focus.': {
      feedback: "A preference for 'collaboration and teamwork' highlights strong interpersonal and communication skills. This is essential for roles that require coordinating with diverse teams.",
      careers: ["Teacher", "Product Manager", "Interior Designer"]
  },
  'I can work independently with a high degree of autonomy.': {
      feedback: "Thriving with 'independent autonomy' shows you are self-directed and disciplined. This is ideal for roles that require self-motivation and personal accountability.",
      careers: ["Content Creator", "Software Developer"]
  },
  // Q7
  'I thrive under pressure and make clear, decisive decisions.': {
      feedback: "Thriving 'under pressure' demonstrates resilience and decisive action-making capabilities. This is a critical trait for high-stakes professions.",
      careers: ["Doctor", "Lawyer", "Athlete"]
  },
  // Q8
  'I meticulously double-check my work and follow a strict verification process.': {
      feedback: "Meticulously 'double-checking your work' reveals a high attention to detail and a commitment to accuracy. This is a non-negotiable skill in fields where errors have significant consequences.",
      careers: ["Chartered Accountant", "Doctor", "Pharmacist"]
  }
};


export async function getQuizFeedback(
  input: QuizFeedbackInput
): Promise<QuizFeedbackOutput> {
  return getQuizFeedbackFlow(input);
}

const PolishedFeedbackSchema = z.object({
  polishedFeedback: z.string().describe("The final, polished micro-feedback, adhering to all system rules."),
});

const getQuizFeedbackPrompt = ai.definePrompt({
  name: 'getQuizFeedbackPrompt',
  input: {
    schema: z.object({
      question: z.string(),
      answer: z.string(),
      baseFeedback: z.string(),
      careers: z.array(z.string()),
    })
  },
  output: { schema: PolishedFeedbackSchema },
  prompt: `You are a Career Guidance AI. Your ONLY task is to provide precise micro-feedback on quiz answers.

Rules:
- NEVER use filler like "Quick thought", "Interesting choice", or "Next question".
- ALWAYS write 2–4 sentences, professional and encouraging.
- Start by reflecting the selected option.
- Explain the skill/trait this reveals.
- Connect the skill directly to the careers from Firebase.
- ONLY mention careers provided from Firebase. Do not add others.

User's Selection:
- Question: {{{question}}}
- Option Selected: "{{{answer}}}"
- Base Feedback: "{{{baseFeedback}}}"
- Mapped Careers: {{{careers}}}

Generate the polished micro-feedback based on the data above.
`,
});


const getQuizFeedbackFlow = ai.defineFlow(
  {
    name: 'getQuizFeedbackFlow',
    inputSchema: QuizFeedbackInputSchema,
    outputSchema: QuizFeedbackOutputSchema,
  },
  async (input) => {
    const { answer, question } = input;
    const mapping = feedbackDatabase[answer];

    if (!mapping) {
      return {
        feedback: "That's an interesting perspective. Let's continue to the next question to find out more about you."
      };
    }

    const { output } = await getQuizFeedbackPrompt({
      question,
      answer,
      baseFeedback: mapping.feedback,
      careers: mapping.careers,
    }, { model: 'googleai/gemini-1.5-flash'});

    if (!output) {
      // Fallback to the basic feedback if AI fails
      return { feedback: `${mapping.feedback} This connects to careers like ${mapping.careers.join(', ')}.` };
    }
    
    return { feedback: output.polishedFeedback };
  }
);
