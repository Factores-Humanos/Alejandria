package alejandriaFH.com.alejandriabackend.service.impl;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;
import alejandriaFH.com.alejandriabackend.entity.Author;
import alejandriaFH.com.alejandriabackend.entity.exception.ResourceNotFoundException;
import alejandriaFH.com.alejandriabackend.entity.mapper.AuthorMapper;
import alejandriaFH.com.alejandriabackend.repository.AuthorRepository;
import alejandriaFH.com.alejandriabackend.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<AuthorDto> getAllAuthors() {
        List<Author> authors = authorRepository.findAll();
        return authors.stream().map(AuthorMapper::mapToAuthorDto).collect(Collectors.toList());
    }

    @Override
    public AuthorDto updateAuthor(Integer authorId, AuthorDto authorDto) {
        Author author = authorRepository.findById(authorId).orElseThrow(() -> new ResourceNotFoundException("Author is not exists with given id: "+authorId));
        author.setName(authorDto.getName());

        Author updatedAuthorObj = authorRepository.save(author);

        return AuthorMapper.mapToAuthorDto(updatedAuthorObj);
    }
}
