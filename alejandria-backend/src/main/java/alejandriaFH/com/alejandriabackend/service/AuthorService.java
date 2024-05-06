package alejandriaFH.com.alejandriabackend.service;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;

public interface AuthorService {
    AuthorDto createAuthor(AuthorDto authorDto);
    AuthorDto getAuthorById(Integer authorId);
}
