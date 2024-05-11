package alejandriaFH.com.alejandriabackend.entity.mapper;

import alejandriaFH.com.alejandriabackend.dto.BookDto;
import alejandriaFH.com.alejandriabackend.entity.Book;

public class BookMapper {
    public  static BookDto mapToBookDto(Book book) {
        return  new BookDto(
                book.getId(),
                book.getTitle(),
                book.getPrice(),
                book.getDescription(),
                book.getPubYear(),
                book.getPages(),
                book.getFrontPage(),
                //book.getFormat(),
                //book.getAuthor(),
                //book.getPublisher(),
                //book.getSeller(),
                book.getCreatedDate(),
                book.getDeletedDate()
        );
    }

    public  static Book mapToBook(BookDto bookDto) {
        return  new Book(
                bookDto.getId(),
                bookDto.getTitle(),
                bookDto.getPrice(),
                bookDto.getDescription(),
                bookDto.getPubYear(),
                bookDto.getPages(),
                bookDto.getFrontPage(),
                null,
                null,
                null,
                null,
                bookDto.getCreatedDate(),
                bookDto.getDeletedDate()
        );
    }
}
