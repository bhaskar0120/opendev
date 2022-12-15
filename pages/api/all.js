export default function app(req, res) {
    const blogs = [
        { "title": "Basics of Python", "author": "John Doe", "content": "Python is a great language" },
        { "title": "Basics of Java", "author": "John Doe", "content": "Java is a great language" },
        { "title": "Basics of C++", "author": "John Doe", "content": "C++ is a great language" },
        { "title": "Basics of C#", "author": "John Doe", "content": "C# is a great language" },
        { "title": "Basics of C", "author": "John Doe", "content": "C is a great language" },
        { "title": "Basics of JavaScript", "author": "John Doe", "content": "JavaScript is a great language" },
        { "title": "Basics of TypeScript", "author": "John Doe", "content": "TypeScript is a great language" },
        { "title": "Basics of PHP", "author": "John Doe", "content": "PHP is a great language" },
        { "title": "Basics of Ruby", "author": "John Doe", "content": "Ruby is a great language" },
        { "title": "Basics of Rust", "author": "John Doe", "content": "Rust is a great language" },
        { "title": "Basics of Go", "author": "John Doe", "content": "Go is a great language" },
        { "title": "Basics of Swift", "author": "John Doe", "content": "Swift is a great language" },
        { "title": "Basics of Kotlin", "author": "John Doe", "content": "Kotlin is a great language" },
        { "title": "Basics of Dart", "author": "John Doe", "content": "Dart is a great language" },
        { "title": "Basics of Haskell", "author": "John Doe", "content": "Haskell is a great language" },
        { "title": "Basics of Clojure", "author": "John Doe", "content": "Clojure is a great language" },
        { "title": "Basics of Perl", "author": "John Doe", "content": "Perl is a great language" },
        { "title": "Basics of Elixir", "author": "John Doe", "content": "Elixir is a great language" }
    ];
    res.status(200).json({
        total: blogs.length,
        blogs: blogs
    });
}