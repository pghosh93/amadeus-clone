package com.amadeus.backend.controller;

import com.amadeus.backend.model.NewsArticle;
import com.amadeus.backend.model.Product;
import com.amadeus.backend.model.Solution;
import com.amadeus.backend.service.NewsService;
import com.amadeus.backend.service.ProductService;
import com.amadeus.backend.service.SolutionService;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final ProductService productService;
    private final NewsService newsService;
    private final SolutionService solutionService;

    public SearchController(ProductService productService, NewsService newsService, SolutionService solutionService) {
        this.productService = productService;
        this.newsService = newsService;
        this.solutionService = solutionService;
    }

    @GetMapping
    public Map<String, Object> search(@RequestParam String q) {
        Map<String, Object> results = new HashMap<>();
        List<Product> products = productService.search(q);
        List<NewsArticle> news = newsService.search(q);
        List<Solution> solutions = solutionService.findAll().stream()
                .filter(s -> s.getTitle().toLowerCase().contains(q.toLowerCase())
                        || s.getDescription().toLowerCase().contains(q.toLowerCase()))
                .toList();

        results.put("products", products);
        results.put("news", news);
        results.put("solutions", solutions);
        results.put("totalResults", products.size() + news.size() + solutions.size());
        return results;
    }
}
