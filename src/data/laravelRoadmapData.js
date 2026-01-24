// src/data/laravelRoadmapData.js

export const laravelRoadmapData = {
    "HTML Fundamentals": {
        level: 'beginner',
        estimatedHours: 15,
        resources: ["MDN HTML Guide", "HTML and CSS Workshop - Laracasts"],
        items: [
            "Learn the basics of HTML",
            "HTML document structure",
            "HTML tags and elements",
            "Forms and inputs",
            "Semantic HTML5 elements",
            "Tables and lists",
            "Links and navigation",
            "Images and media",
            "HTML best practices"
        ]
    },
    "CSS Fundamentals": {
        level: 'beginner',
        estimatedHours: 20,
        resources: ["MDN CSS Guide", "CSS Tricks", "HTML and CSS Workshop - Laracasts"],
        items: [
            "Learn the basics of CSS",
            "CSS selectors and specificity",
            "Box model (margin, padding, border)",
            "Flexbox layout",
            "CSS Grid layout",
            "Responsive design and media queries",
            "CSS animations and transitions",
            "CSS positioning",
            "CSS units (px, em, rem, %, vh, vw)"
        ]
    },
    "JavaScript Basics": {
        level: 'beginner',
        estimatedHours: 30,
        resources: ["JavaScript.info", "Laracasts JS Series", "MDN JavaScript Guide"],
        items: [
            "Get familiar with JavaScript syntax",
            "Variables and data types",
            "Functions and arrow functions",
            "Arrays and array methods",
            "Objects and object manipulation",
            "DOM manipulation",
            "Event listeners and handling",
            "AJAX and Fetch API",
            "ES6+ features (let, const, template literals)",
            "Async/await and Promises",
            "Event bubbling and capturing",
            "Hoisting and closures"
        ]
    },
    "PHP Basics": {
        level: 'beginner',
        estimatedHours: 40,
        resources: ["PHP Official Docs", "Laracasts PHP For Beginners", "PHP The Right Way"],
        items: [
            "Basic PHP setup and environment",
            "PHP syntax and variables",
            "Data types (strings, integers, arrays)",
            "Control flow (if, else, switch)",
            "Loops (for, while, foreach)",
            "Functions and parameters",
            "Arrays and array functions",
            "String functions",
            "Working with files",
            "Cookies and sessions",
            "Date and time functions",
            "Form handling and superglobals ($_GET, $_POST)",
            "Include and require statements"
        ]
    },
    "PHP OOP": {
        level: 'beginner',
        estimatedHours: 35,
        resources: ["Laracasts OOP in PHP", "PHP Official OOP Docs"],
        items: [
            "Classes and objects",
            "Properties and methods",
            "Constructors and destructors",
            "Inheritance and parent/child classes",
            "Interfaces and abstract classes",
            "Traits for code reuse",
            "Namespaces and autoloading",
            "Static properties and methods",
            "Magic methods (__construct, __toString)",
            "Iterators and generators",
            "MVC pattern basics",
            "SOLID principles",
            "Dependency Injection"
        ]
    },
    "Composer": {
        level: 'beginner',
        estimatedHours: 10,
        resources: ["Composer Official Docs", "Getting Started with Composer"],
        items: [
            "What is Composer and dependency management",
            "Installing Composer",
            "composer.json and composer.lock",
            "Installing packages with composer require",
            "Autoloading (PSR-4)",
            "Semantic versioning",
            "Updating dependencies",
            "Using Packagist"
        ]
    },
    "Version Control - Git": {
        level: 'intermediate',
        estimatedHours: 20,
        resources: ["Git Official Docs", "GitHub Learning Lab"],
        items: [
            "Git basics (init, add, commit)",
            "Branching and merging",
            "Remote repositories (push, pull, fetch)",
            "GitHub/GitLab/Bitbucket",
            "Pull requests and code reviews",
            "Git workflow strategies",
            "Resolving merge conflicts",
            "Git tags and releases",
            ".gitignore file"
        ]
    },
    "HTTP Protocol": {
        level: 'intermediate',
        estimatedHours: 15,
        resources: ["MDN HTTP Guide", "HTTP: The Definitive Guide"],
        items: [
            "Understanding HTTP/HTTPS",
            "HTTP methods (GET, POST, PUT, PATCH, DELETE)",
            "HTTP status codes (200, 404, 500, etc.)",
            "HTTP headers (Content-Type, Authorization)",
            "Request and response cycle",
            "RESTful principles",
            "CORS (Cross-Origin Resource Sharing)"
        ]
    },
    "Laravel Fundamentals": {
        level: 'intermediate',
        estimatedHours: 50,
        resources: ["Laravel Official Docs", "Laracasts 30 Days to Learn Laravel"],
        items: [
            "Laravel installation and setup",
            "Directory structure",
            "Artisan CLI commands",
            "Routing (web.php, api.php)",
            "Controllers and resource controllers",
            "Views and Blade templating",
            "Blade directives (@if, @foreach, @yield)",
            "Layouts and components",
            "Middleware basics",
            "Request validation",
            "Form requests",
            "Response types (view, json, redirect)"
        ]
    },
    "Database & Eloquent ORM": {
        level: 'intermediate',
        estimatedHours: 60,
        resources: ["Laravel Database Docs", "Eloquent ORM Guide"],
        items: [
            "Database configuration (MySQL, PostgreSQL)",
            "Migrations and schema builder",
            "Database seeding",
            "Model factories",
            "Eloquent models and conventions",
            "CRUD operations with Eloquent",
            "Query builder",
            "Relationships (hasOne, hasMany, belongsTo)",
            "Many-to-many relationships",
            "Polymorphic relationships",
            "Eager loading and lazy loading",
            "Query scopes",
            "Accessors and mutators",
            "Soft deletes"
        ]
    },
    "Laravel Authentication": {
        level: 'intermediate',
        estimatedHours: 25,
        resources: ["Laravel Breeze", "Laravel Fortify", "Laravel Sanctum"],
        items: [
            "Laravel Breeze for basic auth",
            "Laravel Fortify for backend auth",
            "Registration and login",
            "Password reset functionality",
            "Email verification",
            "Session-based authentication",
            "API token authentication with Sanctum",
            "Guards and providers",
            "Authorization gates and policies"
        ]
    },
    "Laravel Advanced Features": {
        level: 'intermediate',
        estimatedHours: 70,
        resources: ["Laravel Official Docs", "Advanced Laravel Course"],
        items: [
            "Service container and dependency injection",
            "Service providers",
            "Facades",
            "Contracts (interfaces)",
            "Events and listeners",
            "Jobs and queues",
            "Task scheduling (cron jobs)",
            "File storage and uploads",
            "Mail sending (SMTP, Mailgun)",
            "Notifications (email, SMS, Slack)",
            "Laravel Mix for asset compilation",
            "API resources and transformers",
            "Rate limiting",
            "Localization and translation"
        ]
    },
    "Laravel Testing": {
        level: 'intermediate',
        estimatedHours: 30,
        resources: ["Laravel Testing Docs", "PHPUnit Documentation"],
        items: [
            "PHPUnit basics",
            "Feature tests vs Unit tests",
            "HTTP testing",
            "Database testing and factories",
            "Mocking and fakes",
            "Test assertions",
            "Testing authentication",
            "Testing API endpoints",
            "Code coverage",
            "Pest PHP testing framework"
        ]
    },
    "Laravel APIs": {
        level: 'advanced',
        estimatedHours: 40,
        resources: ["Laravel API Docs", "RESTful API Design"],
        items: [
            "API routing and controllers",
            "API resources and collections",
            "API authentication with Sanctum",
            "API rate limiting",
            "API versioning",
            "CORS configuration",
            "JSON responses and error handling",
            "Pagination in APIs",
            "API documentation with Swagger/OpenAPI",
            "GraphQL with Lighthouse"
        ]
    },
    "Frontend Integration": {
        level: 'advanced',
        estimatedHours: 50,
        resources: ["Livewire Docs", "Inertia.js Docs", "Vue.js Guide"],
        items: [
            "Laravel Livewire for reactive components",
            "Alpine.js for JavaScript behavior",
            "Inertia.js for SPA without API",
            "Vue.js integration with Laravel",
            "React integration with Laravel",
            "Tailwind CSS styling",
            "Laravel Mix / Vite for bundling",
            "Server-side rendering (SSR)"
        ]
    },
    "Laravel Packages": {
        level: 'advanced',
        estimatedHours: 35,
        resources: ["Spatie Packages", "Laravel Package Development"],
        items: [
            "Laravel Debugbar for debugging",
            "Laravel Telescope for monitoring",
            "Spatie Laravel Permission for roles",
            "Spatie Media Library for files",
            "Laravel Horizon for queue management",
            "Laravel Passport for OAuth2",
            "Laravel Socialite for social login",
            "Laravel Scout for full-text search",
            "Creating custom packages",
            "Publishing packages to Packagist"
        ]
    },
    "Performance Optimization": {
        level: 'advanced',
        estimatedHours: 30,
        resources: ["Laravel Performance Guide", "Database Optimization"],
        items: [
            "Query optimization and indexing",
            "Caching (Redis, Memcached)",
            "Route caching",
            "Config caching",
            "View caching",
            "Database query caching",
            "Eager loading vs lazy loading",
            "N+1 query problem solutions",
            "CDN integration",
            "Asset optimization and minification",
            "Queue jobs for heavy tasks",
            "Laravel Octane for performance"
        ]
    },
    "Deployment & DevOps": {
        level: 'advanced',
        estimatedHours: 40,
        resources: ["Laravel Forge", "Deployer", "Docker for Laravel"],
        items: [
            "Server requirements and setup",
            "Deploying to shared hosting",
            "VPS deployment (DigitalOcean, AWS, Linode)",
            "Laravel Forge for server management",
            "Laravel Envoyer for zero-downtime",
            "Environment configuration (.env)",
            "SSL certificate setup",
            "Docker and Docker Compose",
            "CI/CD with GitHub Actions",
            "Database backups and migrations",
            "Monitoring and logging (Sentry, Bugsnag)",
            "Load balancing and scaling"
        ]
    },
    "Security Best Practices": {
        level: 'advanced',
        estimatedHours: 25,
        resources: ["OWASP Top 10", "Laravel Security Guide"],
        items: [
            "SQL injection prevention",
            "XSS (Cross-Site Scripting) protection",
            "CSRF protection",
            "Authentication best practices",
            "Password hashing with bcrypt",
            "Secure session management",
            "API security and token management",
            "Input validation and sanitization",
            "Rate limiting and throttling",
            "Security headers",
            "Dependency security updates"
        ]
    },
    "Advanced Architecture": {
        level: 'advanced',
        estimatedHours: 60,
        resources: ["Domain-Driven Design", "Laravel Beyond CRUD"],
        items: [
            "Repository pattern",
            "Service layer pattern",
            "Domain-Driven Design (DDD)",
            "CQRS pattern",
            "Event sourcing",
            "Hexagonal architecture",
            "Clean architecture in Laravel",
            "Microservices with Laravel",
            "API Gateway pattern",
            "Message queues (RabbitMQ, Kafka)",
            "Design patterns in PHP",
            "SOLID principles in practice"
        ]
    }
};