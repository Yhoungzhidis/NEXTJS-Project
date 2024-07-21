package com.backend.project.controller;



import com.backend.project.service.StudentService;
import com.backend.project.student.Course;
import com.backend.project.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;


    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get")
    public List<Student> getStudents(){
        return studentService.getStudents();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public String authenticateStudent(@RequestParam(value = "email") String email, String password) {
        return studentService.authenticateStudent(email, password);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get/course")
    public List<Course> getCourseByEmail(@RequestParam(value = "email") String email) {
        return studentService.getCoursesByEmail(email);
    }



    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public void registerNewStudent(@RequestBody Student student){
        studentService.addNewStudent(student);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/add/course")
    public void registerNewCourse(@RequestBody Course course){
        studentService.addNewCourse(course);
    }

    @DeleteMapping(path = "{Studentid}")
    public void deleteStudent(
            @PathVariable("Studentid") String studentID){
        studentService.deleteStudent(studentID);
    }

    @PutMapping(path = "{studentid}")
    public void updateStudent(
            @PathVariable("studentid") Long studentID,
            @RequestParam(required = false) String firstName,
            @RequestParam(required = false) String lastName,
            @RequestParam(required = false) String otherName,
            @RequestParam(required = false) String email){
        studentService.updateStudent(studentID, firstName, lastName, otherName, email);
    }
}