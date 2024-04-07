package com.example.obligatorisk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class billetterRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(billetter innBilletter){
        String sql = "INSERT INTO billetter (film,seter,fornavn,etternavn,mail,tlf) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBilletter.getFilm(), innBilletter.getSeter(), innBilletter.getFornavn(),
                innBilletter.getEtternavn(), innBilletter.getMail(), innBilletter.getTlf());
    }

    public List<billetter> hentAlleBilletter(){
        String sql = "SELECT * FROM billetter ORDER BY etternavn";
        List<billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper(billetter.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM billetter";
        db.update(sql);
    }
}