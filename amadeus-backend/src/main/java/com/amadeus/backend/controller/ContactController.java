package com.amadeus.backend.controller;

import com.amadeus.backend.model.ContactRequest;
import com.amadeus.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(@Valid @RequestBody ContactRequest request) {
        service.submit(request);
        return ResponseEntity.ok(Map.of("status", "success", "message", "Thank you for contacting us. We will get back to you shortly."));
    }
}
