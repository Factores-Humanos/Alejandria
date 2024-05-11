package alejandriaFH.com.alejandriabackend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Integer id;
    private String userName;
    private String emailAddress;
    private String userPassword;
    private String streetAddress;
    private Integer score;
    private OffsetDateTime createdDate;
    private OffsetDateTime deletedDate;
}
