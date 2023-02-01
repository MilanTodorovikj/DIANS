package ukim.finki.dians.backend.service;

import ukim.finki.dians.backend.model.Visitor;

public interface VisitorService {
    Visitor save(String name, String email);
}
