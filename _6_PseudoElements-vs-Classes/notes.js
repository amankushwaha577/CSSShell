

// # Pseudo-Classes in CSS

// ## 1. Structural Pseudo-Classes
// These pseudo-classes target elements based on their position within a parent container.

// - **:first-child**
//   - Description: Styles the first child element of a parent.
//   - Example: 
//     ```css
//     p:first-child {
//         font-weight: bold; /* Makes the first <p> bold */
//     }
//     ```

// - **:last-child**
//   - Description: Styles the last child element of a parent.
//   - Example: 
//     ```css
//     p:last-child {
//         color: blue; /* Changes the last <p> text color to blue */
//     }
//     ```

// - **:nth-child(n)**
//   - Description: Styles the nth child element of a parent based on its order.
//   - Example: 
//     ```css
//     li:nth-child(2) {
//         background-color: lightgreen; /* Styles the second <li> */
//     }
//     ```

// - **:nth-of-type(n)**
//   - Description: Styles the nth child of a specific type within a parent.
//   - Example: 
//     ```css
//     p:nth-of-type(1) {
//         color: red; /* Styles the first <p> regardless of other elements */
//     }
//     ```

// - **:only-child**
//   - Description: Styles an element if it is the only child of its parent.
//   - Example: 
//     ```css
//     p:only-child {
//         text-decoration: underline; /* Underlines <p> if it's the only child */
//     }
//     ```

// ## 2. Dynamic Pseudo-Classes
// These pseudo-classes apply styles based on user interaction with elements.

// - **:hover**
//   - Description: Styles an element when the mouse hovers over it.
//   - Example: 
//     ```css
//     button:hover {
//         background-color: lightblue; /* Changes background on hover */
//     }
//     ```

// - **:active**
//   - Description: Styles an element while it is being activated (e.g., clicked).
//   - Example: 
//     ```css
//     button:active {
//         background-color: navy; /* Changes background when clicked */
//         color: white; /* Changes text color when clicked */
//     }
//     ```

// - **:focus**
//   - Description: Styles an element when it has focus (e.g., input fields).
//   - Example: 
//     ```css
//     input:focus {
//         border: 2px solid green; /* Adds a green border when focused */
//     }
//     ```

// ## 3. Form Pseudo-Classes
// These pseudo-classes target form elements based on their state.

// - **:required**
//   - Description: Styles required form fields.
//   - Example: 
//     ```css
//     input:required {
//         border: 2px solid red; /* Highlights required fields */
//     }
//     ```

// - **:optional**
//   - Description: Styles optional form fields.
//   - Example: 
//     ```css
//     input:optional {
//         border: 2px solid gray; /* Styles optional fields */
//     }
//     ```

// - **:checked**
//   - Description: Styles checked checkboxes or radio buttons.
//   - Example: 
//     ```css
//     input:checked {
//         background-color: yellow; /* Changes background for checked items */
//     }
//     ```

// - **:disabled**
//   - Description: Styles disabled form elements.
//   - Example: 
//     ```css
//     input:disabled {
//         background-color: lightgray; /* Styles disabled inputs */
//     }
//     ```

// - **:valid**
//   - Description: Styles valid input fields.
//   - Example: 
//     ```css
//     input:valid {
//         border: 2px solid green; /* Styles valid input fields */
//     }
//     ```

// - **:invalid**
//   - Description: Styles invalid input fields.
//   - Example: 
//     ```css
//     input:invalid {
//         border: 2px solid red; /* Styles invalid input fields */
//     }
//     ```

// ## 4. Negation and Additional Pseudo-Classes
// These pseudo-classes allow for more specific selections.

// - **:not(selector)**
//   - Description: Excludes elements matching the specified selector.
//   - Example: 
//     ```css
//     div:not(.special) {
//         background-color: lightgray; /* Styles all <div>s except those with class "special" */
//     }
//     ```

// - **:empty**
//   - Description: Targets elements with no children.
//   - Example: 
//     ```css
//     p:empty {
//         display: none; /* Hides empty <p> elements */
//     }
//     ```

// ## 5. Location-based Pseudo-Classes
// These pseudo-classes target elements based on their position relative to siblings.

// - **:nth-last-child(n)**
//   - Description: Selects the nth child from the end of a list.
//   - Example: 
//     ```css
//     li:nth-last-child(2) {
//         color: purple; /* Styles the second to last <li> */
//     }
//     ```

