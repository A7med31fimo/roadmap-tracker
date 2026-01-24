// src/data/roadmapData.js

export const roadmapData = {
    "C# Fundamentals": {
        level: 'beginner',
        estimatedHours: 40,
        resources: ["Microsoft Learn C#", "C# Yellow Book", "Pluralsight C# Path"],
        items: [
            "Object-oriented programming (classes, objects, interfaces, inheritance, polymorphism)",
            "Variables, data types, and operators",
            "Reference and value types",
            "Control flow (conditionals, loops)",
            "Generics",
            "Exception handling",
            "Delegates and events",
            "Assemblies",
            "Collections (List, Dictionary, HashSet)",
            "LINQ (Language Integrated Query)",
            "Async/await for asynchronous programming",
            "Records and init-only properties",
            "Pattern matching",
            "Nullable reference types"
        ]
    },
    ".NET Ecosystem": {
        level: 'beginner',
        estimatedHours: 20,
        resources: ["Microsoft .NET Documentation", ".NET Blog"],
        items: [
            ".NET Core basics",
            ".NET Framework vs .NET Core",
            ".NET Standard",
            ".NET 9 features",
            "dotnet CLI commands",
            "NuGet package manager",
            "Understanding SDK vs Runtime",
            "Project file structure (.csproj)",
            "Global tools and local tools"
        ]
    },
    "General Development Skills": {
        level: 'intermediate',
        estimatedHours: 60,
        resources: ["Clean Code by Robert Martin", "Refactoring by Martin Fowler"],
        items: [
            "Git version control (branches, merges, rebasing)",
            "SOLID Principles (SRP, OCP, LSP, ISP, DIP)",
            "DRY, KISS, YAGNI principles",
            "Design Patterns - Creational (Singleton, Factory, Builder)",
            "Design Patterns - Structural (Adapter, Decorator, Facade)",
            "Design Patterns - Behavioral (Observer, Strategy, Command)",
            "Clean Code practices",
            "Refactoring techniques",
            "Data Structures (Arrays, Lists, Trees, Graphs)",
            "Algorithms (Sorting, Searching, Recursion)",
            "Repository pattern",
            "Unit of Work pattern",
            "Code reviews best practices"
        ]
    },
    "ASP.NET Core": {
        level: 'intermediate',
        estimatedHours: 80,
        resources: ["ASP.NET Core Documentation", "Pluralsight ASP.NET Path"],
        items: [
            "Web fundamentals (HTTP, DNS, REST)",
            "ASP.NET MVC pattern",
            "Minimal APIs",
            "Middleware pipeline",
            "Dependency Injection (Transient, Scoped, Singleton)",
            "Application Settings & Configurations",
            "Filters & Attributes",
            "Model Binding and Validation",
            "Routing and Endpoints",
            "Authentication & Authorization",
            "Identity on ASP.NET Core",
            "Cookie-based authentication",
            "JWT token authentication",
            "Role-based and Claims-based authorization",
            "Cross-Origin Resource Sharing (CORS)"
        ]
    },
    "Databases": {
        level: 'intermediate',
        estimatedHours: 70,
        resources: ["SQL Tutorial", "Database Design Book", "EF Core Documentation"],
        items: [
            "SQL fundamentals (SELECT, INSERT, UPDATE, DELETE)",
            "JOINs (INNER, LEFT, RIGHT, FULL)",
            "Aggregations (COUNT, SUM, AVG, GROUP BY)",
            "Subqueries and CTEs",
            "Indexes and query optimization",
            "Database design & normalization (1NF, 2NF, 3NF)",
            "Primary keys, Foreign keys, Constraints",
            "SQL Server / PostgreSQL",
            "NoSQL databases (MongoDB, CosmosDB)",
            "Entity Framework Core basics",
            "Code-First vs Database-First",
            "Migrations and seeding data",
            "Dapper for micro-ORM",
            "LINQ to Entities",
            "Database transactions and isolation levels"
        ]
    },
    "Client-Side .NET": {
        level: 'intermediate',
        estimatedHours: 50,
        resources: ["Blazor Documentation", "MAUI Documentation"],
        items: [
            "Razor syntax and templates",
            "Blazor Server vs Blazor WebAssembly",
            "Blazor components and lifecycle",
            "JavaScript interop in Blazor",
            ".NET MAUI for cross-platform apps",
            "XAML basics",
            "WPF MVVM pattern",
            "Data binding in WPF/MAUI",
            "Uno Platform basics"
        ]
    },
    "Testing": {
        level: 'intermediate',
        estimatedHours: 40,
        resources: ["xUnit Documentation", "Testing Best Practices"],
        items: [
            "Unit Testing fundamentals",
            "xUnit test framework",
            "NUnit test framework",
            "Arrange-Act-Assert (AAA) pattern",
            "Mocking with NSubstitute",
            "Mocking with Moq",
            "Fluent Assertions",
            "Integration Testing with WebApplicationFactory",
            "Test-Driven Development (TDD)",
            "Behavior-Driven Development (BDD)",
            "Code coverage analysis",
            "BenchmarkDotNet for performance testing",
            "Playwright for E2E testing",
            "Testing async code",
            "Snapshot testing with Verify"
        ]
    },
    "API Development": {
        level: 'intermediate',
        estimatedHours: 60,
        resources: ["REST API Best Practices", "GraphQL Documentation"],
        items: [
            "REST API design principles",
            "HTTP methods (GET, POST, PUT, DELETE, PATCH)",
            "HTTP status codes (2xx, 4xx, 5xx)",
            "API versioning strategies",
            "Content negotiation",
            "HATEOAS principle",
            "GraphQL basics and queries",
            "GraphQL mutations and subscriptions",
            "gRPC fundamentals and .proto files",
            "API documentation with Swagger/OpenAPI",
            "Rate limiting and throttling",
            "API security (API keys, OAuth)",
            "Pagination, filtering, sorting",
            "RESTful resource naming",
            "Error handling in APIs"
        ]
    },
    "Logging & Monitoring": {
        level: 'intermediate',
        estimatedHours: 30,
        resources: ["Serilog Documentation", "Observability Guide"],
        items: [
            "Logging levels (Debug, Info, Warning, Error)",
            "Serilog configuration",
            "Structured logging",
            "NLog basics",
            "Application Insights integration",
            "Distributed tracing",
            "OpenTelemetry fundamentals",
            "Metrics and counters",
            "Health checks",
            "ELK Stack (Elasticsearch, Logstash, Kibana)",
            "Log aggregation strategies"
        ]
    },
    "Caching": {
        level: 'intermediate',
        estimatedHours: 25,
        resources: ["Redis Documentation", "Caching Strategies"],
        items: [
            "In-Memory Cache basics",
            "Distributed caching concepts",
            "Redis setup and configuration",
            "Cache-aside pattern",
            "Write-through and write-behind caching",
            "Hybrid Cache in .NET 9",
            "Output Caching middleware",
            "Response Caching",
            "Cache invalidation strategies",
            "Time-based expiration",
            "Cache stampede prevention"
        ]
    },
    "Communication": {
        level: 'advanced',
        estimatedHours: 50,
        resources: ["SignalR Documentation", "RabbitMQ Guide"],
        items: [
            "SignalR for real-time communication",
            "WebSockets protocol",
            "Message Queue vs Pub-Sub patterns",
            "RabbitMQ fundamentals",
            "Azure Service Bus",
            "MassTransit message bus",
            "Message serialization",
            "Event-driven architecture",
            "Dead letter queues",
            "Message retry policies",
            "Idempotent message handling",
            "Apache Kafka basics",
            "AMQP protocol"
        ]
    },
    "Background Tasks": {
        level: 'advanced',
        estimatedHours: 30,
        resources: ["Hangfire Documentation", "Quartz.NET Guide"],
        items: [
            "IHostedService interface",
            "Background Service implementation",
            "HangFire dashboard and jobs",
            "Recurring jobs with HangFire",
            "Quartz.NET scheduler",
            "Cron expressions",
            "Azure Functions triggers",
            "Durable Functions",
            "Task scheduling best practices"
        ]
    },
    "Architecture": {
        level: 'advanced',
        estimatedHours: 100,
        resources: ["Clean Architecture Book", "DDD Book by Eric Evans"],
        items: [
            "Clean Architecture layers",
            "Dependency Inversion Principle in practice",
            "Domain-Driven Design (DDD) concepts",
            "Bounded Contexts",
            "Aggregates and Entities",
            "Value Objects",
            "Domain Events",
            "Microservices architecture",
            "Service discovery",
            "API Gateway pattern",
            "CQRS (Command Query Responsibility Segregation)",
            "Event Sourcing",
            "Saga pattern",
            "Modular Monolith architecture",
            "Vertical Slice Architecture",
            "Onion Architecture"
        ]
    },
    "Containerization": {
        level: 'advanced',
        estimatedHours: 45,
        resources: ["Docker Documentation", "Kubernetes Guide"],
        items: [
            "Docker basics and concepts",
            "Writing Dockerfiles",
            "Docker images and layers",
            "Docker Compose for multi-container apps",
            "Docker networking",
            "Docker volumes and persistence",
            "Kubernetes fundamentals",
            "Pods, Deployments, Services",
            "ConfigMaps and Secrets",
            "Kubernetes Ingress",
            "Helm charts",
            "Azure Container Apps",
            "Container orchestration strategies"
        ]
    },
    "Cloud": {
        level: 'advanced',
        estimatedHours: 80,
        resources: ["Azure Documentation", "AWS .NET SDK Guide"],
        items: [
            "Cloud computing fundamentals (IaaS, PaaS, SaaS)",
            "Azure App Service",
            "Azure Functions (serverless)",
            "Azure Service Bus",
            "Azure Blob Storage",
            "Azure CosmosDB",
            "Azure Key Vault",
            "Azure Application Insights",
            "AWS Lambda",
            "AWS S3",
            "AWS DynamoDB",
            "Cloud-native design patterns",
            ".NET Aspire for cloud-native apps",
            "Service discovery in cloud",
            "API Gateway (YARP, Envoy)"
        ]
    },
    "CI/CD": {
        level: 'advanced',
        estimatedHours: 40,
        resources: ["GitHub Actions Guide", "DevOps Best Practices"],
        items: [
            "Continuous Integration principles",
            "Continuous Deployment vs Delivery",
            "GitHub Actions workflows",
            "Azure Pipelines",
            "Build automation",
            "Automated testing in pipelines",
            "Deployment strategies (Blue-Green, Canary)",
            "Infrastructure as Code (IaC)",
            "Terraform basics",
            "Bicep for Azure",
            "GitOps principles",
            "Release management",
            "Environment promotion"
        ]
    },
    "Security": {
        level: 'advanced',
        estimatedHours: 50,
        resources: ["OWASP Top 10", "ASP.NET Core Security Guide"],
        items: [
            "Authentication vs Authorization",
            "OAuth 2.0 flows",
            "OpenID Connect (OIDC)",
            "JWT token structure and validation",
            "IdentityServer implementation",
            "Refresh tokens",
            "PKCE (Proof Key for Code Exchange)",
            "Cryptography basics (symmetric, asymmetric)",
            "Hashing and salting passwords",
            "Data Protection APIs",
            "SSL/TLS certificates",
            "CORS security",
            "SQL injection prevention",
            "XSS (Cross-Site Scripting) prevention",
            "CSRF protection"
        ]
    },
    "Performance": {
        level: 'advanced',
        estimatedHours: 45,
        resources: ["Performance Best Practices", "Awesome .NET Performance"],
        items: [
            "Performance profiling with dotTrace",
            "Memory profiling with dotMemory",
            "PerfView usage",
            "Async/await best practices",
            "Task Parallel Library (TPL)",
            "Span<T> and Memory<T>",
            "StringBuilder for string concatenation",
            "Object pooling (ArrayPool, ObjectPool)",
            "Database query optimization",
            "N+1 query problem",
            "Connection pooling",
            "BenchmarkDotNet usage",
            "Garbage Collection tuning",
            "Response compression",
            "HTTP/2 and HTTP/3"
        ]
    }
};