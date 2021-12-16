package formation.kira.santagift.controllers;

import formation.kira.santagift.models.Cadeau;
import formation.kira.santagift.services.CadeauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cadeaux")
@CrossOrigin
public class CadeauController {

    private CadeauService service;

    public CadeauController(CadeauService service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Cadeau> findAll() {
        return service.findAll();

    }

    @PostMapping("")
    public Cadeau save(@RequestBody Cadeau entity) {
        return service.save(entity);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable String id) {
        service.deleteById(id);
    }

    @GetMapping("{id}")
    public Cadeau findById(@PathVariable String id) {
        return service.findById(id);
    }
}
