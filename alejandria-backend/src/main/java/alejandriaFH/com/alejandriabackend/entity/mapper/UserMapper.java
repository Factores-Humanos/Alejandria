package alejandriaFH.com.alejandriabackend.entity.mapper;

import alejandriaFH.com.alejandriabackend.dto.UserDto;
import alejandriaFH.com.alejandriabackend.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getUserName(),
                user.getEmailAddress(),
                user.getUserPassword(),
                user.getStreetAddress(),
                user.getScore(),
                user.getCreatedDate(),
                user.getDeletedDate()
        );
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getUserName(),
                userDto.getEmailAddress(),
                userDto.getUserPassword(),
                userDto.getStreetAddress(),
                userDto.getScore(),
                userDto.getCreatedDate(),
                userDto.getDeletedDate()
        );
    }
}
