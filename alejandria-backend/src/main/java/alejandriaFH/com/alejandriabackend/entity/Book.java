package alejandriaFH.com.alejandriabackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_id_gen")
    @SequenceGenerator(name = "book_id_gen", sequenceName = "book_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title", nullable = false, length = 40)
    private String title;

    @Column(name = "price", nullable = false)
    private Integer price;

    @Column(name = "description", nullable = false, length = Integer.MAX_VALUE)
    private String description;

    @Column(name = "pub_year", length = 5)
    private String pubYear;

    @Column(name = "pages", nullable = false)
    private Integer pages;

    @Column(name = "front_page", length = Integer.MAX_VALUE)
    private String frontPage;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "format_id", nullable = true)
    private Format format;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "author_id")
    private Author author;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "seller_id", nullable = true)
    private User seller;

    @Column(name = "created_date", nullable = false)
    private OffsetDateTime createdDate;

    @Column(name = "deleted_date")
    private OffsetDateTime deletedDate;

}