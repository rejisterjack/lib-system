const { sequelize } = require("../lib/sequelize")
const Author = require("../models/Author")
const Book = require("../models/Book")
const Genre = require("../models/Genre")

const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  })
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
    const { name, birthdate, email } = req.body
    const author = await Author.create({ name, birthdate, email })
    res.status(201).json(author)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll()
    res.status(200).json(authors)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: [{ model: Book, include: [Genre] }],
    })
    if (!author) {
      return res.status(404).json({ error: "Author not found" })
    }
    res.status(200).json(author)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateAuthor = async (req, res) => {
  try {
    const { name, birthdate, email } = req.body
    const [updated] = await Author.update(
      { name, birthdate, email },
      { where: { id: req.params.id } }
    )
    if (!updated) {
      return res.status(404).json({ error: "Author not found" })
    }
    const updatedAuthor = await Author.findByPk(req.params.id)
    res.status(200).json(updatedAuthor)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const deleted = await Author.destroy({ where: { id: req.params.id } })
    if (!deleted) {
      return res.status(404).json({ error: "Author not found" })
    }
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createBook = async (req, res) => {
  try {
    const { title, description, publicationYear, authorId, genreIds } = req.body
    const book = await Book.create({
      title,
      description,
      publicationYear,
      authorId,
    })
    if (genreIds && genreIds.length) {
      await book.addGenres(genreIds)
    }
    res.status(201).json(book)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: [Author, Genre] })
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [Author, Genre],
    })
    if (!book) {
      return res.status(404).json({ error: "Book not found" })
    }
    res.status(200).json(book)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateBook = async (req, res) => {
  try {
    const { title, description, publicationYear, authorId, genreIds } = req.body
    const [updated] = await Book.update(
      { title, description, publicationYear, authorId },
      { where: { id: req.params.id } }
    )
    if (!updated) {
      return res.status(404).json({ error: "Book not found" })
    }
    const updatedBook = await Book.findByPk(req.params.id)
    if (genreIds && genreIds.length) {
      await updatedBook.setGenres(genreIds)
    }
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({ where: { id: req.params.id } })
    if (!deleted) {
      return res.status(404).json({ error: "Book not found" })
    }
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createGenre = async (req, res) => {
  try {
    const { name, description } = req.body
    const genre = await Genre.create({ name, description })
    res.status(201).json(genre)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.status(200).json(genres)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id, { include: [Book] })
    if (!genre) {
      return res.status(404).json({ error: "Genre not found" })
    }
    res.status(200).json(genre)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateGenre = async (req, res) => {
  try {
    const { name, description } = req.body
    const [updated] = await Genre.update(
      { name, description },
      { where: { id: req.params.id } }
    )
    if (!updated) {
      return res.status(404).json({ error: "Genre not found" })
    }
    const updatedGenre = await Genre.findByPk(req.params.id)
    res.status(200).json(updatedGenre)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteGenre = async (req, res) => {
  try {
    const deleted = await Genre.destroy({ where: { id: req.params.id } })
    if (!deleted) {
      return res.status(404).json({ error: "Genre not found" })
    }
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAuthorsByGenre = async (req, res) => {
  try {
    const genreId = req.params.genreId
    const genre = await Genre.findByPk(genreId, {
      include: [
        {
          model: Book,
          include: [Author],
        },
      ],
    })

    if (!genre) {
      return res.status(404).json({ error: "Genre not found" })
    }

    const authors = []
    genre.Books.forEach((book) => {
      if (book.Author && !authors.some((a) => a.id === book.Author.id)) {
        authors.push(book.Author)
      }
    })

    res.status(200).json(authors)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooksByAuthorId = async (req, res) => {
  try {
    const authorId = req.params.authorId
    const author = await Author.findByPk(authorId, {
      include: [
        {
          model: Book,
          include: [Genre],
        },
      ],
    })

    if (!author) {
      return res.status(404).json({ error: "Author not found" })
    }

    res.status(200).json(author.Books)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getBooksByGenre = async (req, res) => {
  try {
    const genreId = req.params.genreId
    const genre = await Genre.findByPk(genreId, {
      include: [
        {
          model: Book,
          include: [Author],
        },
      ],
    })

    if (!genre) {
      return res.status(404).json({ error: "Genre not found" })
    }

    res.status(200).json(genre.Books)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const addGenresToBook = async (req, res) => {
  try {
    const bookId = req.params.bookId
    const { genreIds } = req.body

    const book = await Book.findByPk(bookId)
    if (!book) {
      return res.status(404).json({ error: "Book not found" })
    }

    await book.addGenres(genreIds)
    const updatedBook = await Book.findByPk(bookId, { include: [Genre] })

    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const removeGenresFromBook = async (req, res) => {
  try {
    const bookId = req.params.bookId
    const { genreIds } = req.body

    const book = await Book.findByPk(bookId)
    if (!book) {
      return res.status(404).json({ error: "Book not found" })
    }

    await book.removeGenres(genreIds)
    const updatedBook = await Book.findByPk(bookId, { include: [Genre] })

    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getGenresByBookId = async (req, res) => {
  try {
    const bookId = req.params.bookId
    const book = await Book.findByPk(bookId, {
      include: [Genre],
    })

    if (!book) {
      return res.status(404).json({ error: "Book not found" })
    }

    res.status(200).json(book.Genres)
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
