// A stacking context is a concept in CSS that determines the order in which elements are layered or stacked on top of each other.
// When an element creates a new stacking context, it forms an isolated layer that affects the stacking order of its child 
// elements independently from outside elements. This can help manage complex layouts and control the appearance of layered 
// elements more predictably.


// <!-- 
// 1. Root element (<html>) always creates a stacking context. 🏠

// 2. For position: relative | absolute | fixed | sticky 🌳.
//    ---------------------------------------------------- 
//     2.A. An Element with a position value absolute/relative + z-index value other than auto creates a new stacking context .
//         position: relative; z-index: 10; /* New stacking context */

//     2.C. An Element with a position value    fixed/sticky always creates a new stacking context .
//         An element with position: fixed always creates a stacking context, regardless of the z-index value. This means even if z-index: auto, it will create a stacking context.
//         For position: sticky, the behavior depends on the browser. In modern browsers, it creates a stacking context only if z-index is set to a value other than auto. In some mobile browsers, position: sticky may always create a stacking context.


// 3. Opacity < 1 Creates Stacking Context 🌀:
//    Elements with opacity less than 1 automatically create a new stacking context

//    opacity: 0.9; /* New stacking context */


// 4. Elements with these properties create a stacking context
//    a. transform, filter, perspective, clip-path.
//    b. translate, rotate, scale
//    c. mask

//    transform: scale(1); /* New stacking context */
//    filter: blur(5px);   /* New stacking context */


// 5. Overflow Hidden/Scroll/auto + position: othan than static Creates Stacking Context 🚧:
//    Elements with overflow set to hidden/ scroll/ or auto and a position other than static create a stacking context.

//    position: relative;
//    overflow: hidden; /* New stacking context */


// 6.  Flex/Grid items with z-index (not auto) create a stacking context. 📦
// -->



// <!-- 
// When two elements are in the same stacking context, their stacking order is determined by their source order in the HTML.
// The box2 appears later in the document, so it is painted on top of the box1. 
// -->
