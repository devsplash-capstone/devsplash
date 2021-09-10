package com.codeup.devsplash.web;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.project.ProjectsRepository;
import com.codeup.devsplash.data.user.User;
import com.codeup.devsplash.data.user.UsersRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/projects", headers = "Accept=application/json")
public class ProjectsController {

    private final ProjectsRepository projectsRepository;
    private final UsersRepository usersRepository;

    public ProjectsController(ProjectsRepository projectsRepository, UsersRepository usersRepository) {
        this.projectsRepository = projectsRepository;
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void createProject(@RequestBody Project newProject) {
        projectsRepository.save(newProject);
    }

    @GetMapping("/byMe")
    private List<Project> getProjectsByLoggedInUser(OAuth2Authentication auth) {
        User loggedInUser = usersRepository.findByEmail(auth.getName()).get();
        return projectsRepository.findByUser_id(loggedInUser.getId());
    }

    @GetMapping
    private List<Project> getProjects() {
        return projectsRepository.findAll();
    }
}
