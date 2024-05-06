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
public class CartBookId implements java.io.Serializable {
    private static final long serialVersionUID = 2119216015600003385L;
    @Column(name = "cart_id", nullable = false)
    private Integer cartId;

    @Column(name = "book_id", nullable = false)
    private Integer bookId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        CartBookId entity = (CartBookId) o;
        return Objects.equals(this.cartId, entity.cartId) &&
                Objects.equals(this.bookId, entity.bookId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartId, bookId);
    }

}