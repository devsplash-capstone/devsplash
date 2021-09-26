package com.codeup.devsplash.data.user;

import com.codeup.devsplash.data.project.Project;
import com.codeup.devsplash.data.skills.Skill;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Column(nullable = false, length = 200, unique = true)
    private String email;

    @Column(nullable = false, length = 100)
    private String firstname;

    @Column(nullable = false, length = 100)
    private String lastname;

    @Column(nullable = false, length = 100)
    private String displayName;

    @Column(nullable = false, length = 100)
    private String password;

    @Column
    private String aboutMe;

    @Column
    private String imgUrl;

    @Column
    private String githubUsername;

    // TODO: Are we using 'role'?
    public enum Role {USER, ADMIN};

    // TODO: Are we using 'role'?
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER;


    // TODO: this field appears to be unused -> is it used and just not referenced in the code?
    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private Collection<Project> projects;

    @ManyToMany
    @JoinTable(
            name="user_skill",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name="skill_id", nullable = false)},
            uniqueConstraints = @UniqueConstraint(columnNames = {"user_id","skill_id"})
    )
    private Collection<Skill> skills;

    // TODO: one public, empty constructor is needed here


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public Collection<Skill> getSkills() {
        return skills;
    }

    public void setSkills(Collection<Skill> skills) {
        this.skills = skills;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getGithubUsername() {
        return githubUsername;
    }

    public void setGithubUsername(String githubUsername) {
        this.githubUsername = githubUsername;
    }
}
