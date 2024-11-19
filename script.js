const myLibrary = [];

// function Book(name, author, read = false) {
//   this.name = name;
//   this.author = author;
//   this.read = read;
// }

class Book {
  constructor(name, author, read = false) {
    this.name = name;
    this.author = author;
    this.read = read;
  }

  addBookToLibrary() {
    myLibrary.push(this);
  }
}

const book1 = new Book("firstBook", "firstAuthor");
const book2 = new Book("secondBook", "secondAuthor");

book1.addBookToLibrary();
book2.addBookToLibrary();

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }

function displayLibrary() {
  document.querySelectorAll(".card").forEach((card) => card.remove());

  myLibrary.forEach((book, index) => {
    displayBook(book, index);
  });
}

function displayBook(book, index) {
  let newBook = document.createElement("div");
  let remove = document.createElement("button");
  let read = document.createElement("button");
  let divWrapper = document.createElement("div");

  newBook.setAttribute("class", "card");
  newBook.textContent = `${book.name} by ${book.author}`;

  remove.innerHTML = "&times;";
  // remove.setAttribute("data-id", index);
  // console.log(index);
  read.textContent = "read?";

  remove.addEventListener("click", function () {
    myLibrary.splice(index, 1);
    displayLibrary(myLibrary);
  });
  read.addEventListener("click", function () {
    book.read = true;
    newBook.style.backgroundColor = "green";
  });

  if (book.read) newBook.style.backgroundColor = "green";

  document.body.append(newBook);
  divWrapper.appendChild(remove);
  divWrapper.appendChild(read);
  newBook.append(divWrapper);
}

displayLibrary();

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let form = document.createElement("form");
  let title = document.createElement("input");
  let titleLabel = document.createElement("label");
  let submit = document.createElement("button");

  title.setAttribute("id", "title");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title";
  submit.setAttribute("class", "submit");
  // submit.setAttribute("type", "submit");
  // title.setAttribute("required", "true");

  form.append(titleLabel, title, submit);

  document.body.append(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let titleValue = title.value;

    // console.log(!title.validity.valueMissing);

    if (titleValue) {
      const newBook = new Book(titleValue, "CBA");
      newBook.addBookToLibrary();
      displayLibrary();

      form.remove(); // the form element contains all child elements anyway.
    } else {
      title.setCustomValidity("need to fill it in");
      // title.reportValidity();
    }
  });

  title.addEventListener("input", function () {
    if (title.value) {
      title.setCustomValidity("");
    }
  });
});
