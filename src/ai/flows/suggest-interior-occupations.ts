// src/ai/flows/suggest-interior-occupations.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest interior design occupations based on quiz results.
 *
 * - suggestInteriorOccupations - A function that suggests interior design occupations based on quiz results.
 */

import {ai} from '@/ai/genkit';
import {
  SuggestInteriorOccupationsInputSchema,
  SuggestInteriorOccupationsOutputSchema,
  type SuggestInteriorOccupationsInput,
} from '@/ai/flows/types';

export async function suggestInteriorOccupations(
  input: SuggestInteriorOccupationsInput
) {
  return suggestInteriorOccupationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInteriorOccupationsPrompt',
  input: {schema: SuggestInteriorOccupationsInputSchema},
  output: {schema: SuggestInteriorOccupationsOutputSchema},
  prompt: `You are a career counselor specializing in interior design.

  Based on the quiz results of a user, suggest 3 interior design occupations that might be a good fit for them.

  Consider the user's country and age when making your suggestions.

  Make sure the returned suggested occupations are related to interior design.

  Quiz Results: {{{quizResults}}}
  Country: {{{country}}}
  Age: {{{age}}}
  `,
});

const suggestInteriorOccupationsFlow = ai.defineFlow(
  {
    name: 'suggestInteriorOccupationsFlow',
    inputSchema: SuggestInteriorOccupationsInputSchema,
    outputSchema: SuggestInteriorOccupationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
