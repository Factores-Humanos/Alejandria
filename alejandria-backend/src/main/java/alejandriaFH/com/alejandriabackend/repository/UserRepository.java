package alejandriaFH.com.alejandriabackend.repository;

import alejandriaFH.com.alejandriabackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
