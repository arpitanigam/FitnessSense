package com.FitnessSense.demo.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExerciseTable {
	
	 @GetMapping("/exercisePlanner")
	    public Map<String, Object> getJsonData() {
	        Map<String, Object> data = new HashMap<>();
	        data.put("exercise_name", "exercise1");
	        data.put("number_of_sets", "123");
	        data.put("number_of_reps", "123");
	        data.put("video_link", "youtube.com/example");
	        data.put("day", "exampleDay");
	        
	        return data; 
	    }

}
