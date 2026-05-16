package com.amadeus.backend.config;

import com.amadeus.backend.model.NewsArticle;
import com.amadeus.backend.model.Product;
import com.amadeus.backend.model.Solution;
import com.amadeus.backend.repository.NewsArticleRepository;
import com.amadeus.backend.repository.ProductRepository;
import com.amadeus.backend.repository.SolutionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final SolutionRepository solutionRepo;
    private final ProductRepository productRepo;
    private final NewsArticleRepository newsRepo;

    public DataInitializer(SolutionRepository solutionRepo, ProductRepository productRepo, NewsArticleRepository newsRepo) {
        this.solutionRepo = solutionRepo;
        this.productRepo = productRepo;
        this.newsRepo = newsRepo;
    }

    @Override
    public void run(String... args) {
        initSolutions();
        initProducts();
        initNews();
    }

    private void initSolutions() {
        List<Solution> solutions = Arrays.asList(
            new Solution("airlines", "Airlines",
                "Drive innovation with technology designed to meet every airline's needs.",
                "Plane", "/images/airlines-hero.jpg",
                "Amadeus provides end-to-end technology solutions for airlines, from passenger service systems and departure control to revenue management and digital experience platforms. Our solutions help airlines optimize operations, enhance passenger experiences, and drive revenue growth across all channels.",
                Arrays.asList("Passenger Service Systems", "Revenue Management", "Departure Control", "Digital Experience", "NDC & Distribution", "Loyalty Programs", "Network Planning", "Disruption Management")),
            new Solution("airports", "Airports",
                "Deliver a smooth airport experience across all touchpoints.",
                "Building2", "/images/airports-hero.jpg",
                "Amadeus airport technology powers seamless passenger journeys from curb to gate. Our solutions cover common-use platforms, passenger processing, airport operations, and flow management to help airports operate efficiently and deliver outstanding traveler experiences.",
                Arrays.asList("Common-Use Technology", "Passenger Processing", "Airport Operations", "Flow Management", "Ground Handling", "Baggage Management", "Self-Service Solutions", "Biometric Solutions")),
            new Solution("travel-sellers", "Travel Sellers",
                "Provide relevant content and personalized offers, ensuring an end-to-end traveler experience.",
                "ShoppingBag", "/images/travel-sellers-hero.jpg",
                "Amadeus empowers travel agencies and sellers with the world's largest travel marketplace. Access flights, hotels, cars, rail, tours and more through a single platform, with powerful tools to search, compare, book and service travel.",
                Arrays.asList("Travel Platform", "Content Aggregation", "Booking Management", "Mid & Back Office", "Payment Solutions", "Business Intelligence", "Online Booking Tools", "Corporate Travel")),
            new Solution("hospitality", "Hospitality",
                "Maximize revenue and deliver memorable guest experiences with smart hospitality solutions.",
                "Hotel", "/images/hospitality-hero.jpg",
                "Amadeus hospitality solutions help hotels and accommodation providers optimize distribution, maximize revenue, and deliver personalized guest experiences across the entire journey, from discovery to post-stay.",
                Arrays.asList("Central Reservation System", "Revenue Management", "Distribution", "Guest Management", "Property Management", "Sales & Catering", "Business Intelligence", "Digital Media")),
            new Solution("payments", "Payments",
                "Simplify payments and reduce costs with integrated travel payment solutions.",
                "CreditCard", "/images/payments-hero.jpg",
                "Amadeus payment solutions streamline the complex world of travel payments. From B2B settlement to virtual cards and multi-currency processing, we help the travel ecosystem pay and get paid more efficiently.",
                Arrays.asList("B2B Wallet", "Virtual Payments", "Payment Gateway", "Fraud Prevention", "Multi-Currency", "Settlement", "Payment Analytics", "Alternative Payments")),
            new Solution("border-authorities", "Border Authorities",
                "Secure borders while facilitating seamless travel with advanced passenger processing.",
                "Shield", "/images/border-hero.jpg",
                "Amadeus border security solutions help government agencies process travelers efficiently while maintaining the highest security standards. Our technology enables risk assessment, identity verification, and automated border control.",
                Arrays.asList("Advance Passenger Information", "Risk Assessment", "Identity Verification", "Automated Border Control", "Visa Management", "Passenger Name Records", "Watchlist Screening", "Travel Document Verification")),
            new Solution("corporate-travel", "Corporate Travel & Expense",
                "Manage corporate travel programs with intelligent tools and comprehensive content.",
                "Briefcase", "/images/corporate-hero.jpg",
                "Amadeus corporate travel solutions help companies manage travel programs effectively, control costs, ensure duty of care, and deliver great traveler experiences through intelligent booking tools and expense management.",
                Arrays.asList("Online Booking Tools", "Expense Management", "Travel Policy", "Duty of Care", "Analytics & Reporting", "Supplier Management", "Traveler Profiles", "Mobile Solutions")),
            new Solution("travel-intelligence", "Travel Intelligence",
                "Unlock the power of travel data to make smarter decisions and gain competitive advantage.",
                "BarChart3", "/images/intelligence-hero.jpg",
                "Amadeus Travel Intelligence leverages the industry's richest data sets to deliver actionable insights. From demand forecasting to competitive benchmarking, our analytics solutions help travel businesses make data-driven decisions.",
                Arrays.asList("Market Intelligence", "Demand Forecasting", "Competitive Analysis", "Route Analytics", "Traveler Insights", "Revenue Optimization", "Custom Reports", "Data Visualization"))
        );
        solutionRepo.saveAll(solutions);
    }

    private void initProducts() {
        List<Product> products = Arrays.asList(
            new Product("Amadeus Altéa Passenger Service System", "Offering best-in-class solutions and unrivalled expertise, our industry-standard Amadeus Altéa PSS powers hundreds of full-service airlines worldwide.", "Airlines", "Airlines", "altea-pss"),
            new Product("Amadeus Altéa Reservation", "Empower your agents to anticipate customer needs and enhance their experience with secure passenger records and shared customer preferences.", "Airlines", "Altea Reservation", "altea-reservation"),
            new Product("Amadeus Ticketing Platform", "All the e-ticketing services you need, packed into one management platform with central ticketing server and e-ticket network.", "Airlines", "Altea Ticketing", "ticketing-platform"),
            new Product("Amadeus Nevio Order Management System", "Easily manage orders and give your customers a simple purchasing and servicing experience with partners.", "Airlines", "Airlines", "nevio-oms"),
            new Product("Amadeus Revenue Management", "Maximize revenue with sophisticated demand forecasting and pricing optimization across all fare classes and booking channels.", "Airlines", "Revenue Management", "revenue-management"),
            new Product("Amadeus Sky Suite", "Comprehensive network and schedule planning tools to optimize route profitability and fleet utilization.", "Airlines", "Network & Schedule Planning - Sky suite", "sky-suite"),
            new Product("Amadeus Digital Experience", "Create seamless digital touchpoints for travelers across web, mobile, and kiosk channels.", "Airlines", "Altea Digital touchpoints", "digital-experience"),
            new Product("Amadeus Disruption Management", "Minimize the impact of irregular operations with automated rebooking and proactive passenger communication.", "Airlines", "Disruption Management", "disruption-management"),
            new Product("Amadeus Travel Seller Media", "Get more sales opportunities through the world's largest travel network with targeted ad campaigns.", "Airlines", "Airline Services", "travel-seller-media"),
            new Product("Amadeus Customer Loyalty", "Build lasting relationships with travelers through flexible loyalty program management and personalized rewards.", "Airlines", "Customer loyalty", "customer-loyalty"),
            new Product("Amadeus Airport Common Use Service", "Enable multiple airlines to share check-in counters, gates, and other airport resources efficiently.", "Airports", "Airport management systems", "airport-cuss"),
            new Product("Amadeus Flow Manager", "Optimize passenger flow through the airport with real-time monitoring and predictive queue management.", "Airports", "Airport management systems", "flow-manager"),
            new Product("Amadeus Airport Baggage Management", "Track and manage baggage throughout the airport journey with end-to-end visibility and resolution tools.", "Airports", "Passenger & baggage solutions", "baggage-management"),
            new Product("Amadeus Ground Handling", "Streamline ground handling operations with integrated planning, resource management, and billing tools.", "Airports", "Ground handling", "ground-handling"),
            new Product("Amadeus Travel Platform", "The world's largest travel marketplace connecting content providers, sellers and partners.", "Travel Sellers", "Travel Sellers", "travel-platform"),
            new Product("Amadeus Selling Platform Connect", "A powerful desktop solution for travel agencies with access to the full breadth of travel content.", "Travel Sellers", "Travel Sellers", "selling-platform-connect"),
            new Product("Amadeus cytric Travel & Expense", "An all-in-one corporate booking and expense management tool with AI-powered recommendations.", "Corporations", "Corporations", "cytric"),
            new Product("Amadeus Central Reservation System", "Maximize hotel distribution and revenue with a powerful central reservation system.", "Hospitality", "Content", "hotel-crs"),
            new Product("Amadeus Hotel Revenue Management", "Optimize pricing and inventory with AI-driven revenue management for hotels.", "Hospitality", "Revenue Management", "hotel-revenue-mgmt"),
            new Product("Amadeus B2B Wallet", "Streamline B2B payments in travel with virtual cards and automated settlement.", "Travel Sellers", "Sales and Distribution", "b2b-wallet"),
            new Product("Amadeus Travel Intelligence", "Leverage the industry's richest data for actionable market insights and competitive analysis.", "Airlines", "Travel Intelligence", "travel-intelligence"),
            new Product("Amadeus NDC Solutions", "Enable airlines to retail rich offers with New Distribution Capability standards.", "Airlines", "NDC for airlines", "ndc-solutions"),
            new Product("Amadeus Dynamic Pricing", "Optimize pricing in real-time with AI-driven dynamic offer creation.", "Airlines", "Dynamic Offer Pricing", "dynamic-pricing"),
            new Product("Amadeus Revenue Accounting", "Automate revenue accounting processes with accurate and timely financial data.", "Airlines", "Revenue Accounting", "revenue-accounting"),
            new Product("Amadeus Biometric Solutions", "Enable seamless passenger identification with facial recognition and biometric technology.", "Airports", "Passenger & baggage solutions", "biometric-solutions"),
            new Product("Amadeus Self-Service Kiosks", "Empower travelers with intuitive self-service check-in and bag drop solutions.", "Airports", "Airport management systems", "self-service-kiosks"),
            new Product("Amadeus Online Booking Engine", "A customizable online booking platform for travel agencies and tour operators.", "Travel Sellers", "Travel Sellers", "online-booking-engine"),
            new Product("Amadeus Hotel Store", "A digital storefront solution for hotels to showcase and sell their properties directly to travelers.", "Hospitality", "Content", "hotel-store"),
            new Product("Amadeus Guest Management", "Deliver personalized guest experiences with comprehensive profile management and communication tools.", "Hospitality", "Content", "guest-management"),
            new Product("Amadeus Advance Passenger Information", "Process and validate passenger data for border security compliance with automated API solutions.", "Border Authorities", "Products", "api-solution")
        );
        productRepo.saveAll(products);
    }

    private void initNews() {
        List<NewsArticle> articles = Arrays.asList(
            new NewsArticle("How AI is Transforming Travel at Scale",
                "Artificial Intelligence is revolutionizing every aspect of the travel industry, from personalized recommendations to dynamic pricing and operational efficiency. Amadeus is at the forefront of this transformation, deploying AI across its technology solutions to help travel businesses serve their customers better. Machine learning algorithms analyze billions of data points to predict demand, optimize routes, and personalize the traveler experience in ways that were previously impossible.",
                "Discover how Amadeus is leveraging AI to transform the travel industry with smarter, more personalized solutions.",
                "Technology", "/images/ai-travel.jpg", "ai-transforming-travel",
                LocalDate.of(2026, 3, 15), "Amadeus Research"),
            new NewsArticle("Future-Ready Travel: Powered by Cloud Technologies",
                "Cloud computing has become the backbone of modern travel technology, enabling unprecedented scalability, reliability, and innovation speed. Amadeus has migrated its core systems to the cloud, processing billions of transactions with sub-second response times. This cloud-first approach allows travel companies to scale dynamically, adopt new features faster, and reduce their environmental footprint.",
                "Cloud technologies are reshaping how travel companies operate, innovate, and serve their customers.",
                "Technology", "/images/cloud-travel.jpg", "cloud-technologies",
                LocalDate.of(2026, 2, 28), "Amadeus Tech"),
            new NewsArticle("Travel Trends 2026: The Year of Sustainable Innovation",
                "The travel industry continues to evolve rapidly, with sustainability taking center stage in 2026. From carbon-aware booking tools to sustainable aviation fuel tracking, travel companies are embracing green initiatives. Amadeus research reveals that 73% of travelers now consider sustainability when making travel decisions, driving innovation across the entire ecosystem.",
                "Amadeus unveils the top travel trends for 2026, with sustainability and technology leading the way.",
                "Industry Insights", "/images/trends-2026.jpg", "travel-trends-2026",
                LocalDate.of(2026, 1, 10), "Amadeus Insights"),
            new NewsArticle("Amadeus Nevio: Next-Generation Order Management",
                "Amadeus Nevio represents a paradigm shift in airline retailing, moving from the traditional PNR-based model to modern offer and order management. With millions of orders already in production and billions of offers created daily, Nevio is transforming how airlines sell, service, and deliver travel experiences to their customers.",
                "Amadeus Nevio is revolutionizing airline retailing with modern offer and order management capabilities.",
                "Products", "/images/nevio.jpg", "amadeus-nevio-launch",
                LocalDate.of(2026, 4, 5), "Amadeus Product"),
            new NewsArticle("Sustainability in Action: Putting Planet at the Core",
                "Amadeus is committed to putting people, places, and the planet at the core of everything we do. Our sustainability initiatives span from reducing the carbon footprint of our own operations to developing tools that help the travel industry make more sustainable choices. Through partnerships and innovation, we're working toward a more responsible travel ecosystem.",
                "How Amadeus is driving sustainability across the travel industry through technology and partnerships.",
                "Sustainability", "/images/sustainability.jpg", "sustainability-action",
                LocalDate.of(2026, 3, 1), "Amadeus CSR"),
            new NewsArticle("Amadeus Annual Results Show Strong Growth",
                "Amadeus reports strong financial results driven by continued recovery in global travel and successful technology innovation. The company processed record booking volumes and saw significant growth across its IT Solutions and Distribution segments, reaffirming its leadership position in travel technology.",
                "Amadeus delivers robust financial performance with record booking volumes and technology adoption.",
                "Corporate", "/images/annual-results.jpg", "annual-results-2025",
                LocalDate.of(2026, 2, 15), "Amadeus Corporate"),
            new NewsArticle("The Rise of Biometric Travel: Seamless Airport Experiences",
                "Biometric technology is transforming airport experiences worldwide. From facial recognition at check-in to contactless boarding, airports are adopting biometric solutions to create smoother, faster passenger journeys. Amadeus biometric solutions are now deployed across major airports globally.",
                "Biometric technology is creating seamless, contactless airport experiences for millions of travelers.",
                "Technology", "/images/biometrics.jpg", "biometric-travel",
                LocalDate.of(2026, 1, 25), "Amadeus Airports"),
            new NewsArticle("NDC Adoption Accelerates Across the Industry",
                "New Distribution Capability (NDC) adoption has reached a tipping point, with major airlines and travel sellers embracing the standard for richer, more personalized travel retailing. Amadeus NDC solutions now connect hundreds of airlines with thousands of travel sellers, enabling dynamic offers and ancillary bundling.",
                "NDC adoption reaches critical mass as airlines and sellers embrace modern retailing standards.",
                "Industry Insights", "/images/ndc.jpg", "ndc-adoption",
                LocalDate.of(2026, 4, 12), "Amadeus Distribution")
        );
        newsRepo.saveAll(articles);
    }
}
