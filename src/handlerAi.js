import { GoogleGenAI } from "@google/genai";

const AI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: AI_API_KEY });

export async function getResponsefromGem(data) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `You are a fitness expert tasked with creating personalized training plans. Based on the user's inputs, generate a comprehensive weekly training program that is practical, safe, and goal-oriented.

## Input Variables:
- **Training Days Per Week**: ${data.trainingDays}
- **Training Method**: ${data.trainingMethod}
- **Primary Goal**: ${data.goal}
- **Fitness Level**: ${data.fitnessLevel}
- **Gender**: ${data.gender}

## Output Requirements:

### 1. Program Overview
- Brief summary of the plan's focus and approach
- Expected timeline for visible results
- Key principles behind the program design

### 2. Weekly Schedule Structure
Present a clear day-by-day breakdown using this format:

**Day X: [Focus Area]**
- Primary exercises (3-5 exercises max)
- Sets x Reps or Duration
- Rest periods
- Intensity notes

### 3. Progression Guidelines
- How to advance week-to-week
- When to increase weight/intensity/duration
- Signs of readiness for progression

### 4. Recovery and Rest
- Designated rest days and their importance
- Active recovery suggestions
- Sleep and nutrition reminders

### 5. Important Notes
- Safety considerations
- Modification options for beginners/advanced
- Equipment requirements (if any)

## Formatting Rules:
- Use clear headings and subheadings
- Keep exercise descriptions concise but specific
- Include specific numbers (sets, reps, duration)
- Maintain professional, encouraging tone
- CRITICAL: Keep total response under 800 words

## Example Input:
Training Days: 4 days per week
Method: Strength Training
Goal: Muscle Gain

Generate a complete, actionable training plan based on these parameters. Give output in a structured format that is easy to follow and implement. Ensure the plan is tailored to the user's fitness level and goals, providing a realistic and effective approach to achieving their desired results.`,
  });

  return response.text.trim();
}
