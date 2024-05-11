package alejandriaFH.com.alejandriabackend.service;

import alejandriaFH.com.alejandriabackend.dto.BookDto;

import java.util.List;

public interface BookService {
    BookDto createBook(BookDto bookDto);
    BookDto getBookById(Integer bookId);
    List<BookDto> getAllBooks();
    BookDto updateBook(Integer bookId, BookDto bookDto);
}
