document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.getElementById("book-list");
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" }
    ];

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
        bookList.appendChild(bookDiv);
    });
});
