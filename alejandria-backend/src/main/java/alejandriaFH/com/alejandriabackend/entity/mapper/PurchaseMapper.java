package alejandriaFH.com.alejandriabackend.entity.mapper;

import alejandriaFH.com.alejandriabackend.dto.PurchaseDto;
import alejandriaFH.com.alejandriabackend.entity.Purchase;

import java.util.stream.Collectors;

public class PurchaseMapper {
    public static PurchaseDto mapToPurchaseDto(Purchase purchase){
        return  new PurchaseDto(
                purchase.getId(),
                purchase.getTotalAmount(),
                purchase.getDatePurchase(),
                //purchase.getUser(),
                purchase.getBooks().stream().map(BookMapper::mapToBookDto).collect(Collectors.toList()),
                purchase.getCreatedDate(),
                purchase.getDeletedDate()
        );
    }
}
