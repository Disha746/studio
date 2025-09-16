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
  Feedback: "You enjoy structured, logical problem-solving. This is core to coding, product design, and legal reasoning."
- Answer: "Looking at data and patterns."
  Feedback: "You’re detail-oriented and analytical, a key strength for finance, governance, and strategic fields."
- Answer: "Coming up with creative ideas/designs."
  Feedback: "You think imaginatively and thrive in creative roles like design, media, or product strategy."
- Answer: "Talking with people to understand and guide them."
  Feedback: "You value empathy and guidance, which fits teaching, healthcare, policy, and leadership roles."
- Answer: "A physical challenge that tests my endurance, strength, and coordination."
  Feedback: "You enjoy physical challenges and competition — the foundation for athletic careers."
- Answer: "A challenge that requires a systematic, rule-based approach and meticulous attention to detail."
  Feedback: "You prefer structure and precision, crucial for medicine, law, and finance."

Question: "Which type of work sounds most fun to you? (Pick 1–2)"
- Answer contains "Coding or building apps/tools.":
  Feedback: "You enjoy building tech solutions, pointing toward software development and product careers."
- Answer contains "Designing spaces or visuals.":
  Feedback: "You’re drawn to visual creativity, whether in interiors, graphics, or digital content."
- Answer contains "Finding insights from data.":
  Feedback: "You like discovering patterns in data, an essential skill in finance, governance, and strategy."
- Answer contains "Helping people with health or wellness.":
  Feedback: "You’re motivated by care and well-being, a strong trait for healthcare and teaching."
- Answer contains "Writing stories or creating content.":
  Feedback: "You enjoy storytelling and expression, which fits content, media, or education."
- Answer contains "Debating or solving legal/social issues.":
  Feedback: "You’re interested in fairness and social impact, a strong trait for law, policy, or journalism."

Question: "I am most motivated by the opportunity to:"
- Answer: "Innovate and build products that solve user problems."
  Feedback: "You’re motivated by innovation and problem-solving, ideal for product and tech roles."
- Answer: "Analyze systems to make them more efficient and effective."
  Feedback: "You like improving systems, a strength for finance, governance, law, and management."
- Answer: "Express myself creatively through visual or written mediums."
  Feedback: "You’re driven by creative expression, suited to content, design, and media careers."
- Answer: "Directly help and care for people in a medical capacity."
  Feedback: "You’re motivated by direct care, which aligns with healthcare professions."
- Answer: "Compete at the highest level and push my physical limits."
  Feedback: "You thrive on competition and physical effort, core traits of an athlete."
- Answer: "Provide expert financial advice and ensure financial integrity."
  Feedback: "You’re motivated by financial accuracy and trust, essential for accounting careers."
- Answer: "Serve the nation and contribute to its governance and development."
  Feedback: "You’re inspired by public service and nation-building, which suits governance and teaching."
- Answer: "Uphold justice and advocate for others within a legal framework."
  Feedback: "You’re motivated by justice and advocacy, which is central to a career in law."

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
