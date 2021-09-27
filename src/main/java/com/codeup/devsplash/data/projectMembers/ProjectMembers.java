package com.codeup.devsplash.data.projectMembers;

import com.codeup.devsplash.data.user.User;

import javax.persistence.*;

@Entity
@Table(name="project_members")
public class ProjectMembers {
    @Id
    private Long id;

    @JoinColumn(nullable = false)


    @Column(name= "project", nullable = false)


    @ManyToOne
    private User user;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
