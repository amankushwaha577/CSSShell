// A stacking context is a concept in CSS that determines the order in which elements are layered or stacked on top of each other.
// When an element creates a new stacking context, it forms an isolated layer that affects the stacking order of its child 
// elements independently from outside elements. This can help manage complex layouts and control the appearance of layered 
// elements more predictably.

// 1. The Root Element <html>
    // The root element of the document (<html> in HTML) always creates a stacking context.


// 2. Positioned Elements (position: relative, absolute, fixed, or sticky) with z-index
    // Any element with a position of relative, absolute, fixed, or sticky and a z-index value other than 'auto' creates 
    // a new stacking context. 

    // .example {
    //     position: relative; /* or absolute, fixed, sticky */
    //     z-index: 1; /* This non-auto z-index creates a stacking context */
    //   }

// 2. Positioned Elements (position: relative, absolute, fixed, or sticky) without z-index
    // elements with position: relative, absolute, fixed, or sticky without a specified z-index do not create a stacking context 
    // on their own.

    
// 3. Other Properties That Create Stacking Contexts Regardless of position :
    // opacity: Any value less than 1 (e.g., opacity: 0.9).
    // transform: Using any transformation (e.g., transform: scale(1)).
    // filter: Applying a filter (e.g., filter: blur(5px)).
    // perspective: Setting perspective (e.g., perspective: 500px).
    // clip-path: Applying a clip path (e.g., clip-path: circle(50%)).
    // mask or mask-image: Adding a mask.
    // mix-blend-mode: Using a blend mode (e.g., mix-blend-mode: multiply).
    // isolation: isolate: Explicitly creating a stacking context.