package com.codeup.devsplash.web;


import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.projectMembers.ProjectMember;
import com.codeup.devsplash.data.projectMembers.ProjectMembersRepository;
import com.codeup.devsplash.data.user.User;
import com.codeup.devsplash.data.user.UsersRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "api/projectMembers", headers = "Accept=application/json")
public class ProjectMembersController {

    private final ProjectMembersRepository projectMembersRepository;
    private final UsersRepository usersRepository;

    public ProjectMembersController(ProjectMembersRepository projectMembersRepository, UsersRepository usersRepository) {
        this.projectMembersRepository = projectMembersRepository;
        this.usersRepository = usersRepository;
    }

    @PostMapping("{projectId}")
    private void memberJoiningProject(@PathVariable Long projectId, OAuth2Authentication auth) {
        User loggedInUser = usersRepository.findByEmail(auth.getName()).get();
        Project project = new Project();
        project.setId(projectId);
        ProjectMember projectMember = new ProjectMember();
        projectMember.setUser(loggedInUser);
        projectMember.setProject(project);
        projectMembersRepository.save(projectMember);
    }

    @GetMapping("/byProjectId/{projectId}")
    private Collection<ProjectMember> getProjectMembersByProjectId(@PathVariable Long projectId) {
        return projectMembersRepository.getByProjectId(projectId);
    }

    @GetMapping("/byMe")
    private Collection<ProjectMember> getProjectMembersByMe(OAuth2Authentication auth) {
        User loggedInUser = usersRepository.findByEmail(auth.getName()).get();
        return projectMembersRepository.getByUserId(loggedInUser.getId());
    }

    @GetMapping("/byUserId/{userId}")
    private Collection<ProjectMember> getProjectMembersByUserId(@PathVariable Long userId) {
        return projectMembersRepository.getByUserId(userId);
    }
}
