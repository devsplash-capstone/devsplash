package com.codeup.devsplash.data.skills;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "Skills")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(length = 200)
    private String description;

    @ManyToMany(mappedBy = "skills")
    @JsonIgnore
    private Collection<User> user;

    @ManyToMany(mappedBy = "skills")
    @JsonIgnore
    private Collection<Project> project;

    public Skill() {
    }

    public Skill(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Skill(Long id, String name, String description, Collection<User> user) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Collection<User> getUser() {
        return user;
    }

    public void setUser(Collection<User> user) {
        this.user = user;
    }

    public Collection<Project> getProject() {
        return project;
    }

    public void setProject(Collection<Project> project) {
        this.project = project;
    }
}
