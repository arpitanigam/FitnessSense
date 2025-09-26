package com.FitnessSense.demo.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @PostMapping("/login")
    public String login() {
        // login logic here
        return "placeholder-token";
    }

    @PostMapping("/register")
    public String register() {
        // register logic here
        return "placeholder-token";
    }
}
