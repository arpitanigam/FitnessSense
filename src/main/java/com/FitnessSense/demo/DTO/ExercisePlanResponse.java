package com.FitnessSense.demo.DTO;

public class ExercisePlanResponse {
    private String message;

    public ExercisePlanResponse(String message) { this.message = message; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}