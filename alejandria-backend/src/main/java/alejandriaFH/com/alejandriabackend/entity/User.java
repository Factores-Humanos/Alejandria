package alejandriaFH.com.alejandriabackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.OffsetDateTime;

@Getter
@Setter
@Entity
@Table(name = "\"user\"")
public class User {
    @Id
    @ColumnDefault("nextval('user_id_seq'::regclass)")
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "user_name", nullable = false, length = 50)
    private String userName;

    @Column(name = "email_address", nullable = false, length = 40)
    private String emailAddress;

    @Column(name = "user_password", nullable = false, length = 20)
    private String userPassword;

    @Column(name = "street_address", length = Integer.MAX_VALUE)
    private String streetAddress;

    @Column(name = "score")
    private Integer score;

    @Column(name = "created_date", nullable = false)
    private OffsetDateTime createdDate;

    @Column(name = "deleted_date")
    private OffsetDateTime deletedDate;

}