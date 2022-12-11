from flask import Flask

app = Flask(__name__)

@app.get("/blogs")
def get_blogs():
    return {"Blogs":[
        {"title": "Basics of Python","id": 1 ,"author": "John Doe", "content": "Python is a great language", "date": "2020-01-01"},
        {"title": "Basics of Java","id": 2,"author": "John Doe", "content": "Java is a great language", "date": "2020-01-01"},
        {"title": "Basics of C++","id": 3,"author": "John Doe", "content": "C++ is a great language", "date": "2020-01-01"},
        {"title": "Basics of C#","id": 4,"author": "John Doe", "content": "C# is a great language", "date": "2020-01-01"},
    ] }

blog = {
    1: '''
# Basics of Python
Python is a great language
It can be downloaded from [here](https://www.python.org/downloads/)
A simple list of python commands
- print("Hello World")
- list = [1,2,3,4,5]
- list.append(6)
Some python code
```python
def add(a,b):
    return a+b
```
''',
    2: '''
# Basics of Java
Java is a great language
It can be downloaded from [here](https://www.java.com/en/download/)
A simple list of java commands
    
- System.out.println("Hello World")
- int[] list = {1,2,3,4,5}
- list.append(6)
Some java code
```java
public static int add(int a, int b){
    return a+b;
}
```
''',
    3: '''
# Basics of C++
C++ is a great language
It can be downloaded from [here](https://www.cplusplus.com/)
A simple list of C++ commands
- cout << "Hello World";
- int[] list = {1,2,3,4,5}
- list.append(6)
Some C++ code
```c++
int add(int a, int b){
    return a+b;
}
```
''',
    4: '''
# Basics of C#
C# is a great language
It can be downloaded from [here](https://dotnet.microsoft.com/download)
A simple list of C# commands
- Console.WriteLine("Hello World");
- int[] list = {1,2,3,4,5}
- list.append(6)
Some C# code
```c#
int add(int a, int b){
    return a+b;
}
```
'''
}

@app.get("/blog/<int:id>")
def get_blog(id):
    if id not in blog:
        return {"Blog": "# Blog not found"}
    return {"Blog": blog[id]}


if __name__ == "__main__":
    app.run(port=3001)

