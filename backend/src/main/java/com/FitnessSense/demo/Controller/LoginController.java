package com.FitnessSense.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
	
	@RequestMapping("/Login")
	@ResponseBody
	public String Login() {
		return "Login Page";
	}

}
