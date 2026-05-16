package com.amadeus.backend.repository;

import com.amadeus.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByIndustry(String industry);
    List<Product> findByCategory(String category);
    List<Product> findByIndustryAndCategory(String industry, String category);
    Optional<Product> findBySlug(String slug);

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Product> search(@Param("query") String query);
}
