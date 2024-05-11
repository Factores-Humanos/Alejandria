package alejandriaFH.com.alejandriabackend.service.impl;

import alejandriaFH.com.alejandriabackend.dto.BookDto;
import alejandriaFH.com.alejandriabackend.entity.Book;
import alejandriaFH.com.alejandriabackend.entity.exception.ResourceNotFoundException;
import alejandriaFH.com.alejandriabackend.entity.mapper.BookMapper;
import alejandriaFH.com.alejandriabackend.repository.BookRepository;
import alejandriaFH.com.alejandriabackend.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    @Override
    public BookDto createBook(BookDto bookDto) {
        Book book = BookMapper.mapToBook(bookDto);
        Book savedBook = bookRepository.save(book);
        return BookMapper.mapToBookDto(savedBook);
    }

    @Override
    public BookDto getBookById(Integer bookId) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book is not exists with given id: "+bookId));
        return BookMapper.mapToBookDto(book);
    }

    @Override
    public List<BookDto> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books.stream().map(BookMapper::mapToBookDto).collect(Collectors.toList());
    }

    @Override
    public BookDto updateBook(Integer bookId, BookDto bookDto) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book is not exists with given id: "+bookId));
        book.setTitle(bookDto.getTitle());
        book.setPrice(bookDto.getPrice());
        book.setDescription(bookDto.getDescription());
        book.setPubYear(bookDto.getPubYear());
        book.setPages(bookDto.getPages());
        book.setFrontPage(bookDto.getFrontPage());
        //book.setFormat(bookDto.getFormat());
        //book.setAuthor(bookDto.getAuthor());
        //book.setPublisher(bookDto.getPublisher());
        //book.setSeller(bookDto.getSeller());

        Book updatedBook = bookRepository.save(book);
        return BookMapper.mapToBookDto(updatedBook);
    }
}
