package alejandriaFH.com.alejandriabackend.controller;

import alejandriaFH.com.alejandriabackend.dto.UserDto;
import alejandriaFH.com.alejandriabackend.repository.UserRepository;
import alejandriaFH.com.alejandriabackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;
    private UserService userService;

    //Build add User REST API
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //Build get User REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Integer userId) {
        UserDto userDto = userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    //Build get all Users REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Build update User REST API
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Integer userId,
                                              @RequestBody UserDto updatedUser) {
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }


}
