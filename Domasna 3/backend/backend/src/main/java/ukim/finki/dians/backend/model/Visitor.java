package ukim.finki.dians.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String mail;

    public Visitor(String fullName, String mail) {
        this.fullName = fullName;
        this.mail = mail;
    }
}
