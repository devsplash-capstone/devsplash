package com.codeup.devsplash.web;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.project.ProjectsRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="api/projects", headers = "Accept=application/json")
public class ProjectsController {

    private final ProjectsRepository projectsRepository;

    public ProjectsController(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @PostMapping
    private void createProject(@RequestBody Project newProject){
        projectsRepository.save(newProject);
    }
}
