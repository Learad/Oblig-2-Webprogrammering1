package com.example.oblig2webprogrammering;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
@RestController
public class Kontroller {
    ArrayList<Billett> liste = new ArrayList();

    public Kontroller() {
    }

    @GetMapping({"/registrer"})
    public void registrerBillett(Billett billett) {
        this.liste.add(billett);
    }

    @GetMapping({"/vis"})
    public ArrayList<Billett> visBillett() {
        return this.liste;
    }

    @PostMapping({"/slett"})
    public void slettBillett() {
        this.liste.clear();
    }
}
