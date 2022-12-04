package ukim.finki.dians.backend.service.impl;

import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.repository.VisitorRepository;
import ukim.finki.dians.backend.service.VisitorService;

@Service
public class VisitorServiceImpl implements VisitorService {

    private final VisitorRepository visitorRepository;

    public VisitorServiceImpl(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

}
