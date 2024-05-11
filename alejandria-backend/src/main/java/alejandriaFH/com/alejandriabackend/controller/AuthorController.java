package alejandriaFH.com.alejandriabackend.controller;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;
import alejandriaFH.com.alejandriabackend.repository.AuthorRepository;
import alejandriaFH.com.alejandriabackend.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorRepository authorRepository;
    private AuthorService authorService;

    //Build add Author REST API
    @PostMapping
    public ResponseEntity<AuthorDto> createAuthor(@RequestBody AuthorDto authorDto){
        AuthorDto savedAuthor = authorService.createAuthor(authorDto);
        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
    }

    //Build get Author REST API
    @GetMapping("{id}")
    public ResponseEntity<AuthorDto> getAuthorById(@PathVariable("id") Integer authorId){
        AuthorDto authorDto = authorService.getAuthorById(authorId);
        return ResponseEntity.ok(authorDto);
    }

    //Build get all Authors REST API
    @GetMapping
    public ResponseEntity<List<AuthorDto>> getAllAuthors(){
        List<AuthorDto> authors = authorService.getAllAuthors();
        return  ResponseEntity.ok(authors);
    }

    //Build update Author REST API
    @PutMapping("{id}")
    public ResponseEntity<AuthorDto> updateAuthor(@PathVariable("id") Integer authorId,
                                                  @RequestBody AuthorDto updatedAuthor){
        AuthorDto authorDto = authorService.updateAuthor(authorId, updatedAuthor);
        return ResponseEntity.ok(authorDto);
    }

}
