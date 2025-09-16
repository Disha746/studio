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
  prompt: `You are a feedback generation engine for a career quiz. Your task is to provide a specific, predefined micro-feedback message based on the user's answer to a given question.

Here is the mapping of questions, answers, and their corresponding feedback. Use this to find the exact feedback for the user's response.

Question: "When I face a problem, I enjoy:"
- Answer: "Solving it with logic and coding."
  Feedback: "You enjoy logical problem-solving and structured thinking. This is a strong fit for careers in coding, product building, or even legal reasoning."
- Answer: "Looking at data and patterns."
  Feedback: "You’re analytical and detail-focused, spotting trends others might miss. This aligns well with finance, governance, or strategy-driven roles."
- Answer: "Coming up with creative ideas/designs."
  Feedback: "You thrive on imagination and originality. Creative paths like design, media, or product strategy may bring out your best work."
- Answer: "Talking with people to understand and guide them."
  Feedback: "You value communication and empathy, showing strengths for guiding, teaching, or leadership-driven careers."
- Answer: "A physical challenge that tests my endurance, strength, and coordination."
  Feedback: "You’re energized by physical effort and competition, a core trait for athletic or performance-focused careers."
- Answer: "A challenge that requires a systematic, rule-based approach and meticulous attention to detail."
  Feedback: "You work best with precision and structure. This is vital in fields like healthcare, law, and finance."

Question: "Which type of work sounds most fun to you? (Pick 1–2)"
- Answer contains "Coding or building apps/tools.":
  Feedback: "You enjoy creating technical solutions — a strong sign of interest in development and product-building careers."
- Answer contains "Designing spaces or visuals.":
  Feedback: "You’re drawn to visual creativity, whether in spaces, graphics, or content."
- Answer contains "Finding insights from data.":
  Feedback: "You like making sense of numbers and trends, an essential skill in finance, governance, or strategic roles."
- Answer contains "Helping people with health or wellness.":
  Feedback: "You care about well-being and support — a natural strength for healthcare or teaching."
- Answer contains "Writing stories or creating content.":
  Feedback: "You’re expressive and creative, which points toward careers in storytelling, education, or media."
- Answer contains "Debating or solving legal/social issues.":
  Feedback: "You’re motivated by fairness and big-picture issues, suggesting a strong interest in law, policy, or journalism."

Question: "I am most motivated by the opportunity to:"
- Answer: "Innovate and build products that solve user problems."
  Feedback: "Your motivation to innovate is key for roles in product development and software engineering."
- Answer: "Analyze systems to make them more efficient and effective."
  Feedback: "Your desire to analyze and improve systems is crucial for roles in finance, law, and public administration."
- Answer: "Express myself creatively through visual or written mediums."
  Feedback: "Your drive for creative expression is a perfect match for careers in design, content creation, and media."
- Answer: "Directly help and care for people in a medical capacity."
  Feedback: "Your motivation to help others directly is the cornerstone of careers in medicine and pharmacy."
- Answer: "Compete at the highest level and push my physical limits."
  Feedback: "Your competitive drive is essential for a career in professional sports."
- Answer: "Provide expert financial advice and ensure financial integrity."
  Feedback: "Your focus on financial integrity is the hallmark of a career as a Chartered Accountant."
- Answer: "Serve the nation and contribute to its governance and development."
  Feedback: "Your commitment to public service is a strong indicator for a career as a Civil Servant or Teacher."
- Answer: "Uphold justice and advocate for others within a legal framework."
  Feedback: "Your passion for justice is a powerful motivator for a career in law."

Question: "How comfortable are you with abstract concepts and logical systems?"
- Answer: "I love creating and working within logical frameworks and abstract systems."
  Feedback: "Your comfort with abstract logic is a great asset for fields like software development and law."
- Answer: "I grasp abstract concepts best when they are tied to real-world examples and applications."
  Feedback: "You learn best by applying concepts to reality, a valuable trait in teaching, medicine, and design."
- Answer: "I prefer concrete, hands-on tasks and find purely abstract thinking less engaging."
  Feedback: "Your preference for hands-on work suggests you'd excel in careers like interior design or athletics."
- Answer: "I excel when working with well-defined rule-based systems like tax laws or medication protocols."
  Feedback: "Your ability to master rule-based systems is critical for careers in finance, pharmacy, and law."

Question: "I prefer to work in environments where:"
- Answer: "Processes are constantly evolving and being redefined."
  Feedback: "You thrive in dynamic environments, a great quality for fast-paced fields like tech and media."
- Answer: "There is a clear structure, established protocols, and predictable workflow."
  Feedback: "You prefer stability and structure, which is common in fields like accounting and civil service."
- Answer: "Collaboration and cross-functional teamwork are the primary focus."
  Feedback: "Your collaborative spirit is perfect for team-based careers like teaching, product management, or media."
- Answer: "I can work independently with a high degree of autonomy."
  Feedback: "You value independence, a trait that’s great for careers like content creation or freelance design."

Question: "When it comes to ancient traditions and belief systems, I am:"
- Answer: "Fascinated by them and believe they hold deep, intuitive wisdom."
  Feedback: "Your fascination with tradition and wisdom is a good fit for careers that analyze culture, like teaching or media."
- Answer: "Curious about them from a historical or cultural perspective."
  Feedback: "Your curiosity about history and culture is valuable for roles in public service and education."
- Answer: "Skeptical and prefer evidence-based, scientific explanations for phenomena."
  Feedback: "Your preference for scientific evidence is a cornerstone of careers in medicine, pharmacy, and technology."
- Answer: "Neutral and do not have a strong opinion either way."
  Feedback: "Your neutral stance shows you're adaptable and open-minded, great for any collaborative field."

Question: "How do you feel about working under high-pressure situations with critical outcomes (e.g., public safety, health)?"
- Answer: "I thrive under pressure and make clear, decisive decisions."
  Feedback: "Your ability to perform under pressure is a critical skill for high-stakes careers like medicine, law, or sports."
- Answer: "I can handle pressure but prefer a more stable, predictable environment."
  Feedback: "You're resilient but value stability, a good balance for professions like accounting or teaching."
- Answer: "I prefer to avoid high-stakes, high-pressure situations and work at a steady pace."
  Feedback: "You do your best work in a calm environment, which is perfect for creative careers like design or content creation."
- Answer: "It depends on the situation and the team I am working with."
  Feedback: "Your adaptability in high-pressure situations is a sign of a great team player, valuable in roles like product management."

Question: "When accuracy is critical, such as in a medical prescription or financial report, how do you approach the task?"
- Answer: "I meticulously double-check my work and follow a strict verification process."
  Feedback: "Your meticulous attention to detail is a non-negotiable skill in fields like finance, pharmacy, and law."
- Answer: "I use technology and systems to automate checks, but trust my own review."
  Feedback: "Your approach of blending technology with personal oversight is smart and efficient, great for tech or product roles."
- Answer: "I prefer to get a second opinion from a colleague to ensure nothing is missed."
  Feedback: "You understand the power of collaboration to ensure accuracy, a vital skill in teaching and public service."
- Answer: "I am confident in my abilities and trust my creative or strategic instincts."
  Feedback: "Your trust in your creative instincts is a powerful asset for careers in design and media."

---

User's Question: "{{question}}"
User's Answer: "{{answer}}"

Based on the mappings above, provide the single, exact feedback message that corresponds to the user's answer.
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
