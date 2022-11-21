
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
            mainContainer.classList.add("main-container");
            fragment.appendChild(mainContainer);

            const header = document.createElement("div");
            header.classList.add("header");
            const title = document.createElement("h1");
            title.classList.add("header-title");
            title.innerText = "PROGRAMMING BOOKS SHOP";
            header.append(title);
            mainContainer.appendChild(header);


            bookList.forEach(bookData => {
                const bookBlock = document.createElement("div");
                bookBlock.classList.add("book-block");

                const leftColumn = document.createElement("div");
                leftColumn.classList.add("book-picture");

                const middleColumn = document.createElement("div");
                middleColumn.classList.add("title-and-author");

                const rightColumn = document.createElement("div");
                rightColumn.classList.add("price-and-button-block");


                const bookCover = document.createElement("img");
                bookCover.src = bookData.imageLink;
                bookCover.classList.add("book-cover");
                leftColumn.appendChild(bookCover);

                const bookAuthor = document.createElement("h3");
                bookAuthor.classList.add("book-author");
                bookAuthor.innerText = bookData.author;

                const bookTitle = document.createElement("h2");
                bookTitle.classList.add("book-title");
                bookTitle.innerText = bookData.title;
                const showMoreButton = document.createElement("button");
                showMoreButton.classList.add("show-more-button");
                showMoreButton.innerText = "show more";

                const bookDescription = document.createElement("div");
                bookDescription.innerText = bookData.description;
                bookDescription.classList.add("book-description");
                bookBlock.appendChild(bookDescription);
                const closeButton = document.createElement("button");
                closeButton.classList.add("close-description-button");
                closeButton.innerText = "close";
                bookDescription.appendChild(closeButton);

                showMoreButton.addEventListener("click", () => {
                    bookDescription.style.display = "flex";
                });

                closeButton.addEventListener("click", () => {
                    bookDescription.style.display = "none";
                })

                middleColumn.appendChild(bookAuthor);
                middleColumn.appendChild(bookTitle);
                middleColumn.appendChild(showMoreButton);


                const price = document.createElement("div");
                price.classList.add("price");
                price.innerText = bookData.price;


                const buyButton = document.createElement("button");
                buyButton.classList.add("add-to-bag-button");
                buyButton.innerText = "add to bag";

                rightColumn.appendChild(price);
                rightColumn.appendChild(buyButton);

                bookBlock.append(leftColumn);
                bookBlock.append(middleColumn);
                bookBlock.append(rightColumn);

                mainContainer.appendChild(bookBlock);
            })


            const form = document.querySelector("form");
            body.insertBefore(fragment, form);
        })

}

createBookShop();