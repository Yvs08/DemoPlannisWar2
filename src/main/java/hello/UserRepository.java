package hello;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Long> {
     @Query(value = "SELECT * FROM user",
            nativeQuery=true
    )
    public List<User> findAllUsers();
    
    
     @Query(value = "SELECT email,name,nam FROM user join home where home.nam = 'nantes' ",
            nativeQuery=true
    )
    public List findAllhomeNantes();
    
    @Query(value = "SELECT email,name,nam FROM user join home where home.nam = ?1 ",
            nativeQuery=true
    )
    public List findHomeUser(String nam);
     
    

}
