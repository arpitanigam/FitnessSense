package com.FitnessSense.demo.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exercise-plan")
public class ExerciseTable {
	
		@PostMapping("/list")
	    public List<Map<String, Object>> getJsonData() {
	        Map<String, Object> obj1 = new HashMap<>();
	        obj1.put("exercise_name", "exercise1");
	        obj1.put("number_of_sets", "123");
	        obj1.put("number_of_reps", "123");
	        obj1.put("video_link", "youtube.com/example");
	        obj1.put("day", "exampleDay");
	        
	        
	        Map<String, Object> obj2 = new HashMap<>();
	        obj2.put("exercise_name", "exercise2");
	        obj2.put("number_of_sets", "123");
	        obj2.put("number_of_reps", "123");
	        obj2.put("video_link", "youtube.com/example");
	        obj2.put("day", "exampleDay2");
	        
	        
	        List<Map<String, Object>> data = new ArrayList<>();
	        data.add(obj1);
	        data.add(obj2);
	        
	        return data; 
	    }

}
