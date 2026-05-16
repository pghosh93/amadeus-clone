package com.amadeus.backend.service;

import com.amadeus.backend.model.ContactRequest;
import com.amadeus.backend.repository.ContactRequestRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRequestRepository repository;

    public ContactService(ContactRequestRepository repository) {
        this.repository = repository;
    }

    public ContactRequest submit(ContactRequest request) {
        return repository.save(request);
    }
}
