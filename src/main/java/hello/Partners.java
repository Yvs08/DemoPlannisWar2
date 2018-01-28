/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hello;

import java.io.Serializable;
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
@Table(name = "partners")
public class Partners implements Serializable { 
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO) 
    private Integer id;
    private String partn;
    private String password;
    
    public Partners() {
    }

    public Partners( String partn, String password) {
      
        this.partn = partn;
        this.password = password;
    }
    
      public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    

    public String getPartn() {
        return partn;
    }

    public void setPartn(String partn) {
        this.partn = partn;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
    
}
