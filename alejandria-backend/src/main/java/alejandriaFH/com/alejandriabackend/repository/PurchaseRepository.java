package alejandriaFH.com.alejandriabackend.repository;

import alejandriaFH.com.alejandriabackend.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {
}
