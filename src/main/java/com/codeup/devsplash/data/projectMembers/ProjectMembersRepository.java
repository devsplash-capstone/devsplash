package com.codeup.devsplash.data.projectMembers;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;


public interface ProjectMembersRepository extends JpaRepository<ProjectMember, Long> {


    Collection<ProjectMember> getByProjectId(Long projectId);
}
