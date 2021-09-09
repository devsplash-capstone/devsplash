package com.codeup.devsplash.data.project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectsRepository extends JpaRepository<Project, Long> {

    List<Project> findByUser_id(Long id);
}
