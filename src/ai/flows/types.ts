import { z } from 'zod';

export const SuggestInteriorOccupationsInputSchema = z.object({
  quizResults: z
    .string()
    .describe('The results of the user quiz as a string.'),
  country: z.string().describe('The country of the user.'),
  age: z.number().describe('The age of the user.'),
});
export type SuggestInteriorOccupationsInput = z.infer<
  typeof SuggestInteriorOccupationsInputSchema
>;

export const SuggestInteriorOccupationsOutputSchema = z.object({
  suggestedOccupations: z
    .array(z.string())
    .describe(
      'A list of suggested interior design occupations based on the quiz results.'
    ),
});
export type SuggestInteriorOccupationsOutput = z.infer<
  typeof SuggestInteriorOccupationsOutputSchema
>;

export const GetOccupationDetailsInputSchema = z.object({
  occupation: z.string().describe('The name of the interior design occupation.'),
});
export type GetOccupationDetailsInput = z.infer<typeof GetOccupationDetailsInputSchema>;

export const GetOccupationDetailsOutputSchema = z.object({
  advantages: z
    .array(z.string())
    .describe('A list of advantages for this occupation.'),
  disadvantages: z
    .array(z.string())
    .describe('A list of disadvantages and potential negative aspects of this occupation. This is very important to be accurate and realistic.'),
  skills: z
    .array(z.string())
    .describe('A list of skills required for this occupation.'),
  fees: z.string().describe('An overview of the typical fee structure or salary expectations.'),
  timeInvestment: z.string().describe('The typical time investment for education and entry into this occupation.'),
  careerPath: z
    .array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      })
    )
    .describe('A flowchart-like progression of a typical career path in this occupation, with 3-5 steps.'),
});
export type GetOccupationDetailsOutput = z.infer<typeof GetOccupationDetailsOutputSchema>;
