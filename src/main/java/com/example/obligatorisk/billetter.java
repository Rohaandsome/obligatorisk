package com.example.obligatorisk;

public class billetter {
    private String film;
    private String seter;
    private String fornavn;
    private String etternavn;
    private String mail;
    private String tlf;

    public billetter(String film, String seter, String fornavn, String etternavn, String mail, String tlf) {
        this.film = film;
        this.seter = seter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.mail = mail;
        this.tlf = tlf;
    }

    public billetter () {
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getSeter() {
        return seter;
    }

    public void setSeter(String seter) {
        this.seter = seter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTlf() {
        return tlf;
    }

    public void setTlf(String tlf) {
        this.tlf = tlf;
    }
}
