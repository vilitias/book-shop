
function createBookShop() {

let booksData;

fetch("book-data.json") 
        .then(response => {
            return response.json();
        })
        .then(data => {
            bookList = data;
            console.log(data);

            const fragment = document.createDocumentFragment();

            const body = document.querySelector("body");

            const mainContainer = document.createElement("div");
            mainContainer.classList.add("main-container")
            fragment.appendChild(mainContainer);

            const header = document.createElement("div");
            header.classList.add("header");
            mainContainer.appendChild(header);


            bookList.forEach(bookData => {
                const bookBlock = document.createElement("div");
                const bookCover = document.createElement("img");
                bookCover.src = bookData.imageLink;
                bookCover.classList.add("book-cover");
                bookBlock.appendChild(bookCover)

                mainContainer.appendChild(bookBlock);
            })


            const form = document.querySelector("form");
            body.insertBefore(fragment, form);
        })

}

createBookShop();