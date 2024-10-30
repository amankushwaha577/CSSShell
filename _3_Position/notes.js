

// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Property           | Relative Positioning           | Absolute Positioning           | Fixed Positioning              | Sticky Positioning             |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Definition         | Positioned relative to its     | Positioned relative to the     | Positioned relative to the     | Behaves like relative until a  |
// |                    | normal position in the         | nearest positioned ancestor    | viewport; does not move with   | defined scroll position, then  |
// |                    | document flow.                 | (non-static).                  | scrolling.                     | becomes fixed.                 |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Document Flow      | Affects layout; retains space. | Removed from normal flow; does | Removed from normal flow; does | Affects layout until it becomes|
// |                    |                                | not affect surrounding         | not affect surrounding         | sticky; retains space even after    |
// |                    |                                | elements.                      | elements.                      | sticking.                      |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Common Use Cases   | Adjusting element position     | Creating dropdown menus,       | Persistent navigation bars or  | Headers or nav bars that should|
// |                    | slightly without affecting     | tooltips, or modals.           | sidebars that remain visible   | stick to the viewport while    |
// |                    | layout.                        |                                | at all times.                  | scrolling within a section.    |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Behavior on Scroll | Moves with the scroll but stays| Stays at its defined position  | Remains fixed in the viewport  | Sticks to the specified        |
// |                    | in its relative position.      | regardless of scrolling; does  | and does not scroll with the   | position when scrolled to that |
// |                    |                                | not scroll with the content.   | content.                       | point; remains until scrolling |
// |                    |                                |                                |                                | out of its container.          |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Z-index Context    | Default stacking context.      | Creates a new stacking context.| Creates a new stacking context.| Respects the stacking context; |
// |                    |                                |                                |                                | does not create a new one.     |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Positioning        | `top`, `right`, `bottom`,      | Positioned with `top`, `right`,| Uses `top`, `right`, `bottom`, | Uses `top`, `right`, `bottom`, |
// | Keywords           | `left` offsets from its normal | `bottom`, `left` offsets from  | `left` offsets from the        | `left` offsets to determine    |
// |                    | position.                      | the nearest positioned         | viewport.                      | when to stick.                 |
// |                    |                                | ancestor.                      |                                |                               |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
