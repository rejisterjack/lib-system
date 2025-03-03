const express = require("express")

const {
  seedDatabase,
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  createGenre,
  getGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
  getAuthorsByGenre,
  getBooksByAuthorId,
  getBooksByGenre,
  addGenresToBook,
  removeGenresFromBook,
  getGenresByBookId,
} = require("./controller/libController")

const app = express()
app.use(express.json())

const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("/seed-db", async (req, res) => {
  try {
    await seedDatabase()
    res.status(200).json({ message: "Database seeded successfully!" })
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error seeding database", details: error.message })
  }
})
app.post("/authors", createAuthor)
app.get("/authors", getAuthors)
app.get("/authors/:id", getAuthorById)
app.put("/authors/:id", updateAuthor)
app.delete("/authors/:id", deleteAuthor)

app.post("/books", createBook)
app.get("/books", getBooks)
app.get("/books/:id", getBookById)
app.put("/books/:id", updateBook)
app.delete("/books/:id", deleteBook)

app.post("/genres", createGenre)
app.get("/genres", getGenres)
app.get("/genres/:id", getGenreById)
app.put("/genres/:id", updateGenre)
app.delete("/genres/:id", deleteGenre)

app.get("/genres/:genreId/authors", getAuthorsByGenre)
app.get("/authors/:authorId/books", getBooksByAuthorId)
app.get("/genres/:genreId/books", getBooksByGenre)
app.post("/books/:bookId/genres", addGenresToBook)
app.delete("/books/:bookId/genres", removeGenresFromBook)
app.get("/books/:bookId/genres", getGenresByBookId)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

