package ukim.finki.dians.backend.service.impl;

import org.springframework.stereotype.Service;
import ukim.finki.dians.backend.model.Visitor;
import ukim.finki.dians.backend.repository.VisitorRepository;
import ukim.finki.dians.backend.service.VisitorService;

@Service
public class VisitorServiceImpl implements VisitorService {

    private final VisitorRepository visitorRepository;

    public VisitorServiceImpl(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    @Override
    public Visitor save(String name, String email) {
        if(visitorRepository.findByFullNameAndMail(name,email).isEmpty())
            return visitorRepository.save(new Visitor(name,email));
        return visitorRepository.findByFullNameAndMail(name,email).get();
    }
}
