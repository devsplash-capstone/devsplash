package com.codeup.devsplash.web;

import com.codeup.devsplash.data.user.User;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.codeup.devsplash.data.user.UsersRepository;
@RestController
@RequestMapping(path = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UsersRepository usersRepository;


    UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping
    private void createUser(@RequestBody User newUser){
        usersRepository.save(newUser);
    }
}
