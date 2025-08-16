// src/ai/flows/suggest-interior-occupations.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest occupations based on quiz results.
 *
 * - suggestOccupations - A function that suggests occupations based on quiz results.
 */

import {ai} from '@/ai/genkit';
import {
  SuggestOccupationsInputSchema,
  SuggestOccupationsOutputSchema,
  type SuggestOccupationsInput,
} from '@/ai/flows/types';

export async function suggestOccupations(
  input: SuggestOccupationsInput
) {
  return suggestOccupationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOccupationsPrompt',
  input: {schema: SuggestOccupationsInputSchema},
  output: {schema: SuggestOccupationsOutputSchema},
  prompt: `You are a career counselor.

  Based on the quiz results of a user, suggest 3 occupations that might be a good fit for them.

  If the user's answers strongly align with problem-solving, logical deduction, technical challenges, coding, and an interest in technology, you MUST suggest "Software Developer" as one of the occupations.

  If the user's answers lean towards creativity, aesthetics, and spatial arrangement, you should suggest interior design-related occupations.

  Consider the user's country and age when making your suggestions.

  Quiz Results:
  {{{quizResults}}}

  Country: {{{country}}}
  Age: {{{age}}}
  `,
});

const suggestOccupationsFlow = ai.defineFlow(
  {
    name: 'suggestOccupationsFlow',
    inputSchema: SuggestOccupationsInputSchema,
    outputSchema: SuggestOccupationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
