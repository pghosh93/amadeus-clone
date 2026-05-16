package com.amadeus.backend.service;

import com.amadeus.backend.model.NewsArticle;
import com.amadeus.backend.repository.NewsArticleRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class NewsService {

    private final NewsArticleRepository repository;

    public NewsService(NewsArticleRepository repository) {
        this.repository = repository;
    }

    public List<NewsArticle> findAll() {
        return repository.findAllByOrderByPublishDateDesc();
    }

    public List<NewsArticle> findByCategory(String category) {
        return repository.findByCategory(category);
    }

    public Optional<NewsArticle> findBySlug(String slug) {
        return repository.findBySlug(slug);
    }

    public List<NewsArticle> search(String query) {
        return repository.search(query);
    }
}
