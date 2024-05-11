package alejandriaFH.com.alejandriabackend.dto;

import alejandriaFH.com.alejandriabackend.entity.Author;
import alejandriaFH.com.alejandriabackend.entity.Format;
import alejandriaFH.com.alejandriabackend.entity.Publisher;
import alejandriaFH.com.alejandriabackend.entity.User;
import java.time.OffsetDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    private Integer id;
    private String title;
    private Integer price;
    private String description;
    private String pubYear;
    private Integer pages;
    private String frontPage;
    //private Format format;
    //private Author author;
    //private Publisher publisher;
    //private User seller;
    private OffsetDateTime createdDate;
    private OffsetDateTime deletedDate;
}
