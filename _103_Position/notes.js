// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Property           | Relative Positioning           | Absolute Positioning           | Fixed Positioning              | Sticky Positioning             |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Definition         | Positioned relative to its     | Positioned relative to the     | Positioned relative to the     | Behaves like relative until a  |
// |                    | normal position in the         | nearest positioned ancestor    | viewport; does not move with   | defined scroll position, then  |
// |                    | document flow.                 | (non-static).                  | scrolling.                     | becomes fixed.                 |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Document Flow      | Affects layout; retains space. | Removed from normal flow; does | Removed from normal flow; does | Affects layout until it becomes |
// |                    |                                | not affect surrounding         | not affect surrounding         | sticky; retains space even after|
// |                    |                                | elements.                      | elements.                      | sticking.                       |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Z-index Context    | Creates a new stacking context | Creates a new stacking context | Always creates a new stacking  | Creates a new stacking context |
// |                    | if `z-index` is explicitly set.| if `z-index` is explicitly set.| context regardless of `z-index`| for mobile browsers or when    |
// |                    |                                |                                | value.                         | `z-index` is set explicitly.   |
// +--------------------+-------------------------------+-------------------------------+-------------------------------+-------------------------------+
// | Positioning        | `top`, `right`, `bottom`,      | Positioned with `top`, `right`,| Uses `top`, `right`, `bottom`, | Uses `top`, `right`, `bottom`, |
// | Keywords           | `left` offsets from its normal | `bottom`, `left` offsets from  | `left` offsets from the        | `left` offsets to determine    |
// |                    | position.                      | the nearest positioned         | viewport.                      | when to stick.                 |
// |                    |                                | ancestor.                      |                                |                                |
// +--------------------+--------------------------------+--------------------------------+--------------------------------+-------------------------------+
