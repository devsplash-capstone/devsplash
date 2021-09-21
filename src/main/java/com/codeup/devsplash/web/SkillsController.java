package com.codeup.devsplash.web;

import com.codeup.devsplash.data.skills.Skill;
import com.codeup.devsplash.data.skills.SkillsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/skills", headers = "Accept=application/json")
public class SkillsController {
    private final SkillsRepository skillsRepository;

    public SkillsController(SkillsRepository skillsRepository) {
        this.skillsRepository = skillsRepository;
    }

    @GetMapping
    private List<Skill> getSkills() {
        return skillsRepository.findAll();
    }

    @PostMapping
    private void addSkills(@RequestBody Skill skill){
        skillsRepository.save(skill);
    }
}
