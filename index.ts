#!/usr/bin/env node

import inquirer from "inquirer";

const calculateBMI = async () => {
    try {
        // Prompt for weight input
        const weightInKG = await inquirer.prompt({
            name: "weight",
            message: "Please enter your weight in KG to calculate your BMI:",
            type: "number"
        });

        // Prompt for height input
        const heightInMeter = await inquirer.prompt({
            name: "height",
            message: "Please enter your height in meters to calculate your BMI:",
            type: "number"
        });

        // Calculate BMI
        const weight = weightInKG.weight;
        const height = heightInMeter.height;
        const bmi = weight / (height * height);

        // Determine BMI category
        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi < 24.9) {
            bmiCategory = "Normal weight";
        } else if (bmi < 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obesity";
        }

        // Output BMI and category
        console.log(`Your BMI is ${bmi.toFixed(2)}. You are ${bmiCategory}.`);
    } catch (error) {
        // Handle errors
        console.error("An error occurred:", error);
    }
};

// Execute the BMI calculation function
calculateBMI();
