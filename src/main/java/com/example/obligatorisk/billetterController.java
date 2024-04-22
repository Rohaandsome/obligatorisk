package com.example.obligatorisk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class billetterController {

    @Autowired
    billetterRepository rep;
    @PostMapping("/lagre")
    public void lagre(billetter billett){ rep.lagreBilletter(billett);}

    @GetMapping("/hentEiBilet")
    public billetter hentEiBilet(int id){
        return rep.hentEiBilet(id);
    }
    @GetMapping("/hentAlle")
    public List<billetter> hentAlle() {
        return rep.hentAlleBilletter();
    }

    @PostMapping("/endreEiBilet")
    public void endreEiBilet(billetter billett){
        rep.endreEiBilet(billett);
    }
    @GetMapping("/slettEiBilet")
    public void slettEiBilet(int id){
        rep.slettEiBilet(id);
    }
    @DeleteMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlleBilletter();
    }

}