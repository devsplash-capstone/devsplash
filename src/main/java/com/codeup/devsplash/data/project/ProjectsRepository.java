package com.codeup.devsplash.data.project;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsRepository extends JpaRepository<Project, Long> {
}
