const Author = require("../models/Author")
const Book = require("../models/Book")
const Genre = require("../models/Genre")

const seedDatabase = async () => {
  try {
    await Author.destroy({ where: {} })
    await Book.destroy({ where: {} })
    await Genre.destroy({ where: {} })

    const author1 = await Author.create({
      name: "J.K. Rowling",
      birthdate: "1965-07-31",
      email: "jkrowling@example.com",
    })

    const author2 = await Author.create({
      name: "George R.R. Martin",
      birthdate: "1948-09-20",
      email: "grrmartin@example.com",
    })

    const genre1 = await Genre.create({
      name: "Fantasy",
      description: "Books with magical or imaginary elements.",
    })

    const genre2 = await Genre.create({
      name: "Adventure",
      description: "Books with exciting and risky journeys.",
    })

    const book1 = await Book.create({
      title: "Harry Potter and the Philosopher's Stone",
      description: "The first book in the Harry Potter series.",
      publicationYear: 1997,
      authorId: author1.id,
    })

    const book2 = await Book.create({
      title: "A Game of Thrones",
      description: "The first book in the A Song of Ice and Fire series.",
      publicationYear: 1996,
      authorId: author2.id,
    })

    await book1.addGenres([genre1, genre2])
    await book2.addGenres([genre1])

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

const createAuthor = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthors = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthorById = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateAuthor = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteAuthor = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooks = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBookById = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createGenre = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenres = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenreById = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateGenre = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteGenre = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthorsByGenre = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooksByAuthorId = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooksByGenre = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const addGenresToBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const removeGenresFromBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenresByBookId = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
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
}
