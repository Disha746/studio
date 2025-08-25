// src/ai/flows/product-manager-simulation.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for a product manager simulation.
 */

import { ai } from '@/ai/genkit';
import { ProductManagerSimulationInputSchema, ProductManagerSimulationOutputSchema, type ProductManagerSimulationInput } from './types';


export async function getProductManagerSimulationResult(
  input: ProductManagerSimulationInput
) {
  return productManagerSimulationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productManagerSimulationPrompt',
  input: { schema: ProductManagerSimulationInputSchema },
  output: { schema: ProductManagerSimulationOutputSchema },
  prompt: `You are a simulation engine for a career counseling app. A user is playing the role of a Product Manager for a new food delivery app.

  The user has made the following decisions:
  - Target Audience: {{{targetAudience}}}
  - Primary Feature Focus: {{{features}}}
  - Business Model: {{{businessModel}}}

  Your Task:
  Generate a concise summary (2-3 sentences) explaining how this combination of choices would likely affect the product's growth, revenue, and customer satisfaction. Highlight the potential trade-offs and interdependencies between these decisions. For example, focusing on 'Discounts' for 'Students' might drive growth but hurt revenue margins with a 'Pay-per-order' model. Be realistic and insightful.
  `,
});

const productManagerSimulationFlow = ai.defineFlow(
  {
    name: 'productManagerSimulationFlow',
    inputSchema: ProductManagerSimulationInputSchema,
    outputSchema: ProductManagerSimulationOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to get simulation result from AI.");
    }
    return output;
  }
);
