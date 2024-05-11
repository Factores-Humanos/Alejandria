package alejandriaFH.com.alejandriabackend.controller;

import alejandriaFH.com.alejandriabackend.dto.BookDto;
import alejandriaFH.com.alejandriabackend.repository.BookRepository;
import alejandriaFH.com.alejandriabackend.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;
    private BookService bookService;

    //Build add Book REST API
    @PostMapping
    public ResponseEntity<BookDto> createBook(@RequestBody BookDto bookDto) {
        BookDto savedBook = bookService.createBook(bookDto);
        return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
    }

    //Build get Author REST API
    @GetMapping("{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable("id") Integer bookId) {
        BookDto bookDto = bookService.getBookById(bookId);
        return ResponseEntity.ok(bookDto);
    }

    //Build get all Authors REST API
    @GetMapping
    public ResponseEntity<List<BookDto>> getAllBooks() {
        List<BookDto> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    //Build update Book REST API
    @PutMapping("{id}")
    public ResponseEntity<BookDto> updateBook(@PathVariable("id") Integer bookId,
                                              @RequestBody BookDto updatedBook) {
        BookDto bookDto = bookService.updateBook(bookId, updatedBook);
        return ResponseEntity.ok(bookDto);
    }
}
