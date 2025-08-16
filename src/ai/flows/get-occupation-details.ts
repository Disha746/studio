// src/ai/flows/get-occupation-details.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to get detailed information about an occupation.
 */

import { ai } from '@/ai/genkit';
import {
    GetOccupationDetailsInputSchema,
    GetOccupationDetailsOutputSchema,
    type GetOccupationDetailsInput
} from '@/ai/flows/types';


export async function getOccupationDetails(
  input: GetOccupationDetailsInput
) {
  return getOccupationDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getOccupationDetailsPrompt',
  input: { schema: GetOccupationDetailsInputSchema },
  output: { schema: GetOccupationDetailsOutputSchema },
  prompt: `You are a world-class, highly realistic career counselor.

  A user wants to know more about the occupation: {{{occupation}}}.

  Provide detailed, accurate, and structured information about this career. Be very honest and direct, especially about the downsides.

  - Advantages: List the key benefits and rewarding aspects.
  - Disadvantages: This is critical. Provide a list of real, tangible drawbacks, challenges, and negative aspects of the job. Avoid generic statements. Be specific and accurate.
  - Skills Required: List the essential hard and soft skills needed to succeed.
  - Fees / Salary: Describe the typical fee structure for freelancers or the salary range for employees. Be realistic about entry-level vs. experienced professionals.
  - Time Investment: Explain the required time for education, certifications, and gaining experience to become established.
  - Career Path Flowchart: Outline a typical career progression in 3 to 5 steps, from entry-level to senior positions. Each step should have a title and a brief description.
  `,
});

const getOccupationDetailsFlow = ai.defineFlow(
  {
    name: 'getOccupationDetailsFlow',
    inputSchema: GetOccupationDetailsInputSchema,
    outputSchema: GetOccupationDetailsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to get occupation details from AI.");
    }
    return output;
  }
);
