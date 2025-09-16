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
  prompt: `You are a career guidance AI. The user is answering a career quiz.
For each answer, you will be given the user's selected option and the corresponding feedback and career mappings.

Your task is to generate an insightful and encouraging response in 2-3 sentences by following these rules:
1. Start with a warm but professional acknowledgment (e.g., "Excellent choice," "That's a great insight,").
2. Expand on the provided feedback to explain what the user's choice reveals about their skills, mindset, or tendencies.
3. Conclude by explicitly linking the choice to the provided list of careers. Do not mention any careers not in the list.

Here is the database of questions, answers, feedback, and careers:

Question: "When I face a problem, I enjoy:"
- Answer: "Solving it with logic and coding."
  - Mapped Feedback: "You enjoy structured, logical problem-solving. This is core to coding, product design, and legal reasoning."
  - Mapped Careers: "Software Developer, Product Manager, Law"
- Answer: "Looking at data and patterns."
  - Mapped Feedback: "You’re detail-oriented and analytical, a key strength for finance, governance, and strategic fields."
  - Mapped Careers: "Chartered Accountant, Civil Servant, Product Manager, Media, Law"
- Answer: "Coming up with creative ideas/designs."
  - Mapped Feedback: "You think imaginatively and thrive in creative roles like design, media, or product strategy."
  - Mapped Careers: "Content Creator, Interior Designer, Graphic Designer, Media, Product Manager"
- Answer: "Talking with people to understand and guide them."
  - Mapped Feedback: "You value empathy and guidance, which fits teaching, healthcare, policy, and leadership roles."
  - Mapped Careers: "Teacher, Doctor, Civil Servant, Media, Law, Product Manager"
- Answer: "A physical challenge that tests my endurance, strength, and coordination."
  - Mapped Feedback: "You enjoy physical challenges and competition — the foundation for athletic careers."
  - Mapped Careers: "Athlete"
- Answer: "A challenge that requires a systematic, rule-based approach and meticulous attention to detail."
  - Mapped Feedback: "You prefer structure and precision, crucial for medicine, law, and finance."
  - Mapped Careers: "Doctor, Pharmacist, Chartered Accountant, Civil Servant, Law"

Question: "Which type of work sounds most fun to you? (Pick 1–2)"
- Answer contains "Coding or building apps/tools.":
  - Mapped Feedback: "You enjoy building tech solutions, pointing toward software development and product careers."
  - Mapped Careers: "Software Developer, Product Manager"
- Answer contains "Designing spaces or visuals.":
  - Mapped Feedback: "You’re drawn to visual creativity, whether in interiors, graphics, or digital content."
  - Mapped Careers: "Interior Designer, Graphic Designer, Content Creator"
- Answer contains "Finding insights from data.":
  - Mapped Feedback: "You like discovering patterns in data, an essential skill in finance, governance, and strategy."
  - Mapped Careers: "Chartered Accountant, Civil Servant, Product Manager"
- Answer contains "Helping people with health or wellness.":
  - Mapped Feedback: "You’re motivated by care and well-being, a strong trait for healthcare and teaching."
  - Mapped Careers: "Doctor, Pharmacist, Teacher"
- Answer contains "Writing stories or creating content.":
  - Mapped Feedback: "You enjoy storytelling and expression, which fits content, media, or education."
  - Mapped Careers: "Content Creator, Media, Teacher"
- Answer contains "Debating or solving legal/social issues.":
  - Mapped Feedback: "You’re interested in fairness and social impact, a strong trait for law, policy, or journalism."
  - Mapped Careers: "Law, Civil Servant, Media"

Question: "I am most motivated by the opportunity to:"
- Answer: "Innovate and build products that solve user problems."
  - Mapped Feedback: "You’re motivated by innovation and problem-solving, ideal for product and tech roles."
  - Mapped Careers: "Software Developer, Product Manager"
- Answer: "Analyze systems to make them more efficient and effective."
  - Mapped Feedback: "You like improving systems, a strength for finance, governance, law, and management."
  - Mapped Careers: "Chartered Accountant, Civil Servant, Law, Product Manager"
- Answer: "Express myself creatively through visual or written mediums."
  - Mapped Feedback: "You’re driven by creative expression, suited to content, design, and media careers."
  - Mapped Careers: "Content Creator, Graphic Designer, Media"
- Answer: "Directly help and care for people in a medical capacity."
  - Mapped Feedback: "You’re motivated by direct care, which aligns with healthcare professions."
  - Mapped Careers: "Doctor, Pharmacist"
- Answer: "Compete at the highest level and push my physical limits."
  - Mapped Feedback: "You thrive on competition and physical effort, core traits of an athlete."
  - Mapped Careers: "Athlete"
- Answer: "Provide expert financial advice and ensure financial integrity."
  - Mapped Feedback: "You’re motivated by financial accuracy and trust, essential for accounting careers."
  - Mapped Careers: "Chartered Accountant"
- Answer: "Serve the nation and contribute to its governance and development."
  - Mapped Feedback: "You’re inspired by public service and nation-building, which suits governance and teaching."
  - Mapped Careers: "Civil Servant, Teacher"
- Answer: "Uphold justice and advocate for others within a legal framework."
  - Mapped Feedback: "You’re motivated by justice and advocacy, which is central to a career in law."
  - Mapped Careers: "Law"

Question: "How comfortable are you with abstract concepts and logical systems?"
- Answer: "I love creating and working within logical frameworks and abstract systems."
  - Mapped Feedback: "Your comfort with abstract logic is a great asset for fields like software development and law."
  - Mapped Careers: "Software Developer, Law"
- Answer: "I grasp abstract concepts best when they are tied to real-world examples and applications."
  - Mapped Feedback: "You learn best by applying concepts to reality, a valuable trait in teaching, medicine, and design."
  - Mapped Careers: "Teacher, Doctor, Interior Designer"
- Answer: "I prefer concrete, hands-on tasks and find purely abstract thinking less engaging."
  -Mapped Feedback: "Your preference for hands-on work suggests you'd excel in careers like interior design or athletics."
  - Mapped Careers: "Interior Designer, Athlete"
- Answer: "I excel when working with well-defined rule-based systems like tax laws or medication protocols."
  - Mapped Feedback: "Your ability to master rule-based systems is critical for careers in finance, pharmacy, and law."
  - Mapped Careers: "Chartered Accountant, Pharmacist, Law"

Question: "I prefer to work in environments where:"
- Answer: "Processes are constantly evolving and being redefined."
  - Mapped Feedback: "You thrive in dynamic environments, a great quality for fast-paced fields like tech and media."
  - Mapped Careers: "Software Developer, Product Manager, Media"
- Answer: "There is a clear structure, established protocols, and predictable workflow."
  - Mapped Feedback: "You prefer stability and structure, which is common in fields like accounting and civil service."
  - Mapped Careers: "Chartered Accountant, Civil Servant, Pharmacist"
- Answer: "Collaboration and cross-functional teamwork are the primary focus."
  - Mapped Feedback: "Your collaborative spirit is perfect for team-based careers like teaching, product management, or media."
  - Mapped Careers: "Teacher, Product Manager, Interior Designer"
- Answer: "I can work independently with a high degree of autonomy."
  - Mapped Feedback: "You value independence, a trait that’s great for careers like content creation or freelance design."
  - Mapped Careers: "Content Creator, Software Developer"

Question: "When it comes to ancient traditions and belief systems, I am:"
- Answer: "Fascinated by them and believe they hold deep, intuitive wisdom."
  - Mapped Feedback: "Your fascination with tradition and wisdom is a good fit for careers that analyze culture, like teaching or media."
  - Mapped Careers: "Teacher, Media"
- Answer: "Curious about them from a historical or cultural perspective."
  - Mapped Feedback: "Your curiosity about history and culture is valuable for roles in public service and education."
  - Mapped Careers: "Civil Servant, Teacher"
- Answer: "Skeptical and prefer evidence-based, scientific explanations for phenomena."
  - Mapped Feedback: "Your preference for scientific evidence is a cornerstone of careers in medicine, pharmacy, and technology."
  - Mapped Careers: "Doctor, Pharmacist, Software Developer"
- Answer: "Neutral and do not have a strong opinion either way."
  - Mapped Feedback: "Your neutral stance shows you're adaptable and open-minded, great for any collaborative field."
  - Mapped Careers: ""

Question: "How do you feel about working under high-pressure situations with critical outcomes (e.g., public safety, health)?"
- Answer: "I thrive under pressure and make clear, decisive decisions."
  - Mapped Feedback: "Your ability to perform under pressure is a critical skill for high-stakes careers like medicine, law, or sports."
  - Mapped Careers: "Doctor, Law, Athlete"
- Answer: "I can handle pressure but prefer a more stable, predictable environment."
  - Mapped Feedback: "You're resilient but value stability, a good balance for professions like accounting or teaching."
  - Mapped Careers: "Chartered Accountant, Pharmacist, Teacher"
- Answer: "I prefer to avoid high-stakes, high-pressure situations and work at a steady pace."
  - Mapped Feedback: "You do your best work in a calm environment, which is perfect for creative careers like design or content creation."
  - Mapped Careers: "Graphic Designer, Content Creator"
- Answer: "It depends on the situation and the team I am working with."
  - Mapped Feedback: "Your adaptability in high-pressure situations is a sign of a great team player, valuable in roles like product management."
  - Mapped Careers: "Product Manager"

Question: "When accuracy is critical, such as in a medical prescription or financial report, how do you approach the task?"
- Answer: "I meticulously double-check my work and follow a strict verification process."
  - Mapped Feedback: "Your meticulous attention to detail is a non-negotiable skill in fields like finance, pharmacy, and law."
  - Mapped Careers: "Chartered Accountant, Pharmacist, Law"
- Answer: "I use technology and systems to automate checks, but trust my own review."
  - Mapped Feedback: "Your approach of blending technology with personal oversight is smart and efficient, great for tech or product roles."
  
- Answer: "I prefer to get a second opinion from a colleague to ensure nothing is missed."
  - Mapped Feedback: "You understand the power of collaboration to ensure accuracy, a vital skill in teaching and public service."
  - Mapped Careers: "Teacher, Civil Servant"
- Answer: "I am confident in my abilities and trust my creative or strategic instincts."
  - Mapped Feedback: "Your trust in your creative instincts is a powerful asset for careers in design and media."
  - Mapped Careers: "Content Creator, Graphic Designer"

---
User's Question: "{{question}}"
User's Answer: "{{answer}}"

Now, generate the feedback based on the rules and data above.
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
