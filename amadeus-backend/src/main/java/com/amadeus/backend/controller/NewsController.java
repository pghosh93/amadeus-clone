package com.amadeus.backend.controller;

import com.amadeus.backend.model.NewsArticle;
import com.amadeus.backend.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsService service;

    public NewsController(NewsService service) {
        this.service = service;
    }

    @GetMapping
    public List<NewsArticle> getAll(@RequestParam(required = false) String category) {
        if (category != null) {
            return service.findByCategory(category);
        }
        return service.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<NewsArticle> getBySlug(@PathVariable String slug) {
        return service.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/search")
    public List<NewsArticle> search(@RequestParam String q) {
        return service.search(q);
    }
}
