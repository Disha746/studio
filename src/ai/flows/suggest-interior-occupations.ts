
// src/ai/flows/suggest-interior-occupations.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest interior design-related occupations.
 */

import { ai } from '@/ai/genkit';
import {
  SuggestOccupationsInputSchema,
  SuggestOccupationsOutputSchema,
  type SuggestOccupationsInput,
} from '@/ai/flows/types';

export async function suggestInteriorOccupations(
  input: SuggestOccupationsInput
) {
  return suggestInteriorOccupationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInteriorOccupationsPrompt',
  input: { schema: SuggestOccupationsInputSchema },
  output: { schema: SuggestOccupationsOutputSchema },
  prompt: `You are a career counselor AI.

A user named {{name}} (age {{age}} from {{country}}, with education level "{{education}}") has completed a skills assessment quiz. Their quiz results are provided below.

Based on these results, suggest up to two additional occupations related to interior design that might be a good fit for them. The goal is to provide them with more options to explore within the interior design field.

Do not suggest "Interior Designer" itself. Only provide related but distinct occupations.

Quiz Results:
{{{quizResults}}}
`,
});

const suggestInteriorOccupationsFlow = ai.defineFlow(
  {
    name: 'suggestInteriorOccupationsFlow',
    inputSchema: SuggestOccupationsInputSchema,
    outputSchema: SuggestOccupationsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to get suggestions from AI.');
    }
    return output;
  }
);
