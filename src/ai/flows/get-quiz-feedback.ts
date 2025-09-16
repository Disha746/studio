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
  prompt: `You are a career guidance AI. The user is answering a career quiz.
  After each selected option, provide short, encouraging micro-feedback (2-3 sentences)
  explaining what the answer reveals about the user's skills, mindset, or career tendencies.
  Keep the tone supportive, clear, and insightful. Do not suggest a final career yet — only interpret the current choice.

  Question: "{{question}}"
  User's Answer: "{{answer}}"

  Generate feedback for this specific answer.
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
