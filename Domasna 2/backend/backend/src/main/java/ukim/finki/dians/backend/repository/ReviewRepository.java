package ukim.finki.dians.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ukim.finki.dians.backend.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Long> {
}
