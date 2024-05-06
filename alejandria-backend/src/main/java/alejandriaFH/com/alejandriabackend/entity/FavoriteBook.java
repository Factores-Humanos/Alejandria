package alejandriaFH.com.alejandriabackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "favorite_books")
public class FavoriteBook {
    @SequenceGenerator(name = "favorite_books_id_gen", sequenceName = "sale_id_seq", allocationSize = 1)
    @EmbeddedId
    private FavoriteBookId id;

    @MapsId("favoriteListId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "favorite_list_id", nullable = false)
    private FavoriteList favoriteList;

    @MapsId("bookId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

}