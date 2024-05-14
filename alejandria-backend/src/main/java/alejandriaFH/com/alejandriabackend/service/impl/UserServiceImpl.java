package alejandriaFH.com.alejandriabackend.service.impl;

import alejandriaFH.com.alejandriabackend.dto.UserDto;
import alejandriaFH.com.alejandriabackend.entity.User;
import alejandriaFH.com.alejandriabackend.entity.exception.ResourceNotFoundException;
import alejandriaFH.com.alejandriabackend.entity.mapper.UserMapper;
import alejandriaFH.com.alejandriabackend.repository.UserRepository;
import alejandriaFH.com.alejandriabackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Author is not exists with given id: "+userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Integer userId, UserDto userDto) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not exists with given id: "+userId));
        user.setUserName(userDto.getUserName());
        user.setEmailAddress(userDto.getEmailAddress());
        user.setUserPassword(userDto.getUserPassword());
        user.setStreetAddress(userDto.getStreetAddress());
        user.setScore(userDto.getScore());
        user.setDeletedDate(userDto.getDeletedDate());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        User user = userRepository.findByEmailAddress(email);

        return user != null && user.getUserPassword().equals(password);
    }


}
