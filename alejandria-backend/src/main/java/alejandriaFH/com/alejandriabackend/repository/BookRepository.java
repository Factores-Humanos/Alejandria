package alejandriaFH.com.alejandriabackend.repository;

import alejandriaFH.com.alejandriabackend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
