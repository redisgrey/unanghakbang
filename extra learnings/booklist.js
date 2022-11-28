console.log("yo!");

// * BOOK CLASS - REPRESENT A BOOK
class Book {
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}





// * UI CLASS - HANDLE UI TASK
class UI {



    static displayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));

    }




    static addBookToList(book) {
    
        const booklist = document.querySelector("#bookList");

        const bookrow = document.createElement("tr");

        bookrow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href=# class="btn btn-danger btn-sm delete">X</a></td>
        `;

        booklist.appendChild(bookrow);

    }




    static deleteBook(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }




    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");

        const bookForm = document.querySelector("#addBookForm");

        container.insertBefore(div, bookForm);

        // vanish in 3 seconds
        setTimeout(() => document.querySelector(".alert").remove(), 3000);
    
    }




    static clearFields(){
        document.querySelector("#titleInput").value = "";
        document.querySelector("#authorInput").value = "";
        document.querySelector("#isbnInput").value = "";
    }



}





// * STORE CLASS - HANDLES STORAGE


class Store {


    static getBooks (){
        let books;
        if(localStorage.getItem("books") === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }




    static addBookToStorage(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }





    static removeBookInStorage(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }



}





// * EVENT - DISPLAY BOOKS
document.addEventListener("DOMContentLoaded", UI.displayBooks);






// * EVENT - ADD A BOOK
const bookForm = document.querySelector("#addBookForm");



bookForm.addEventListener("submit", (e) => {

    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector("#titleInput").value;
    const author = document.querySelector("#authorInput").value;
    const isbn = document.querySelector("#isbnInput").value;

    // Validate
    if(title === "" || author === "" || isbn === ""){
        UI.showAlert("Please fill in all the fields", "danger");
    }else {
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Add Book to UI
        UI.addBookToList(book);

        // Add Book to Storage
        Store.addBookToStorage(book);

        // show success message
        UI.showAlert(`${title} is added to the list`, "success");

        // clear fields
        UI.clearFields();
    }


});





// *EVENT - REMOVE A BOOK
const booklist = document.querySelector("#bookList");

booklist.addEventListener("click", (e) => {
    
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from Storage
    Store.removeBookInStorage(e.target.parentElement.previousElementSibling.textContent);

    // show delete message
    UI.showAlert("Book Removed in the list", "warning");
})