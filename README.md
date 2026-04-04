# 📚 Library App (Vanilla JS + MVC)

A simple library management application built with **Vanilla JavaScript**, following the **MVC (Model-View-Controller)** pattern.

This project is part of my learning journey in frontend development, focusing on clean architecture, DOM manipulation, and state management without frameworks.

---

## 🚀 Features

* Add new books (title + author)
* Display books as dynamic cards
* Remove books from the library
* Toggle read/unread status 👁️
* Form validation (no empty inputs)
* Clean UI updates without page reload
* Modular architecture using ES Modules
* Separation of concerns via MVC

---

## 🧠 Architecture

The project is structured using the **MVC pattern**:

```
src/
 ├── model/
 │     └── library.js
 ├── view/
 │     └── libraryView.js
 ├── controller/
 │     └── libraryController.js
 └── main.js
```

### Model

Handles data and business logic:

* Book creation
* Add/remove books
* Toggle read status

### View

Responsible for:

* Rendering books to the DOM
* Capturing user input
* Emitting UI events

### Controller

Acts as the bridge:

* Handles user actions
* Updates the model
* Triggers UI updates

---

## ⚙️ Technologies Used

* JavaScript (ES6 Modules)
* HTML5
* CSS3
* DOM API

---

## ▶️ How to Run

1. Clone the repository:

```bash
git clone https://github.com/ArturoCab/library-project.git
```

2. Open `index.html` in your browser

> ⚠️ Make sure you're using a modern browser (ES Modules required)

---

## 💡 What I Learned

* How to structure frontend applications using MVC
* Managing state without frameworks
* Event delegation for dynamic elements
* Writing modular and maintainable JavaScript
* Avoiding tight coupling between UI and logic

---

## 🔮 Possible Improvements

* Persist data using LocalStorage
* Add edit functionality
* Improve UI/UX (animations, responsive design)
* Convert to a component-based architecture
* Migrate to a framework like React

---

## 👨‍💻 Author

Arturo Cabrera

* GitHub: https://github.com/ArturoCab

---

## ⭐ Notes

This project is part of my transition into **frontend and game development**, focusing on building solid programming fundamentals before moving into more complex systems.
