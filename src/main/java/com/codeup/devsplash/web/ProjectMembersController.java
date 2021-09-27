package com.codeup.devsplash.web;


import com.codeup.devsplash.data.projectMembers.ProjectMember;
import com.codeup.devsplash.data.projectMembers.ProjectMembersRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "api/projectMembers", headers = "Accept=application/json")
public class ProjectMembersController {

    private final ProjectMembersRepository projectMembersRepository;

    public ProjectMembersController(ProjectMembersRepository projectMembersRepository) {
        this.projectMembersRepository = projectMembersRepository;
    }

    @PostMapping
    private void memberJoiningProject(@RequestBody ProjectMember newProjectMember) {
//        ProjectMember member = new ProjectMember(newProjectMember.getUser(), newProjectMember.getProject());
        projectMembersRepository.save(newProjectMember);
    }

    @GetMapping("/byProjectId/{projectId}")
    private Collection<ProjectMember> getProjectMembersByProjectId(@PathVariable Long projectId){
     return projectMembersRepository.getByProject(projectId);
    }
}
