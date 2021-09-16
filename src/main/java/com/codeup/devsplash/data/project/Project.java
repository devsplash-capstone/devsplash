package com.codeup.devsplash.data.project;

import com.codeup.devsplash.data.skills.Skill;
import com.codeup.devsplash.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    private User user;

    @ManyToMany
    @JoinTable(
            name="project_skill",
            joinColumns = {@JoinColumn(name = "project_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name="skill_id", nullable = false)},
            uniqueConstraints = @UniqueConstraint(columnNames = {"project_id","skill_id"})
    )
    private Collection<Skill> skills;

    public Project() {
    }

    public Project(Long id, String name, String description, User user) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Collection<Skill> getSkills() {
        return skills;
    }

    public void setSkills(Collection<Skill> skills) {
        this.skills = skills;
    }
}
