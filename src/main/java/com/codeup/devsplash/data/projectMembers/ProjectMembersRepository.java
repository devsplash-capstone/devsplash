package com.codeup.devsplash.data.projectMembers;

import com.codeup.devsplash.data.user.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProjectMembersRepository extends JpaRepository<User, Long> {


}
