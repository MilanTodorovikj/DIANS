package ukim.finki.dians.backend.model.exceptions;

public class EducationUnitNotFound extends RuntimeException{
    public EducationUnitNotFound(Long id) {
        super(String.format("Education unit with id: %d not found",id));
    }
}
