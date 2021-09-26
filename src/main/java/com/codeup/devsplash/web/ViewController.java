package com.codeup.devsplash.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController { // TODO: naming convention is 'ViewsController'

    // TODO: '/viewProject' and '/projects' follow different naming conventions. Why not use '/project' and '/projects'
    @RequestMapping({"/", "/home","/register","/profile", "/login", "/viewproject", "/projects", "/members"})
    public String showView() {
        return "forward:/index.html";
    }
}
