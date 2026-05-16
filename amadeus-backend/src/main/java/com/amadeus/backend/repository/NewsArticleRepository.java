package com.amadeus.backend.repository;

import com.amadeus.backend.model.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {
    List<NewsArticle> findByCategory(String category);
    Optional<NewsArticle> findBySlug(String slug);
    List<NewsArticle> findAllByOrderByPublishDateDesc();

    @Query("SELECT n FROM NewsArticle n WHERE LOWER(n.title) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(n.content) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<NewsArticle> search(@Param("query") String query);
}
