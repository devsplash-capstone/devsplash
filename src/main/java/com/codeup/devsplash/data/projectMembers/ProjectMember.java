package com.codeup.devsplash.data.projectMembers;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.user.User;

import javax.persistence.*;

@Entity
@Table(name="project_members")
public class ProjectMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Project project;

    public ProjectMember() {
    }

    public ProjectMember(User user, Project project) {
        this.user = user;
        this.project = project;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
