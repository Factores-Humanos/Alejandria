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
public class FavoriteBookId implements java.io.Serializable {
    private static final long serialVersionUID = 5688286881255747273L;
    @Column(name = "favorite_list_id", nullable = false)
    private Integer favoriteListId;

    @Column(name = "book_id", nullable = false)
    private Integer bookId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        FavoriteBookId entity = (FavoriteBookId) o;
        return Objects.equals(this.favoriteListId, entity.favoriteListId) &&
                Objects.equals(this.bookId, entity.bookId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(favoriteListId, bookId);
    }

}