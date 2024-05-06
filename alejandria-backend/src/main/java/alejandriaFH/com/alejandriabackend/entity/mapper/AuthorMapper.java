package alejandriaFH.com.alejandriabackend.entity.mapper;

import alejandriaFH.com.alejandriabackend.dto.AuthorDto;
import alejandriaFH.com.alejandriabackend.entity.Author;

public class AuthorMapper {
    public static AuthorDto mapToAuthorDto(Author author){
        return new AuthorDto(
                author.getId(),
                author.getName(),
                author.getCreatedDate(),
                author.getDeletedDate()
        );
    }

    public static Author mapToAuthor(AuthorDto authorDto){
        return  new Author(
                authorDto.getId(),
                authorDto.getName(),
                authorDto.getCreatedDate(),
                authorDto.getDeletedDate()
        );
    }

}

