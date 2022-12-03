package ukim.finki.dians.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ukim.finki.dians.backend.model.Visitor;

import java.util.Optional;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor,Long> {

    Optional<Visitor> findByFullNameAndMail(String name,String email);
}
