package com.FitnessSense.demo.Helper;

public class ExercisePromptBuilder {

    public static String buildExercisePlanPrompt(
            int age,
            String gender,
            double height,
            double currentWeight,
            double targetWeight,
            int activeDays
    ) {
        return """
            You are a fitness coach. Based on the user's data, create a weekly exercise plan.

            IMPORTANT RULES:
            - You MUST return ONLY valid JSON.
            - Do NOT add explanations or text outside the JSON.
            - The JSON MUST match this structure exactly:
            {
              "plan": [
                {
                  "exercise_name": "string",
                  "sets": number,
                  "reps": number,
                  "day": "string"
                }
              ]
            }

            User data:
            {
              "age": %d,
              "gender": "%s",
              "height": %.1f,
              "current_weight": %.1f,
              "target_weight": %.1f,
              "active_days": %d
            }
            """.formatted(
                age, gender, height, currentWeight, targetWeight, activeDays
            );
    }
}
