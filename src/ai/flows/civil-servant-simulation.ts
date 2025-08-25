// src/ai/flows/civil-servant-simulation.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for a civil servant decision-making simulation.
 */

import { ai } from '@/ai/genkit';
import { SimulationInputSchema, SimulationOutputSchema, type SimulationInput } from './types';


export async function getSimulationConsequence(
  input: SimulationInput
) {
  return simulationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'civilServantSimulationPrompt',
  input: { schema: SimulationInputSchema },
  output: { schema: SimulationOutputSchema },
  prompt: `You are a simulation engine for a career counseling app. A user is playing the role of a District Collector during a flood crisis.

  The Scenario: A severe flood has damaged houses and disrupted the community. You have limited funds available.

  The user made the following decision:
  - Choice A: Allocate all funds to immediate rescue operations.
  - Choice B: Focus resources on rebuilding essential public infrastructure like schools.
  - Choice C: Prioritize providing immediate food and shelter to those displaced.

  User's Choice: {{{decision}}}

  Your Task:
  1.  Generate a unique, non-judgmental consequence for the user's chosen action.
  2.  Provide a brief explanation that highlights how a civil servant must balance urgency, fairness, and resources in real-world situations. Do not judge the user's choice, but explain the trade-offs.
  `,
});

const simulationFlow = ai.defineFlow(
  {
    name: 'simulationFlow',
    inputSchema: SimulationInputSchema,
    outputSchema: SimulationOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to get simulation consequence from AI.");
    }
    return output;
  }
);
