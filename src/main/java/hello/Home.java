/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author YvesLambert
 */
@Entity
@Table(name = "home")
public class Home {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String nam;
    
    

    public Home() {
    }
    
    public Home(String nam) {
        this.nam = nam;
    }
   
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNam() {
        return nam;
    }

    public void setNam(String nam) {
        this.nam = nam;
    }

    
    
    
    
}
