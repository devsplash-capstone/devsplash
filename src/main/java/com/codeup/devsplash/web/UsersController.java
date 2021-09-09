package com.codeup.devsplash.web;

import com.codeup.devsplash.data.user.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import com.codeup.devsplash.data.user.UsersRepository;
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;


    UsersController(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    private void createUser(@RequestBody User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        usersRepository.save(newUser);
    }

    @GetMapping("/me")
    private User getLoggedInUser(OAuth2Authentication auth) {
        return usersRepository.findByEmail(auth.getName()).get();
    }

    @PutMapping
    private void updateUser(@RequestBody User user) {
        User oldUser = usersRepository.findById(user.getId()).get();
        oldUser.setFirstname(user.getFirstname());
        oldUser.setLastname(user.getLastname());
        oldUser.setEmail(user.getEmail());
        usersRepository.save(oldUser);
    }

    @DeleteMapping("{id}")
    private void deleteById(@PathVariable Long id) {
        usersRepository.deleteById(id);

    }
}

