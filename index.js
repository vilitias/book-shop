
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

            let totalSum = 0;

            const shopCart = document.createElement("div");
            shopCart.classList.add("shopping-cart");
            const shopCartInner = document.createElement("div");
            shopCartInner.classList.add("cart-inner-wrapper");
            shopCart.appendChild(shopCartInner);
            const cartInnerUpper = document.createElement("div");
            cartInnerUpper.classList.add("cart-title-and-list");
            shopCartInner.appendChild(cartInnerUpper);

            const shopCartTitle = document.createElement("h3");
            shopCartTitle.classList.add("shop-cart-title");
            shopCartTitle.innerText = "Shopping cart";
            const buyingConfirmButton = document.createElement("button");
            buyingConfirmButton.classList.add("cart-confirmation-button");
            buyingConfirmButton.innerText = "Confirm";
            cartInnerUpper.append(shopCartTitle);
            
            const totalSumBlock = document.createElement("div");
            totalSumBlock.classList.add("total-sum");
            totalSumBlock.innerText = totalSum;
            fragment.appendChild(totalSumBlock);

            fragment.appendChild(shopCart);


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
                price.innerText = bookData.price + "$";


                const buyButton = document.createElement("button");
                buyButton.classList.add("add-to-bag-button");
                buyButton.innerText = "add to bag";

                buyButton.addEventListener("click", () => {

                    if (shopCart.style.display !== "flex") {
                        shopCart.style.display = "flex";
                    }

                    const bookInCart = document.createElement("div");
                    bookInCart.classList.add("book-in-cart");
                    const titleAndAuthor = document.createElement("div");
                    titleAndAuthor.classList.add("cart-title-and-author");

                    const cartTitle = document.createElement("h4");
                    cartTitle.classList.add("title-in-cart");
                    cartTitle.innerText = bookData.title;
                    
                    const cartAuthor = document.createElement("h5");
                    cartAuthor.classList.add("author-in-cart");
                    cartAuthor.innerText = bookData.author;

                    titleAndAuthor.appendChild(cartTitle);
                    titleAndAuthor.appendChild(cartAuthor);

                    const cartPrice = document.createElement("div");
                    cartPrice.classList.add("cart-price");
                    cartPrice.innerText = bookData.price + "$";

                    const deleteFromCart = document.createElement("img");
                    deleteFromCart.classList.add("delete-cross");
                    deleteFromCart.src = "./images/x.png";
                    deleteFromCart.addEventListener("click", (e) => {
                        e.target.parentElement.remove();
                        totalSum -= bookData.price;
                        totalSumBlock.innerText = totalSum + "$";

                    })
                    


                    bookInCart.appendChild(titleAndAuthor);
                    bookInCart.appendChild(cartPrice);
                    bookInCart.appendChild(deleteFromCart);

                    cartInnerUpper.appendChild(bookInCart);
                    totalSum += bookData.price;
                    totalSumBlock.innerText = totalSum + "$";
                })
                shopCartInner.append(buyingConfirmButton);

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