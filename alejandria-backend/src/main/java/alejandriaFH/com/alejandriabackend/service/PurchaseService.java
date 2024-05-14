package alejandriaFH.com.alejandriabackend.service;

import alejandriaFH.com.alejandriabackend.dto.PurchaseDto;

import java.util.List;

public interface PurchaseService {
    List<PurchaseDto> getAllPurchases();
}
