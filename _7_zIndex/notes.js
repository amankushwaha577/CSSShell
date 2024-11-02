// A stacking context is a concept in CSS that determines the order in which elements are layered or stacked on top of each other.
// When an element creates a new stacking context, it forms an isolated layer that affects the stacking order of its child 
// elements independently from outside elements. This can help manage complex layouts and control the appearance of layered 
// elements more predictably.

1. The Root Element <html>
    {/* The root element of the document (<html> in HTML) always creates a stacking context. */}

2. Positioned Elements (position: relative, absolute, fixed, or sticky) with z-index
    {/* Any element with a position of relative, absolute, fixed, or sticky and a z-index value other than auto creates 
    a new stacking context. */}

    // .example {
    //     position: relative; /* or absolute, fixed, sticky */
    //     z-index: 1; /* This non-auto z-index creates a stacking context */
    //   }

2. Positioned Elements (position: relative, absolute, fixed, or sticky) without z-index
    // elements with position: relative, absolute, fixed, or sticky without a specified z-index do not create a stacking context 
    // on their own.