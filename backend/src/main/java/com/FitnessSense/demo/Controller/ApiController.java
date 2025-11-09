package com.FitnessSense.demo.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {

    @GetMapping("/login")
    public String login() {
        // login logic here
        return "placeholder-token";
    }

    @GetMapping("/register")
    public String register() {
        // register logic here
        return "placeholder-token";
    }
}
