package com.codeup.devsplash.data.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectsRepository extends JpaRepository<Project, Long> {

    // TODO: does 'User_id' follow the JPA naming conventions? -> usually you don't have '_' in names
    List<Project> findByUser_id(Long id);
}
