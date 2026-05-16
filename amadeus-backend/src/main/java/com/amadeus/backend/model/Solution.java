package com.amadeus.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "solutions")
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String slug;
    private String title;

    @Column(length = 2000)
    private String description;

    private String icon;
    private String heroImage;

    @Column(length = 5000)
    private String longDescription;

    @ElementCollection
    @CollectionTable(name = "solution_features", joinColumns = @JoinColumn(name = "solution_id"))
    @Column(name = "feature")
    private List<String> features;

    public Solution() {}

    public Solution(String slug, String title, String description, String icon, String heroImage, String longDescription, List<String> features) {
        this.slug = slug;
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.heroImage = heroImage;
        this.longDescription = longDescription;
        this.features = features;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
    public String getHeroImage() { return heroImage; }
    public void setHeroImage(String heroImage) { this.heroImage = heroImage; }
    public String getLongDescription() { return longDescription; }
    public void setLongDescription(String longDescription) { this.longDescription = longDescription; }
    public List<String> getFeatures() { return features; }
    public void setFeatures(List<String> features) { this.features = features; }
}
