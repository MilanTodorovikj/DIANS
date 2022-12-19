package ukim.finki.dians.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer grade;
    @Column(length = 400)
    private String comment;
    private LocalDate date;
    @ManyToOne
    private Visitor visitor;

    public Review(Integer grade, String comment, Visitor visitor) {
        this.grade = grade;
        this.comment = comment;
        this.visitor = visitor;
        date=LocalDate.now();
    }
}
