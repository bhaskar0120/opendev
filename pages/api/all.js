export default function app(req, res) {

    res.status(200).json({
        "blogs": [
            { "title": "Basics of Python", "id": 1, "author": "John Doe", "content": "Python is a great language", "date": "2020-01-01" },
            { "title": "Basics of Java", "id": 2, "author": "John Doe", "content": "Java is a great language", "date": "2020-01-01" },
            { "title": "Basics of C++", "id": 3, "author": "John Doe", "content": "C++ is a great language", "date": "2020-01-01" },
            { "title": "Basics of C#", "id": 4, "author": "John Doe", "content": "C# is a great language", "date": "2020-01-01" },
        ]
    });
}