package com.example.obligatorisk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public class billetterRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(billetter innBilletter){
        String sql = "INSERT INTO billetter (film,seter,fornavn,etternavn,mail,tlf) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBilletter.getFilm(), innBilletter.getSeter(), innBilletter.getFornavn(),
                innBilletter.getEtternavn(), innBilletter.getMail(), innBilletter.getTlf());
    }

    public void endreEiBilet(billetter billett){
        String sql = "UPDATE billetter SET film=?, seter=?, fornavn=?, etternavn=?, mail=?, tlf=? WHERE id=?";
        db.update(sql,billett.getFilm(), billett.getSeter(), billett.getFornavn(), billett.getEtternavn(),
                billett.getMail(), billett.getTlf(), billett.getId());
    }

    public billetter hentEiBilet(int id){
        String sql = "SELECT * FROM billetter WHERE id=?";
        List<billetter> eiBilet = db.query(sql,new BeanPropertyRowMapper(billetter.class),id);
        return eiBilet.get(0);
    }
    public List<billetter> hentAlleBilletter(){
        String sql = "SELECT * FROM billetter ORDER BY etternavn";
        List<billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper(billetter.class));
        return alleBilletter;
    }

    public void slettEiBilet(int id){
        String sql = "DELETE FROM billetter WHERE id=?";
        db.update(sql,id);
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM billetter";
        db.update(sql);
    }

}