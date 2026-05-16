package com.amadeus.backend.service;

import com.amadeus.backend.model.Product;
import com.amadeus.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public List<Product> findByIndustry(String industry) {
        return repository.findByIndustry(industry);
    }

    public List<Product> findByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<Product> findByIndustryAndCategory(String industry, String category) {
        return repository.findByIndustryAndCategory(industry, category);
    }

    public List<Product> findFiltered(String industry, String category) {
        if (industry != null && category != null) {
            return repository.findByIndustryAndCategory(industry, category);
        } else if (industry != null) {
            return repository.findByIndustry(industry);
        } else if (category != null) {
            return repository.findByCategory(category);
        }
        return repository.findAll();
    }

    public Optional<Product> findBySlug(String slug) {
        return repository.findBySlug(slug);
    }

    public List<Product> search(String query) {
        return repository.search(query);
    }
}
