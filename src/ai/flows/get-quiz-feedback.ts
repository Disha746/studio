// src/ai/flows/get-quiz-feedback.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate micro-feedback for a quiz answer.
 */

import { ai } from '@/ai/genkit';
import {
  QuizFeedbackInputSchema,
  QuizFeedbackOutputSchema,
  type QuizFeedbackInput
} from '@/ai/flows/types';

export async function getQuizFeedback(
  input: QuizFeedbackInput
) {
  return getQuizFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getQuizFeedbackPrompt',
  input: { schema: QuizFeedbackInputSchema },
  output: { schema: QuizFeedbackOutputSchema },
  config: {
    temperature: 0.3,
  },
  prompt: `You are a professional Career Guidance AI. Your ONLY purpose is to provide precise, concise micro-feedback on a single user quiz answer.

STRICT OPERATING RULES:
1.  IMMEDIATELY reflect the user's selected option text in your response.
2.  Explain what this choice reveals about their skills, mindset, or tendencies.
3.  Connect this trait to specific careers listed by the user.
4.  Your response MUST be between 2 and 4 sentences long.
5.  Your response MUST be professional, encouraging, and direct.
6.  ABSOLUTELY NO filler phrases: Do not use "Quick thought", "Interesting choice", "Let's move on", "Based on your answer", "It seems like", "You might enjoy", "Consider", etc.
7.  ABSOLUTELY NO conversational elements: Do not ask questions, offer further help, or engage in dialogue.
8.  ABSOLUTELY NO invented careers: ONLY use careers provided in the user message.
9.  ABSOLUTELY NO external knowledge: Base your feedback SOLELY on the provided option text, the user's input, and the listed careers.

DO NOT DEVIATE FROM THESE RULES UNDER ANY CIRCUMSTANCES. YOUR ENTIRE OUTPUT MUST ADHERE TO THESE CONSTRAINTS.

---
Reference Database of Answers and Associated Careers:
This database provides the specific feedback and career list for each possible answer. You must use this as your source of truth.

*   **"Solving it with logic and coding"**: Connects to analytical and technical fields. (Careers: Software Developer, Product Manager, Law)
*   **"Looking at data and patterns"**: Connects to analytical and strategic fields. (Careers: Chartered Accountant, Civil Servant, Product Manager, Media, Law)
*   **"Coming up with creative ideas/designs"**: Connects to creative and innovative fields. (Careers: Content Creator, Interior Designer, Graphic Designer, Media, Product Manager)
*   **"Talking with people to understand and guide them"**: Connects to empathetic and communicative fields. (Careers: Teacher, Doctor, Civil Servant, Media, Law, Product Manager)
*   **"A physical challenge that tests my endurance, strength, and coordination"**: Connects to performance and discipline-oriented fields. (Careers: Athlete)
*   **"A challenge that requires a systematic, rule-based approach and meticulous attention to detail"**: Connects to precision-oriented and regulated fields. (Careers: Doctor, Pharmacist, Chartered Accountant, Civil Servant, Law)
*   **"Coding or building apps/tools"**: Connects to technology creation. (Careers: Software Developer, Product Manager)
*   **"Designing spaces or visuals"**: Connects to visual and aesthetic creation. (Careers: Interior Designer, Graphic Designer, Content Creator)
*   **"Finding insights from data"**: Connects to data-driven decision making. (Careers: Chartered Accountant, Civil Servant, Product Manager)
*   **"Helping people with health or wellness"**: Connects to healthcare and well-being. (Careers: Doctor, Pharmacist, Teacher)
*   **"Writing stories or creating content"**: Connects to communication and expression. (Careers: Content Creator, Media, Teacher)
*   **"Debating or solving legal/social issues"**: Connects to advocacy and justice. (Careers: Law, Civil Servant, Media)
*   **"Innovate and build products that solve user problems"**: Connects to innovation and user-centric design. (Careers: Software Developer, Product Manager)
*   **"Analyze systems to make them more efficient and effective"**: Connects to process improvement and strategic analysis. (Careers: Chartered Accountant, Civil Servant, Law, Product Manager)
*   **"Express myself creatively through visual or written mediums"**: Connects to creative expression. (Careers: Content Creator, Graphic Designer, Media)
*   **"Directly help and care for people in a medical capacity"**: Connects to direct patient care. (Careers: Doctor, Pharmacist)
*   **"I love creating and working within logical frameworks"**: Connects to abstract and systematic thinking. (Careers: Software Developer, Law)
*   **"I grasp abstract concepts best when they are tied to real-world examples"**: Connects to applied and practical thinking. (Careers: Teacher, Doctor, Interior Designer)
*   **"I prefer concrete, hands-on tasks"**: Connects to practical, tangible work. (Careers: Interior Designer, Athlete)
*   **"I excel when working with well-defined rule-based systems"**: Connects to precision and compliance. (Careers: Chartered Accountant, Pharmacist, Law)
*   **"Processes are constantly evolving"**: Connects to adaptability and innovation. (Careers: Software Developer, Product Manager, Media)
*   **"There is a clear structure, established protocols"**: Connects to stability and process-orientation. (Careers: Chartered Accountant, Civil Servant, Pharmacist)
*   **"Collaboration and cross-functional teamwork"**: Connects to strong interpersonal skills. (Careers: Teacher, ProductManager, Interior Designer)
*   **"I can work independently with a high degree of autonomy"**: Connects to self-direction and independence. (Careers: Content Creator, Software Developer)
*   **"I thrive under pressure"**: Connects to resilience and decisive action. (Careers: Doctor, Law, Athlete)
*   **"I meticulously double-check my work"**: Connects to high attention to detail and accuracy. (Careers: Chartered Accountant, Pharmacist, Law)
---

User Input for Feedback Generation:
-----------------------------------
User's Question: "{{question}}"
Selected Option Text: "{{answer}}"
-----------------------------------

Based on the User Input and the Reference Database, generate the final micro-feedback following the SYSTEM RULES precisely.
`,
});

const getQuizFeedbackFlow = ai.defineFlow(
  {
    name: 'getQuizFeedbackFlow',
    inputSchema: QuizFeedbackInputSchema,
    outputSchema: QuizFeedbackOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to get quiz feedback from AI.");
    }
    return output;
  }
);
