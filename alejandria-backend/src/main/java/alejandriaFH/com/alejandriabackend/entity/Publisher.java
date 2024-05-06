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
@Table(name = "publisher")
public class Publisher {
    @Id
    @ColumnDefault("nextval('publisher_id_seq'::regclass)")
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name_publisher", nullable = false, length = 30)
    private String namePublisher;

    @Column(name = "created_date", nullable = false)
    private OffsetDateTime createdDate;

    @Column(name = "deleted_date")
    private OffsetDateTime deletedDate;

}