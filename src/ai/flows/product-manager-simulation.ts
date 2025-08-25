// src/ai/flows/product-manager-simulation.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for a product manager simulation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ProductManagerSimulationInputSchema = z.object({
  targetAudience: z.string().describe("The user's choice for the target audience (e.g., 'Students', 'Working Professionals', 'Families')."),
  features: z.string().describe("The user's choice for the primary feature focus (e.g., 'Fast Delivery', 'Discounts', 'Premium Restaurants')."),
  businessModel: z.string().describe("The user's choice for the business model (e.g., 'Subscription', 'Ads', 'Pay-per-order')."),
});
export type ProductManagerSimulationInput = z.infer<typeof ProductManagerSimulationInputSchema>;

export const ProductManagerSimulationOutputSchema = z.object({
  summary: z.string().describe("A summary explaining how the user's choices would affect the product's growth, revenue, and customer satisfaction, highlighting trade-offs."),
});
export type ProductManagerSimulationOutput = z.infer<typeof ProductManagerSimulationOutputSchema>;


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
