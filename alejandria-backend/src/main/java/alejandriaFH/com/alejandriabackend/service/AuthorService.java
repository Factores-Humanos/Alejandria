package alejandriaFH.com.alejandriabackend.service;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;

import java.util.List;

public interface AuthorService {
    AuthorDto createAuthor(AuthorDto authorDto);
    AuthorDto getAuthorById(Integer authorId);
    List<AuthorDto> getAllAuthors();
    AuthorDto updateAuthor(Integer authorId, AuthorDto authorDto);
}
