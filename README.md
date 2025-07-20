
# My Book Library 📚

A Node.js-powered web application to manage your book collection — users can add, view, update, and delete books via a sleek Express-based interface.

---

## 🚀 Features

- Full **CRUD** operations for books
- Server-side rendering with EJS
- Express.js routing and middleware

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (for templating)
- **PostgreSQL** (for database)
- **Bootstrap/CSS** (for stylings)

---

## 📁 Project Structure

```
My-Book-Library/
├── views/              # EJS templates
├── public/             # Static files (CSS, JS)
├── index.js              # App entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/pekeerthana/My-Book-Library.git
cd My-Book-Library
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

- Create a `.env` file based on `.env.example`:

```
PORT=3000
user: "username",
host: "hostname",
database: "databasename",
password: "yourpassword",
port: your_port_number
```

### 4. Run the application

```bash
npm start
```

For development with auto-restart (if using nodemon):

```bash
npm run dev
```

---

## 📬 Routes Overview

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | /books              | List all books            |
| GET    | /books/new          | Show form to add a book   |
| POST   | /books              | Add a new book            |
| GET    | /books/:id          | View book details         |
| GET    | /books/:id/edit     | Edit book form            |
| PUT    | /books/:id          | Update book details       |
| DELETE | /books/:id          | Delete a book             |

## 🙌 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

---

## ✨ Acknowledgements

- Project by [@pekeerthana](https://github.com/pekeerthana)
- Built using Node.js, Express, and EJS

---
