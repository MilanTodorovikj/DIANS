package ukim.finki.dians.backend.model.helper;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@Component
@NoArgsConstructor
public class ReviewHelper {

    private Integer rate;
    private String comment;
    private String name;
    private String email;

    public ReviewHelper(Integer rate, String comment, String name, String email) {
        this.rate = rate;
        this.comment = comment;
        this.name = name;
        this.email = email;
    }
}
