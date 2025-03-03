# Library Management System API

Welcome to the **Library Management System API**! This API allows you to manage authors, books, and genres in a library system. It provides endpoints for performing CRUD operations on authors, books, and genres, as well as advanced queries to retrieve related data.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [API Endpoints](#api-endpoints)
   - [Authors](#authors)
   - [Books](#books)
   - [Genres](#genres)
   - [Advanced Queries](#advanced-queries)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)

---

## Introduction

This API is built using **Node.js**, **Express**, and **Sequelize** (or **Mongoose** for MongoDB). It provides a simple and efficient way to manage a library's authors, books, and genres. The API supports basic CRUD operations as well as advanced queries to fetch related data, such as books by author or authors by genre.

---

## Features

- **CRUD Operations**:
  - Create, read, update, and delete authors, books, and genres.
- **Advanced Queries**:
  - Get authors by genre.
  - Get books by author.
  - Get books by genre.
  - Add or remove genres from a book.
  - Get genres associated with a book.
- **Database Seeding**:
  - A `/seed-db` endpoint to populate the database with initial data for testing.

---

## API Endpoints

### Authors

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/authors`          | Create a new author.                 |
| GET    | `/authors`          | Get all authors.                     |
| GET    | `/authors/:id`      | Get an author by ID.                 |
| PUT    | `/authors/:id`      | Update an author by ID.              |
| DELETE | `/authors/:id`      | Delete an author by ID.              |

### Books

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/books`            | Create a new book.                   |
| GET    | `/books`            | Get all books.                       |
| GET    | `/books/:id`        | Get a book by ID.                    |
| PUT    | `/books/:id`        | Update a book by ID.                 |
| DELETE | `/books/:id`        | Delete a book by ID.                 |

### Genres

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/genres`           | Create a new genre.                  |
| GET    | `/genres`           | Get all genres.                      |
| GET    | `/genres/:id`       | Get a genre by ID.                   |
| PUT    | `/genres/:id`       | Update a genre by ID.                |
| DELETE | `/genres/:id`       | Delete a genre by ID.                |

### Advanced Queries

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | `/genres/:genreId/authors`        | Get authors by genre.                |
| GET    | `/authors/:authorId/books`        | Get books by author.                 |
| GET    | `/genres/:genreId/books`          | Get books by genre.                  |
| POST   | `/books/:bookId/genres`           | Add genres to a book.                |
| DELETE | `/books/:bookId/genres`           | Remove genres from a book.           |
| GET    | `/books/:bookId/genres`           | Get genres by book ID.               |

---

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/library-management-api.git
   cd library-management-api