const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
let books = [
  { id: 3, title: "Amrutam Kurisina Ratri", author: "Madhubabu", year: 1968 },
  { id: 4, title: "Maa Bhoomi", author: "Acharya Atreya", year: 1939 },
  { id: 5, title: "Chivaraku Migiledi", author: "Chalam", year: 1936 },
  { id: 6, title: "Malapalli", author: "Unnava Lakshminarayana", year: 1922 },
  {
    id: 7,
    title: "Veyi Padagalu",
    author: "Viswanatha Satyanarayana",
    year: 1962,
  },
  { id: 8, title: "Gabanam", author: "Gurajada Apparao", year: 1910 },
  { id: 9, title: "Maha Prasthanam", author: "Sri Sri", year: 1950 },
  { id: 10, title: "Kanyasulkam", author: "Gurajada Apparao", year: 1897 },
  {
    id: 11,
    title: "Asamardhuni Jeevayatra",
    author: "Ramanuja Tatacharya",
    year: 1975,
  },
  { id: 12, title: "Paakudurallu", author: "Buchi Babu", year: 1960 },
  { id: 13, title: "Yagnam", author: "Vasireddy Sitadevi", year: 1985 },
  { id: 14, title: "Swecha", author: "Ravi Sastry", year: 1992 },
  { id: 15, title: "Meghasandesam", author: "Kalidasa", year: 400 }, // Approximate year
  { id: 16, title: "Vipranarayana", author: "Koratala Siva", year: 2016 },
  {
    id: 17,
    title: "Ammayi Bagundi",
    author: "Yandamoori Veerendranath",
    year: 1980,
  },
  { id: 18, title: "Rendu Rella Aaru", author: "Mohan", year: 2005 },
  { id: 19, title: "Preminchu", author: "Madhurantakam Rajaram", year: 1978 },
  { id: 20, title: "Grihapravesam", author: "Mulugu Papayaradhya", year: 1965 },
];

app.get("/", (req, res) => {
  res.send("Book API Working");
});

// GETbooks
app.get("/books", (req, res) => {
  res.json(books);
});

// GET book by ID
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: " Book not found" });
  }
  res.json(book);
});
// POST: Add book
app.post("/books", (req, res) => {
  const { id, title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: " Missing required fields" });
  }
  const newBook = {
    id,
    title,
    author,
    year,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT: Update book by ID
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: " Book not found" });
  }
  if (!title || !author || !year) {
    return res.status(400).json({ error: " Missing required fields" });
  }

  book.title = title;
  book.author = author;
  book.year = year;

  res.json(book);
});

// DELETE Remove by ID
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: " Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: " Book deleted successfully" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: " Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
