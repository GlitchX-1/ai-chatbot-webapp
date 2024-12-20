package com.example.chatbot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login"; // JSP file name without .jsp
    }

    @GetMapping("/signup")
    public String showSignupPage() {
        return "signup"; // JSP file name without .jsp
    }

    @GetMapping("/chatbot")
    public String showChatbotPage() {
        return "chatbot"; // JSP file name without .jsp
    }
}
