package com.codeup.devsplash.web;


import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.projectMembers.ProjectMember;
import com.codeup.devsplash.data.projectMembers.ProjectMembersRepository;
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

    @PostMapping
    private void memberJoiningProject(@RequestBody Long id, OAuth2Authentication auth) {
        ProjectMember member = new ProjectMember();
        Project project = new Project();
        project.setId(id);
        member.setProject(project);
        member.setUser(usersRepository.findByEmail(auth.getName()).get());
        projectMembersRepository.save(member);
    }

    @GetMapping("/byProjectId/{projectId}")
    private Collection<ProjectMember> getProjectMembersByProjectId(@PathVariable Long projectId) {
        return projectMembersRepository.getByProject(projectId);
    }
}
