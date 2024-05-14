package alejandriaFH.com.alejandriabackend.controller;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;
import alejandriaFH.com.alejandriabackend.dto.PurchaseDto;
import alejandriaFH.com.alejandriabackend.repository.PurchaseRepository;
import alejandriaFH.com.alejandriabackend.service.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/purchases")
public class PurchaseController {
    private final PurchaseRepository purchaseRepository;
    private PurchaseService purchaseService;

    //Build get all Purchases REST API
    @GetMapping
    public ResponseEntity<List<PurchaseDto>> getAllPurchases(){
        List<PurchaseDto> purchases = purchaseService.getAllPurchases();
        return  ResponseEntity.ok(purchases);
    }


}
