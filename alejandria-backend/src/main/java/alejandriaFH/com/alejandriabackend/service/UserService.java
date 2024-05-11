package alejandriaFH.com.alejandriabackend.service;

import alejandriaFH.com.alejandriabackend.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Integer userId);
    List<UserDto> getAllUsers();
    UserDto updateUser(Integer userId, UserDto userDto);
}
