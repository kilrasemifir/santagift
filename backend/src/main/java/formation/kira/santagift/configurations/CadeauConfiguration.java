package formation.kira.santagift.configurations;

import formation.kira.santagift.repositories.CadeauRepository;
import formation.kira.santagift.services.CadeauService;
import formation.kira.santagift.services.CadeauServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CadeauConfiguration {

    @Bean
    public CadeauService cadeauService(CadeauRepository repository){
        return new CadeauServiceImpl(repository);
    }
}
