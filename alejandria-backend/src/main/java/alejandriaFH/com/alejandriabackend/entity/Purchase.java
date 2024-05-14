package alejandriaFH.com.alejandriabackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "purchase")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "purchase_id_gen")
    @SequenceGenerator(name = "purchase_id_gen", sequenceName = "purchase_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "total_amount", nullable = false)
    private Integer totalAmount;

    @Column(name = "date_purchase", nullable = false)
    private OffsetDateTime datePurchase;

    @ManyToMany(fetch =  FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "book_purchase", joinColumns =  @JoinColumn(name = "purchase_id", referencedColumnName = "id"),
            inverseJoinColumns =  @JoinColumn(name = "book_id", referencedColumnName = "id")
    )

    @ManyToMany(fetch = )
    private Set<Book> books;

    @Column(name = "created_date", nullable = false)
    private OffsetDateTime createdDate;

    @Column(name = "deleted_date")
    private OffsetDateTime deletedDate;


}