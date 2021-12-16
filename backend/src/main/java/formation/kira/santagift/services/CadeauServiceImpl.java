package formation.kira.santagift.services;

import formation.kira.santagift.models.Cadeau;
import formation.kira.santagift.repositories.CadeauRepository;
import formation.kira.santagift.services.tools.AbstractGenericCRUDService;
import org.springframework.data.repository.Repository;

import java.time.LocalDate;

public class CadeauServiceImpl extends AbstractGenericCRUDService<Cadeau> implements CadeauService{

    private CadeauRepository repository;

    public CadeauServiceImpl(CadeauRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Override
    public Cadeau save(Cadeau entity) {
        entity.setCreateAt(LocalDate.now());
        return super.save(entity);
    }
}
