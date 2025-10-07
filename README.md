# Restaurant Ordering App

This project is a dynamic and interactive restaurant ordering app, built as a key module in the Scrimba Frontend Developer Career Path. It simulates a real-world food ordering experience, allowing users to browse a menu, add items to their cart, see a running total, and complete their order through a payment modal.

![App Screenshot](<img width="1920" height="959" alt="image" src="https://github.com/user-attachments/assets/1bb5e623-166d-4ddb-8baf-d5364e575b16" />)

---

### About The Project

This is a single-page application built with plain HTML, CSS, and JavaScript. It's fully responsive and focuses on clean, efficient JavaScript to manage the application's state and user interactions. The goal was to build a realistic and functional user interface from scratch, without relying on any frameworks.

### Built With

*   HTML5
*   CSS3
*   JavaScript (ES6+)

---

### What I Learned

This project was a significant step up in complexity and taught me several advanced front-end development concepts:

*   **DOM Manipulation & Dynamic Rendering**: I learned to dynamically generate HTML content from a JavaScript array of objects (`data.js`) to render the restaurant's menu. This involved extensive use of `document.getElementById` and `innerHTML` to create an interactive user interface.

*   **State Management**: I managed the application's state using a single `orders` array as the source of truth. All user actions, like adding or removing items, directly manipulate this array, which then triggers a re-render of the UI, ensuring the view is always in sync with the data.

*   **Complex Array Methods**: I gained deep experience with advanced array methods.
    *   `find()` was used to locate specific items in both the menu data and the orders array.
    *   `findIndex()` and `splice()` were used together to correctly implement the "remove" functionality.
    *   I learned why `filter()` wasn't the right tool for removing a single instance of an item.

*   **Advanced Logic for State Updates**: The biggest challenge was implementing the item grouping feature. This required:
    1.  **Restructuring Data**: Changing the data structure of items in the `orders` array to include a `quantity` property.
    2.  **Conditional Logic**: Writing "add/update" logic that first checks if an item already exists in the order. If it does, it increments the quantity; otherwise, it adds a new object to the array.
    3.  **Dynamic Rendering**: Updating the `renderOrder()` function to display quantities and calculate line totals (`price * quantity`), ensuring the UI accurately reflects the complex state.

*   **Event Delegation**: I used a single event listener on the `document` to efficiently manage all user clicks. By using `e.target.dataset`, I could determine which button (`add`, `remove`, `complete order`) was clicked, making the code cleaner and more performant than adding multiple individual event listeners.

*   **Debugging CSS & HTML Quirks**: I debugged complex CSS layout issues caused by conflicting styles and learned about HTML specification quirks, such as why `maxlength` does not work on an `<input type="number">` and how to solve it using `type="text"` and `inputmode="numeric"`.

---

### How To Use

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone https://github.com/Ayoubxpy/restaurant-ordering-app.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd restaurant-ordering-app
    ```
3.  Open the `index.html` file in your web browser.

---

### Acknowledgments

This project was built as part of the [Scrimba Frontend Developer Career Path](https://scrimba.com/learn/frontend). I'm grateful to the Scrimba team and community for their incredible learning platform.

If you are interested in learning to code with Scrimba, you can use my affiliate link to **get a 20% discount** on their Pro courses:
**[https://scrimba.com/?via=u42a23be](https://scrimba.com/?via=u42a23be)**
