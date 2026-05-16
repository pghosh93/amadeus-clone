package com.amadeus.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "news_articles")
public class NewsArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 5000)
    private String content;

    @Column(length = 1000)
    private String summary;

    private String category;
    private String image;
    private String slug;
    private LocalDate publishDate;
    private String author;

    public NewsArticle() {}

    public NewsArticle(String title, String content, String summary, String category, String image, String slug, LocalDate publishDate, String author) {
        this.title = title;
        this.content = content;
        this.summary = summary;
        this.category = category;
        this.image = image;
        this.slug = slug;
        this.publishDate = publishDate;
        this.author = author;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    public LocalDate getPublishDate() { return publishDate; }
    public void setPublishDate(LocalDate publishDate) { this.publishDate = publishDate; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
}
