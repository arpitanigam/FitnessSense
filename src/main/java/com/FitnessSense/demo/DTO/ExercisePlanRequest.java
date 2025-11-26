package com.FitnessSense.demo.DTO;


public class ExercisePlanRequest {
    private int age;
    private String gender;
    private int height;
    private double currentWeight;
    private double targetWeight;
    private int activeDays;

    // Getters and setters
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public int getHeight() { return height; }
    public void setHeight(int height) { this.height = height; }

    public double getCurrentWeight() { return currentWeight; }
    public void setCurrentWeight(double currentWeight) { this.currentWeight = currentWeight; }

    public double getTargetWeight() { return targetWeight; }
    public void setTargetWeight(double targetWeight) { this.targetWeight = targetWeight; 
    }
    

    public int getActiveDays() { return activeDays; }
    public void setActiveDays(int activeDays) { this.activeDays = activeDays; }

    @Override
    public String toString() {
        return "ExercisePlanRequest{" +
                "age=" + age +
                ", gender='" + gender + '\'' +
                ", height=" + height +
                ", currentWeight=" + currentWeight +
                ", targetWeight=" + targetWeight +
                ", activeDays=" + activeDays +
                '}';
    }
}


