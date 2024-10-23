const myLibrary = [];

function Book(name, author, read = false) {
  this.name = name;
  this.author = author;
  this.read = read;
}

const book1 = new Book("firstBook", "firstAuthor");
const book2 = new Book("secondBook", "secondAuthor");

addBookToLibrary(book1);
addBookToLibrary(book2);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary(myLibrary) {
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
  remove.setAttribute("data-id", index);
  console.log(index);
  read.textContent = "read?";
  read.setAttribute("data-id", index);

  remove.addEventListener("click", function () {
    myLibrary.splice(remove.dataset.id, 1);
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

displayLibrary(myLibrary);

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
  document.body.append(form);
  form.appendChild(titleLabel);
  form.appendChild(title);
  form.append(submit);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let titleValue = title.value;
    const newBook = new Book(titleValue, "CBA");
    addBookToLibrary(newBook);
    displayBook(newBook);

    form.remove();
    title.remove();
    titleLabel.remove();
    submit.remove();
  });
});
