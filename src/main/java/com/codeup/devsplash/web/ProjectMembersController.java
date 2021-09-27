package com.codeup.devsplash.web;


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
    private final  UsersRepository usersRepository;

    public ProjectMembersController(ProjectMembersRepository projectMembersRepository, UsersRepository usersRepository) {
        this.projectMembersRepository = projectMembersRepository;
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void memberJoiningProject(@RequestBody ProjectMember newProjectMember, OAuth2Authentication auth) {
//        ProjectMember member = new ProjectMember(newProjectMember.getUser(), newProjectMember.getProject());

        newProjectMember.setUser(usersRepository.findByEmail(auth.getName()).get());
        projectMembersRepository.save(newProjectMember);
    }

    @GetMapping("/byProjectId/{projectId}")
    private Collection<ProjectMember> getProjectMembersByProjectId(@PathVariable Long projectId){
     return projectMembersRepository.getByProject(projectId);
    }
}
