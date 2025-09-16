// src/ai/flows/get-quiz-feedback.ts
'use server';

/**
 * @fileOverview This file defines a function to get precise, deterministic feedback for a quiz answer.
 */

import {
  QuizFeedbackInputSchema,
  QuizFeedbackOutputSchema,
  type QuizFeedbackInput,
  type QuizFeedbackOutput,
} from '@/ai/flows/types';

// This mapping contains the exact feedback for each quiz answer.
const feedbackDatabase: Record<string, string> = {
    // Q1
    'Solving it with logic and coding.': "Choosing 'Solving it with logic and coding' shows you enjoy structured problem-solving and systematic thinking. This highlights your analytical and technical strengths, valuable in careers that combine logic and innovation, such as Software Developer, Product Manager, and Law.",
    'Looking at data and patterns.': "Selecting 'Looking at data and patterns' indicates you are analytical and detail-focused. This strength in spotting trends is crucial for careers in finance, governance, and strategy, including Chartered Accountant, Civil Servant, and Product Manager.",
    'Coming up with creative ideas/designs.': "Opting for 'Coming up with creative ideas/designs' shows you thrive on imagination and originality. This is a core trait for creative paths like Content Creator, Interior Designer, Graphic Designer, and Product Manager.",
    'Talking with people to understand and guide them.': "Choosing to 'Talk with people to understand and guide them' highlights your strong communication and empathy skills. These are foundational for careers in teaching, healthcare, policy, and leadership, such as Teacher, Doctor, or Civil Servant.",
    'A physical challenge that tests my endurance, strength, and coordination.': "Your preference for a physical challenge reveals a drive for competition and performance. This is the foundation for a career as a professional Athlete, where discipline and physical excellence are key.",
    'A challenge that requires a systematic, rule-based approach and meticulous attention to detail.': "Selecting a systematic, rule-based challenge shows you value precision and structure. This meticulous approach is vital in regulated fields like healthcare and finance, including careers like Doctor, Pharmacist, and Chartered Accountant.",
    // Q2
    'Coding or building apps/tools.': "An interest in 'Coding or building apps/tools' points to a passion for creating technical solutions. This is a strong indicator for careers focused on development and product innovation, such as Software Developer and Product Manager.",
    'Designing spaces or visuals.': "Being drawn to 'Designing spaces or visuals' indicates a strong creative and aesthetic sense. This aligns well with careers where visual storytelling is key, like Interior Designer, Graphic Designer, or Content Creator.",
    'Finding insights from data.': "Enjoying 'Finding insights from data' highlights your analytical mindset. This is an essential skill in data-driven fields like finance, governance, or business strategy, connecting to roles like Chartered Accountant or Product Manager.",
    'Helping people with health or wellness.': "Your focus on 'Helping people with health or wellness' shows a deep sense of care and support for others. This is a natural strength for professions centered on well-being, such as Doctor, Pharmacist, or Teacher.",
    'Writing stories or creating content.': "A passion for 'Writing stories or creating content' reveals your expressive and creative talents. This points directly toward careers built on communication and storytelling, like Content Creator, Media, or Teacher.",
    'Debating or solving legal/social issues.': "Being motivated by 'Debating or solving legal/social issues' suggests a strong interest in justice and systemic problem-solving. This aligns with careers in law, public policy, and journalism, such as Lawyer or Civil Servant.",
    // Q3
    'Innovate and build products that solve user problems.': "Your motivation to 'Innovate and build products' shows a user-centric and forward-thinking mindset. This is ideal for roles that bridge technology and user needs, like Software Developer and Product Manager.",
    'Analyze systems to make them more efficient and effective.': "A drive to 'Analyze systems for efficiency' highlights your strategic and analytical thinking. This is a key strength for improving processes in fields like finance, law, and management, fitting careers like Chartered Accountant or Product Manager.",
    'Express myself creatively through visual or written mediums.': "Being driven by creative expression is perfect for careers where originality is valued. This aligns with roles like Content Creator, Graphic Designer, and other Media professions.",
    'Directly help and care for people in a medical capacity.': "Your desire to 'Directly help and care for people' shows a strong sense of empathy and service. This is the core of patient-facing healthcare professions like Doctor and Pharmacist.",
    'I love creating and working within logical frameworks': "A love for 'creating and working within logical frameworks' indicates a strength in abstract and systematic thinking. This is foundational for careers that require building or interpreting complex systems, such as Software Developer and Lawyer.",
    'I grasp abstract concepts best when they are tied to real-world examples': "Grasping concepts through 'real-world examples' shows you are an applied and practical thinker. This is a valuable trait for careers where theoretical knowledge must be translated into tangible outcomes, like in teaching or design.",
    'I prefer concrete, hands-on tasks': "A preference for 'concrete, hands-on tasks' highlights a practical, tangible approach to work. This is well-suited for careers where the output is a physical or directly observable result, such as Interior Designer or Athlete.",
    'I excel when working with well-defined rule-based systems': "Excelling in 'well-defined rule-based systems' points to a high degree of precision and comfort with compliance. This is essential for professions governed by strict standards, such as Chartered Accountant, Pharmacist, and Law.",
    'Processes are constantly evolving': "Thriving where 'processes are constantly evolving' shows you are adaptable and innovative. This mindset is crucial in dynamic fields like technology and media, fitting roles like Software Developer and Product Manager.",
    'There is a clear structure, established protocols': "A preference for 'clear structure and established protocols' indicates a strength in process-oriented and stable environments. This is a key trait for professions that rely on accuracy and established procedures, such as Chartered Accountant or Pharmacist.",
    'Collaboration and cross-functional teamwork': "A preference for 'collaboration and teamwork' highlights strong interpersonal and communication skills. This is essential for roles that require coordinating with diverse teams, such as Teacher, Product Manager, or Interior Designer.",
    'I can work independently with a high degree of autonomy': "Thriving with 'independent autonomy' shows you are self-directed and disciplined. This is ideal for roles that require self-motivation and personal accountability, like a Content Creator or specialized Software Developer.",
    'I thrive under pressure': "Thriving 'under pressure' demonstrates resilience and decisive action-making capabilities. This is a critical trait for high-stakes professions such as Doctor, Lawyer, or professional Athlete.",
    'I meticulously double-check my work': "Meticulously 'double-checking your work' reveals a high attention to detail and a commitment to accuracy. This is a non-negotiable skill in fields where errors have significant consequences, such as in finance or healthcare."
};


/**
 * Retrieves precise, pre-defined feedback for a given quiz answer.
 * This function uses a deterministic lookup and does not call an AI model.
 * @param input The user's quiz answer.
 * @returns The mapped feedback and career insights.
 */
export async function getQuizFeedback(
  input: QuizFeedbackInput
): Promise<QuizFeedbackOutput> {
  const { answer } = input;

  const feedbackText = feedbackDatabase[answer] || "That's an interesting perspective. Let's continue to the next question to learn more about your preferences.";

  return {
    feedback: feedbackText,
  };
}
