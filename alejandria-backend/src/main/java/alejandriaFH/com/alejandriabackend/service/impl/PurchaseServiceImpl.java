package alejandriaFH.com.alejandriabackend.service.impl;

import alejandriaFH.com.alejandriabackend.dto.PurchaseDto;
import alejandriaFH.com.alejandriabackend.entity.Purchase;
import alejandriaFH.com.alejandriabackend.entity.mapper.PurchaseMapper;
import alejandriaFH.com.alejandriabackend.repository.PurchaseRepository;
import alejandriaFH.com.alejandriabackend.service.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PurchaseServiceImpl implements PurchaseService {

    private final PurchaseRepository purchaseRepository;

    @Override
    public List<PurchaseDto> getAllPurchases() {
        List<Purchase> purchases = purchaseRepository.findAll();
        return purchases.stream().map(PurchaseMapper::mapToPurchaseDto).collect(Collectors.toList());
    }
}
