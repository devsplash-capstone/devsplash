package com.codeup.devsplash.web;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.project.ProjectsRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="api/project", headers = "Accepts=application/json")
public class ProjectsController {

    private final ProjectsRepository projectsRepository;


    public ProjectsController(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @PostMapping("/create")
    private void createProject(@RequestBody Project newProject){
        projectsRepository.save(newProject);
    }
}
