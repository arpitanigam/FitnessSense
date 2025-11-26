package com.FitnessSense.demo.Controller;

import java.awt.PageAttributes.MediaType;
import java.net.http.HttpHeaders;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import com.FitnessSense.demo.DTO.ExercisePlanRequest;
import com.FitnessSense.demo.DTO.ExercisePlanResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow React dev server
public class ExercisePlanController {

    private final RestTemplate restTemplate = new RestTemplate();

	/*
	 * @PostMapping("/get-exercise-plan") public Object getExercisePlan(@RequestBody
	 * ExercisePlanRequest request) { // Log the received data (optional)
	 * System.out.println("Received form data from React: " + request);
	 * 
	 * String targetUrl = "http://localhost:1234/get-exercise-plan";
	 * 
	 * org.springframework.http.HttpHeaders headers = new
	 * org.springframework.http.HttpHeaders();
	 * headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
	 * 
	 * HttpEntity<ExercisePlanRequest> entity = new HttpEntity<>(request, headers);
	 * 
	 * ResponseEntity<Object> response = restTemplate.postForEntity(targetUrl,
	 * entity, Object.class);
	 * 
	 * 
	 * // Return the response from external backend to React return
	 * response.getBody(); }
	 */
    @PostMapping("/get-exercise-plan")
    public Map<String, String> getExercisePlan(@RequestBody ExercisePlanRequest request) {
        Map<String, String> mockResponse = new HashMap<>();
        mockResponse.put("plan", "Sample exercise plan for " + request.getAge() + " year-old");
        return mockResponse;
    }

}
