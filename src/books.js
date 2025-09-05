// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }

// Your code here:
const booksArray = [
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers inside the process of learning and mastery.",
    },
  },
  {
    title: "Clean Code",
    pages: 464,
    author: "Robert C. Martin",
    details: {
      language: "English",
      description: "A handbook of agile software craftsmanship.",
    },
  },
  {
    title: "The Pragmatic Programmer",
    pages: 352,
    author: "Andrew Hunt and David Thomas",
    details: {
      language: "English",
      description: "Classic book on software engineering practices.",
    },
  },
  {
    title: "You Don’t Know JS",
    pages: 278,
    author: "Kyle Simpson",
    details: {
      language: "English",
      description: "Deep dive into core mechanisms of JavaScript.",
    },
  },
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
// Your code here:
for (let i in booksArray) {
  delete booksArray[i].details.language;
}

// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i in booksArray) {
  const pages = booksArray[i].pages;
  const timeReading = (pages * 500) / 90;
  booksArray[i].readingTime = Math.ceil(timeReading);
}

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(dictionary) {
  let dicbook = [];
  for (let author in dictionary) {
    dictionary[author].forEach((bookArray) => {
      const [title, pages] = bookArray;
      dicbook.push({
        title: title,
        pages: pages,
        author: author,
      });
    });
  }
  return dicbook;
}
// Bonus: Iteration 6 | Average Page Count
function averagePageCount(books) {
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  return totalPages / books.length;
}
