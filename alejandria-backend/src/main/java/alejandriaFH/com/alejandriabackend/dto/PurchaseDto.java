package alejandriaFH.com.alejandriabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseDto {
    private Integer id;
    private Integer totalAmount;
    private OffsetDateTime datePurchase;
    //private UserDto user;
    private List<BookDto> books;
    private OffsetDateTime createdDate;
    private OffsetDateTime deletedDate;


}
