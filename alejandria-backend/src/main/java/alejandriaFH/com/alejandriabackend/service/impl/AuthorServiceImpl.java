package alejandriaFH.com.alejandriabackend.service.impl;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;
import alejandriaFH.com.alejandriabackend.entity.Author;
import alejandriaFH.com.alejandriabackend.entity.exception.ResourceNotFoundException;
import alejandriaFH.com.alejandriabackend.entity.mapper.AuthorMapper;
import alejandriaFH.com.alejandriabackend.repository.AuthorRepository;
import alejandriaFH.com.alejandriabackend.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private AuthorRepository authorRepository;

    @Override
    public AuthorDto createAuthor(AuthorDto authorDto) {
        Author author = AuthorMapper.mapToAuthor(authorDto);
        Author savedAuthor = authorRepository.save(author);
        return AuthorMapper.mapToAuthorDto(savedAuthor);
    }

    @Override
    public AuthorDto getAuthorById(Integer authorId) {
        Author author = authorRepository.findById(authorId).orElseThrow(() -> new ResourceNotFoundException("Author is not exists with given id: "+authorId));
        return AuthorMapper.mapToAuthorDto(author);
    }
}
