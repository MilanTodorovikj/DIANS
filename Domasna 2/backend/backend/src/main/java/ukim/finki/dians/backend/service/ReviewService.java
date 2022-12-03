package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.Review;

public interface ReviewService {
    Review save(Review review,Long id);
}
