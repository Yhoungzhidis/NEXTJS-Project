package com.backend.project.service;



import com.backend.project.course.CourseRepository;
import com.backend.project.repository.StudentRepository;
import com.backend.project.student.Course;
import com.backend.project.student.Student;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;



    @Autowired
    public StudentService(StudentRepository studentRepository, CourseRepository courseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }


    public List<Student> getStudents(){
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .map(student -> new Student(student.getId(), student.getFirstName(), student.getLastName(), student.getOtherName(), student.getPhoneNumber(), student.getDate(), student.getEmail(), student.getPassword(), student.getStudentID()))
                .toList();

    }
    public List<Course> getCoursesByEmail(String email) {
        return courseRepository.findCoursesByEmail(email).stream()
                .map(course -> new Course(course.getId(), course.getFirstName(), course.getEmail(), course.getCourseName(), course.getCourseCode(), course.getCourseDescription()))
                .collect(Collectors.toList());
    }
//public List<Student> getStudents(String email){
//    List<Student> students = studentRepository.findAll();
//    return students.stream()
//            .filter(student -> student.getEmail().equals(email))
//            .map(student -> new Student(student.getId(), student.getName(), student.getEmail(), student.getPassword(), student.getStudentid()))
//            .toList();
//}
    public String authenticateStudent(String email, String password) throws IllegalStateException
    {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        Optional<Student> opStudent = studentRepository.findByEmail(email);
        if(opStudent.isPresent()){
            Student dbuUser = opStudent.get();
            if(bCryptPasswordEncoder.matches(password,dbuUser.getPassword()))
                return "Authenticated";
            else
                throw new IllegalStateException("Wrong password");
        }
        throw new IllegalStateException("No user was found");
    }



    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository
                .findStudentByEmail(student.getEmail());
        if (studentOptional.isPresent()){
            throw new IllegalStateException("Email taken");
        }
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encryptedPassword = bCryptPasswordEncoder.encode(student.getPassword());
      student.setPassword(encryptedPassword);
        studentRepository.save(student);

    }

    public void addNewCourse(Course course) {
        List<Course> studentOptional = courseRepository
                .findCoursesByEmail(course.getEmail());
        if (studentOptional.isEmpty()){
            courseRepository.save(course);
        }
        courseRepository.save(course);
    }

//    public void addNewCourse(Student student) {
//        Optional<Student> studentOptional = studentRepository
//                .findStudentByEmail(student.getEmail());
//        if (studentOptional.isPresent()){
//            throw new IllegalStateException("Email taken");
//        }
////        student.setPassword(passwordEncoder.encode(student.getPassword()));
//        studentRepository.save(student);
//    }


    public void deleteStudent(String studentID) {
//        boolean exists = studentRepository.existsById(studentId);
//        if (!exists){
//            throw new IllegalStateException("Student with ID " + studentId + " does not exists");
//        }
//        studentRepository.deleteById(studentId);
        List<Student> students = studentRepository.findAll();
        Student toDelete = null;
        for (Student student : students) {
            if (student.getStudentID().equals(studentID)) {
                toDelete = student;
                break;
            }
        }

        if (toDelete == null) {
            throw new IllegalStateException("Student with ID " + studentID + " does not exist");
        }

        studentRepository.delete(toDelete);
    }

    @Transactional
    public void updateStudent(Long studentid, String firstName, String lastName, String otherName,String email) {
        Student student =  studentRepository.findById(studentid).orElseThrow(()-> new IllegalStateException(
                "Student with ID " + studentid + " does not exists.")
        );
        if (firstName != null && !firstName.isEmpty() &&
                !Objects.equals(student.getFirstName(), firstName)){
            student.setFirstName(firstName);
        }
        if (lastName != null && !lastName.isEmpty() &&
                !Objects.equals(student.getLastName(), lastName)){
            student.setLastName(lastName);
        }
        if (otherName != null && !otherName.isEmpty() &&
                !Objects.equals(student.getOtherName(), otherName)){
            student.setOtherName(otherName);
        }
        if (email != null && !email.isEmpty() &&
                !Objects.equals(student.getEmail(), email)){
            Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
            if (studentOptional.isPresent()){
                throw new IllegalStateException("Email taken");
            }
            student.setEmail(email);
        }
    }




//    public Student getAllStudents(String email) {
//        Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
//        if (studentOptional.isPresent()) {
//            Student student = studentOptional.get();
//            return new Student(student.getId(), student.getName(), student.getEmail(), student.getPassword(),  student.getStudentid()); // Map to StudentDTO
//        } else {
//            return null; // Or throw an exception if not found
//        }
//    }
//    public Student getStudentByEmail(String email) {
//        Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
//        if (studentOptional.isPresent()) {
//            Student student = studentOptional.get();
//            return new Student(student.getId(), student.getName(), student.getEmail(), student.getPassword(),  student.getStudentid()); // Map to StudentDTO
//        } else {
//            return null; // Or throw an exception if not found
//        }
//    }



//        public void updateStudent(String Studentid, String name, String email) {
//
//        // Flag to indicate if student is found
//        boolean studentFound = false;
//
//        // Loop through all students (consider performance implications)
//        for (Student student : studentRepository.findAll()) {
//            if (student.getStudentid().equals(Studentid)) {
//                studentFound = true;
//                // Update logic for the found student
//                if (name != null && !name.isEmpty() && !Objects.equals(student.getName(), name)) {
//                    student.setName(name);
//                }
//                if (email != null && !email.isEmpty() &&
//                        !Objects.equals(student.getEmail(), email)) {
//                    Optional<Student> studentOptional = studentRepository.findStudentByEmail(email);
//                    if (studentOptional.isPresent()) {
//                        throw new IllegalStateException("Email taken");
//                    }
//                    student.setEmail(email);
//                    // ... rest of update logic (similar to previous versions)
//                    break;  // Exit loop after finding the matching student
//                }
//            }
//
//            // Handle non-existent student
//            if (!studentFound) {
//                throw new IllegalStateException("Student with ID " + Studentid + " does not exist.");
//            }
//
//            // Save the updated student (if any)
//        studentRepository.save(student);  // Assuming student was updated
//        }
//
//    }

}


