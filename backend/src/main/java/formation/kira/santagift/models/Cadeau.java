package formation.kira.santagift.models;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document
public class Cadeau {
    @Id
    private String id;
    private String nom;
    private String url;
    private String imgUrl;
    private String description;
    private LocalDate createAt;

}
