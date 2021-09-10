package com.codeup.devsplash.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping({"/", "/home","/register","/profile", "/login", "/viewproject", "/projects", "/members"})
    public String showView() {
        return "forward:/index.html";
    }
}
