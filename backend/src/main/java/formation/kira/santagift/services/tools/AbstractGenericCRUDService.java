package formation.kira.santagift.services.tools;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public abstract class AbstractGenericCRUDService<T> implements GenericCRUDService<T> {

    private MongoRepository<T, String> repository;

    public AbstractGenericCRUDService(MongoRepository<T, String> repository) {
        this.repository = repository;
    }

    @Override
    public List<T> findAll() {
        return this.repository.findAll();
    }

    @Override
    public T save(T entity) {
        return this.repository.save(entity);
    }

    @Override
    public void deleteById(String id) {
        if (this.repository.existsById(id))
            this.repository.deleteById(id);
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @Override
    public T findById(String id) {
        return this.repository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

}
