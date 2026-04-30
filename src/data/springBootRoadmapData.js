// src/data/springBootRoadmapData.js

export const springBootRoadmapData = {
    "Java Fundamentals": {
        level: 'beginner',
        estimatedHours: 60,
        resources: [
            "Java Official Documentation (docs.oracle.com)",
            "Effective Java by Joshua Bloch",
            "Java Programming Masterclass - Udemy"
        ],
        items: [
            "Learn the Basics (syntax, variables, data types, operators)",
            "Control Flow (if/else, switch, loops)",
            "Object-Oriented Programming (classes, objects, inheritance, polymorphism, encapsulation, abstraction)",
            "Methods and Functions",
            "Exception Handling (try/catch/finally, custom exceptions)",
            "Collections Framework (List, Set, Map, Queue)",
            "Generics",
            "File I/O (streams, readers, writers, NIO)",
            "Threads and Concurrency (Thread, Runnable, synchronized, ExecutorService)",
            "Java API (String, Math, Date/Time)",
            "Modern Java Features - Streams and Lambdas",
            "Modern Java Features - Optional",
            "Modern Java Features - Records, Sealed Classes, Pattern Matching",
            "Virtual Threads (Project Loom - Java 21+)",
            "Design Patterns (Creational, Structural, Behavioral)",
            "Java Memory Management (Heap, Stack, GC)",
            "Unit Testing basics with JUnit",
            "Build Tools (Maven & Gradle)",
            "Version Control with Git",
            "Performance Tuning and Garbage Collection"
        ]
    },
    "Spring Framework Basics": {
        level: 'beginner',
        estimatedHours: 40,
        resources: [
            "Spring Framework Official Documentation (docs.spring.io)",
            "Spring in Action by Craig Walls",
            "Baeldung Spring Guides"
        ],
        items: [
            "Introduction to Spring (history, ecosystem overview)",
            "Setting Up Spring Environment",
            "Inversion of Control (IoC) principle",
            "Dependency Injection (DI) - Constructor, Setter, Field",
            "Spring Beans and Scopes (singleton, prototype, request, session)",
            "Bean Lifecycle and ApplicationContext",
            "Annotation-based Configuration (@Configuration, @ComponentScan, @Bean)",
            "Profiles and Conditional Beans (@Profile, @Conditional)",
            "Introduction to Aspect-Oriented Programming (AOP)",
            "Spring AOP Implementation (@Aspect, @Around, @Before, @After)",
            "Spring JDBC & Transactions",
            "Spring MVC Basics (DispatcherServlet, Controllers, Views)"
        ]
    },
    "Introduction to Spring Boot": {
        level: 'beginner',
        estimatedHours: 35,
        resources: [
            "Spring Boot Official Documentation (docs.spring.io)",
            "Spring Boot in Practice",
            "Spring Initializr (start.spring.io)"
        ],
        items: [
            "Understanding Spring Boot vs Spring Framework",
            "Setting Up a Spring Boot Project with Spring Initializr",
            "Project Structure and conventions",
            "Auto-Configuration internals",
            "YAML and .properties Configuration",
            "Starters and Dependencies management",
            "Embedded Servers (Tomcat, Jetty, Undertow)",
            "Profiles and External Configuration",
            "Spring Boot Actuator basics",
            "DevTools for hot-reloading",
            "Logging and Observability (SLF4J, Logback)",
            "Spring Boot 3 and Native Image Support (GraalVM)",
            "Testing and Integration basics",
            "Handling Exceptions globally (@ControllerAdvice)"
        ]
    },
    "Spring Data": {
        level: 'intermediate',
        estimatedHours: 45,
        resources: [
            "Spring Data JPA Official Documentation",
            "Hibernate ORM Documentation",
            "Baeldung JPA / Spring Data tutorials"
        ],
        items: [
            "Understand Data Persistence concepts (ORM, JPA)",
            "Learn Basics of Relational Databases (SQL, RDBMS)",
            "Introduction to Spring Data JPA",
            "Spring Boot and Data JPA Integration",
            "Entity Relationships (@OneToOne, @OneToMany, @ManyToMany)",
            "Query Methods and Named Queries (method naming convention)",
            "Auditing with Spring Data JPA (@CreatedDate, @LastModifiedDate)",
            "Pagination and Sorting (Pageable, Sort)",
            "Custom Repository Methods (@Query, JPQL, native SQL)",
            "NoSQL Databases and Spring Data (MongoDB, Redis)",
            "Spring Data REST (auto-generated REST endpoints)",
            "Transaction Management (@Transactional)",
            "Data Initialization (data.sql, CommandLineRunner)",
            "Spring Data Envers (entity auditing/versioning)"
        ]
    },
    "Spring Security": {
        level: 'intermediate',
        estimatedHours: 40,
        resources: [
            "Spring Security Official Documentation",
            "OAuth 2.0 in Action",
            "Baeldung Spring Security series"
        ],
        items: [
            "Introduction to Security Concepts (authentication vs authorization)",
            "Basic Spring Security Configuration (SecurityFilterChain)",
            "Authentication Providers (UserDetailsService, InMemoryUserDetails)",
            "Password Encryption (BCryptPasswordEncoder)",
            "Custom Authentication filters",
            "Authorization (role-based access control)",
            "Method-Level Security (@PreAuthorize, @PostAuthorize, @Secured)",
            "Spring Security Expression Language (SpEL)",
            "OAuth 2.0 and OpenID Connect",
            "Single Sign-On (SSO) implementation",
            "Cross-Site Request Forgery (CSRF) Protection",
            "Session Management",
            "Security Headers (HSTS, CSP, X-Frame-Options)",
            "Secure File Uploads",
            "Spring Security with Spring Boot Actuator",
            "Integration with JWT (JSON Web Tokens)",
            "Testing Security Configurations"
        ]
    },
    "Spring Boot Testing": {
        level: 'intermediate',
        estimatedHours: 30,
        resources: [
            "Spring Testing Official Documentation",
            "JUnit 5 User Guide",
            "Mockito Documentation"
        ],
        items: [
            "Basics of Unit Testing (test pyramids, best practices)",
            "Introduction to JUnit 5 (@Test, @BeforeEach, @AfterEach)",
            "Writing Effective Test Cases (AAA pattern)",
            "Mockito Fundamentals (@Mock, @InjectMocks)",
            "Mocking and Stubbing (when/thenReturn, verify)",
            "Parameterized Tests (@ParameterizedTest)",
            "Exception Testing (assertThrows)",
            "Test Suites",
            "Integration Testing Basics (@SpringBootTest)",
            "Spring Boot Testing Annotations (@WebMvcTest, @DataJpaTest)",
            "Mocking Dependencies in Spring Boot (@MockBean)",
            "Database Testing (H2, Testcontainers)",
            "Testing RESTful APIs (MockMvc, RestAssured)",
            "Test Coverage and Code Quality (JaCoCo)",
            "Continuous Integration (CI) with Testing",
            "Test Driven Development (TDD)",
            "Testing asynchronous code"
        ]
    },
    "Building RESTful APIs": {
        level: 'intermediate',
        estimatedHours: 35,
        resources: [
            "REST API Design Best Practices",
            "Spring MVC Documentation",
            "OpenAPI / Swagger Documentation"
        ],
        items: [
            "Understand RESTful Principles (stateless, uniform interface)",
            "Set Up a Development Environment",
            "Plan API Endpoints (resource naming, hierarchy)",
            "HTTP Methods and Status Codes (GET, POST, PUT, PATCH, DELETE)",
            "Request and Response Formats (JSON, XML, content negotiation)",
            "RESTful Routing (@RestController, @RequestMapping, @GetMapping)",
            "Authentication and Authorization in APIs",
            "Request Validation (@Valid, @NotNull, @Size, custom validators)",
            "Serialization and Deserialization (Jackson, @JsonProperty)",
            "API Documentation with OpenAPI/Swagger (@Operation, @ApiResponse)",
            "Error Handling (@ControllerAdvice, ProblemDetail)",
            "Rate Limiting",
            "Testing REST APIs (MockMvc, Postman)",
            "API Versioning (URI, header, parameter strategies)",
            "Security Best Practices (HTTPS, input sanitization)",
            "Logging and Monitoring",
            "Cross-Origin Resource Sharing (CORS)"
        ]
    },
    "GraphQL with Spring Boot": {
        level: 'intermediate',
        estimatedHours: 20,
        resources: [
            "GraphQL Official Documentation (graphql.org)",
            "Spring for GraphQL Documentation",
            "Techdozo GraphQL tutorials"
        ],
        items: [
            "Introduction to GraphQL (schema, queries, mutations, subscriptions)",
            "Basic GraphQL Queries",
            "GraphQL Mutations",
            "Data Fetching with DataLoaders (N+1 problem)",
            "Pagination and Filtering in GraphQL",
            "GraphQL and JPA Integration",
            "Error Handling in GraphQL",
            "Securing GraphQL Endpoints",
            "GraphQL and Spring Security Integration",
            "Testing GraphQL Endpoints",
            "Performance Optimization",
            "GraphQL Best Practices"
        ]
    },
    "Messaging with Spring Boot": {
        level: 'advanced',
        estimatedHours: 35,
        resources: [
            "Spring Messaging Official Documentation",
            "Apache Kafka Documentation",
            "RabbitMQ Documentation"
        ],
        items: [
            "Introduction to Messaging (synchronous vs asynchronous)",
            "Messaging Patterns (pub/sub, point-to-point, request/reply)",
            "Introduction to Message Brokers",
            "RabbitMQ concepts (exchanges, queues, bindings)",
            "Spring Boot with RabbitMQ (@RabbitListener, RabbitTemplate)",
            "Apache Kafka concepts (topics, partitions, consumer groups)",
            "Spring Boot with Apache Kafka (@KafkaListener, KafkaTemplate)",
            "Messaging in Microservices",
            "Message Serialization and Deserialization (Avro, JSON)",
            "Error Handling in Messaging Systems (DLQ, retries)",
            "Asynchronous Processing (@Async)",
            "Spring Cloud Stream abstraction",
            "Security in Messaging Systems (SSL/TLS, SASL)"
        ]
    },
    "Spring Boot Actuator": {
        level: 'intermediate',
        estimatedHours: 15,
        resources: [
            "Spring Boot Actuator Official Documentation",
            "Micrometer Documentation",
            "Spring Boot Admin Documentation"
        ],
        items: [
            "Introduction to Spring Boot Actuator",
            "Integration with Spring Boot (spring-boot-starter-actuator)",
            "Actuator Endpoints (/health, /info, /metrics, /env)",
            "Custom Endpoints (@Endpoint, @ReadOperation)",
            "Security and Endpoints Protection",
            "Monitoring and Metrics (Micrometer, Prometheus)",
            "Health Indicators (@HealthIndicator)",
            "Info Endpoint customization",
            "Logging and Auditing via Actuator",
            "Exposing Additional Information",
            "Remote Management with JMX",
            "Events and Event Listeners",
            "Spring Boot Admin dashboard setup"
        ]
    },
    "Spring Batch": {
        level: 'advanced',
        estimatedHours: 25,
        resources: [
            "Spring Batch Official Documentation",
            "Spring Batch in Action",
            "Baeldung Spring Batch guides"
        ],
        items: [
            "Introduction to Spring Batch (use cases, architecture)",
            "Core Components: Job and Step",
            "Core Components: ItemReader, ItemProcessor, ItemWriter",
            "Advanced Concepts: JobRepository and JobLauncher",
            "Advanced Concepts: JobParameters and JobExecutionListener",
            "Advanced Concepts: Transaction Management in Batch",
            "Advanced Concepts: Job Restart and Recovery",
            "Chunk-Oriented Processing",
            "Parallel and Scalable Processing (multi-threaded, partitioning)",
            "Data Sources and Integration (FlatFile, JDBC, JPA readers/writers)",
            "Error Handling and Retry (skip, retry policies)",
            "Monitoring and Management",
            "Testing Spring Batch Jobs"
        ]
    },
    "Spring Cloud & Microservices": {
        level: 'advanced',
        estimatedHours: 50,
        resources: [
            "Spring Cloud Official Documentation (spring.io/projects/spring-cloud)",
            "Microservices Patterns by Chris Richardson",
            "microservices.io patterns"
        ],
        items: [
            "Microservices Fundamentals (bounded contexts, decomposition)",
            "Introduction to Spring Cloud",
            "Configuration Server (Spring Cloud Config)",
            "Service Discovery with Eureka (@EnableEurekaServer, @EnableDiscoveryClient)",
            "Load Balancing with Spring Cloud LoadBalancer",
            "API Gateway with Spring Cloud Gateway (routing, filters)",
            "Circuit Breaker with Resilience4j (@CircuitBreaker, @Retry)",
            "Distributed Tracing with Micrometer and Zipkin",
            "Fault Tolerance and Observability",
            "Event-Driven Microservices",
            "Async Communication with Kafka and RabbitMQ",
            "Security in Microservices with Spring Cloud Security",
            "Distributed Configuration with Consul",
            "AI-Assisted Microservices (integrating AI agents in services)"
        ]
    },
    "Reactive Programming": {
        level: 'advanced',
        estimatedHours: 25,
        resources: [
            "Spring WebFlux Official Documentation",
            "Project Reactor Documentation",
            "Hands-On Reactive Programming in Spring 5"
        ],
        items: [
            "Reactive Streams specification and Project Reactor",
            "Mono & Flux (creating, subscribing, operators)",
            "Backpressure Handling",
            "Testing Reactive Code (StepVerifier)",
            "Hybrid Model: Combining Virtual Threads with Reactive Flow",
            "Spring WebFlux vs Spring MVC (when to use which)",
            "Reactive Data Access (R2DBC)"
        ]
    },
    "Spring AI": {
        level: 'advanced',
        estimatedHours: 20,
        resources: [
            "Spring AI Official Documentation (docs.spring.io)",
            "OpenAI API Documentation",
            "Ollama Documentation"
        ],
        items: [
            "Introduction to Spring AI",
            "LLM Abstractions (ChatModel, EmbeddingModel, ImageModel)",
            "Prompt Templates",
            "AI Client Configuration (spring-ai-starter-openai, spring-ai-starter-ollama)",
            "Memory and Context Handling",
            "Embeddings and Vector Databases (pgvector, Redis, Pinecone, Milvus)",
            "RAG (Retrieval-Augmented Generation) pipeline",
            "Building RAG with DocumentRetriever and EmbeddingModel",
            "AI Agents and Tools - calling APIs and databases",
            "Function Calling API in Spring AI",
            "Integrating AI with Microservices",
            "Monitor and Scale AI Workloads"
        ]
    },
    "Docker & Kubernetes": {
        level: 'advanced',
        estimatedHours: 40,
        resources: [
            "Docker Official Documentation (docs.docker.com)",
            "Kubernetes Official Documentation (kubernetes.io)",
            "Kubernetes in Action"
        ],
        items: [
            "Introduction to Docker (containers vs VMs)",
            "Installing Docker",
            "Docker Images (Dockerfile, layers, multi-stage builds)",
            "Docker Containers (run, stop, exec, logs)",
            "Docker Compose (multi-container apps)",
            "Networking in Docker (bridge, host, overlay)",
            "Docker Volumes (persistence, bind mounts)",
            "Docker Registry (Docker Hub, private registry)",
            "Docker Security (non-root users, image scanning)",
            "Introduction to Kubernetes (orchestration concepts)",
            "Kubernetes Architecture (control plane, nodes, etcd)",
            "kubectl CLI commands",
            "Kubernetes Pods",
            "Kubernetes Deployments and ReplicaSets",
            "Services and Networking (ClusterIP, NodePort, LoadBalancer)",
            "ConfigMaps and Secrets",
            "Persistent Volumes and Persistent Volume Claims",
            "Kubernetes Security (RBAC, NetworkPolicies)"
        ]
    },
    "CI/CD with Jenkins or GitLab CI": {
        level: 'advanced',
        estimatedHours: 20,
        resources: [
            "Jenkins Official Documentation (jenkins.io)",
            "GitLab CI/CD Documentation",
            "GitHub Actions Documentation"
        ],
        items: [
            "Introduction to CI/CD concepts and benefits",
            "Installing and Configuring Jenkins",
            "Creating Your First Jenkins Job (Freestyle, Pipeline)",
            "Version Control Integration (GitHub/GitLab webhooks)",
            "Build Tools Integration (Maven, Gradle in pipelines)",
            "Automated Testing in pipelines",
            "Artifact Management (Nexus, Artifactory)",
            "Continuous Deployment strategies (blue-green, canary)",
            "Pipeline as Code (Jenkinsfile, .gitlab-ci.yml)",
            "Jenkins Plugins ecosystem",
            "Monitoring and Notifications (Slack, email alerts)",
            "Security in Jenkins (credentials, secrets management)"
        ]
    },
    "Logging and Monitoring": {
        level: 'advanced',
        estimatedHours: 20,
        resources: [
            "ELK Stack Official Documentation (elastic.co)",
            "Prometheus and Grafana Documentation",
            "Spring Boot Observability guides"
        ],
        items: [
            "Introduction to Logging (levels: DEBUG, INFO, WARN, ERROR)",
            "Logging Frameworks (SLF4J, Logback, Log4j2)",
            "Logging Best Practices (structured logging, MDC)",
            "Log Analysis Tools (Kibana, Grafana Loki)",
            "Centralized Logging (ELK Stack, EFK Stack)",
            "Monitoring Concepts (metrics, traces, logs - the 3 pillars)",
            "Application Performance Monitoring (APM) with Elastic APM",
            "Custom Metrics and Instrumentation (Micrometer)",
            "Alerting and Notification (PagerDuty, OpsGenie)",
            "Distributed Tracing (OpenTelemetry, Zipkin, Jaeger)",
            "Infrastructure Monitoring (Prometheus + Grafana)",
            "Containerized Environments monitoring",
            "Security Monitoring",
            "Incident Response and Root Cause Analysis",
            "Compliance and Audit Logging"
        ]
    },
    "Spring Boot Best Practices": {
        level: 'advanced',
        estimatedHours: 15,
        resources: [
            "Clean Code by Robert C. Martin",
            "Spring Boot Documentation - Production-ready features",
            "Baeldung Best Practices articles"
        ],
        items: [
            "Project structure and package organization",
            "SOLID Principles in Spring Boot context",
            "Layered architecture (Controller → Service → Repository)",
            "DTOs and mapping (MapStruct, ModelMapper)",
            "Configuration management best practices",
            "Exception handling strategy (@ControllerAdvice, error responses)",
            "Validation best practices (Bean Validation, custom validators)",
            "Security hardening checklist",
            "Performance optimization (caching with @Cacheable, connection pools)",
            "API design guidelines (versioning, naming conventions)",
            "Code quality tools (SonarQube, Checkstyle, PMD)",
            "Documentation practices (Javadoc, OpenAPI)",
            "Monitoring and health checks in production"
        ]
    }
};
