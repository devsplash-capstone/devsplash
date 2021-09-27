package com.codeup.devsplash.web;


import com.codeup.devsplash.data.projectMembers.ProjectMembersRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/projects", headers = "Accept=application/json")
public class ProjectMembersController {

    private final ProjectMembersRepository projectMembersRepository;

    ProjectMembersController(ProjectMembersRepository projectMembersRepository) {
        this.projectMembersRepository = projectMembersRepository;
    }

    @PostMapping("/join")
    private void projectMembersRepository(@RequestBody ProjectMembersRepository newProjectMembersRepository) {
        return
    }

    @GetMapping("/")

}
