package com.codeup.devsplash.web;

import com.codeup.devsplash.data.user.User;
import org.springframework.web.bind.annotation.*;
import com.codeup.devsplash.data.user.UsersRepository;
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UsersRepository usersRepository;


    UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void createUser(@RequestBody User newUser){
        usersRepository.save(newUser);
    }
}
