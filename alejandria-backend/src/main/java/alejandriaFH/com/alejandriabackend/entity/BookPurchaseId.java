package alejandriaFH.com.alejandriabackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.util.Objects;

@Getter
@Setter
@Embeddable
public class BookPurchaseId implements java.io.Serializable {
    private static final long serialVersionUID = 8012119243118350940L;
    @Column(name = "book_id", nullable = false)
    private Integer bookId;

    @Column(name = "purchase_id", nullable = false)
    private Integer purchaseId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        BookPurchaseId entity = (BookPurchaseId) o;
        return Objects.equals(this.purchaseId, entity.purchaseId) &&
                Objects.equals(this.bookId, entity.bookId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purchaseId, bookId);
    }

}