package formation.kira.santagift.repositories;

import formation.kira.santagift.models.Cadeau;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CadeauRepository extends MongoRepository<Cadeau, String> {
}
