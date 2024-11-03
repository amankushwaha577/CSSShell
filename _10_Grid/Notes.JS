// In CSS, Grid Layout (commonly known as CSS Grid) is a powerful 2-dimensional layout system designed for arranging elements 
// into rows and columns. It enables you to create more complex, responsive, and flexible layouts with ease, allowing you to design 
// layouts for both rows and columns simultaneously.


// Key Terminology :
// 1. Grid Container: The parent element that holds grid items. You apply display: grid; or display: inline-grid; to make it a grid container.
// +-------------------+
// |  Grid Container   |
// | +---+ +---+ +---+ |
// | |   | |   | |   | |
// | |   | |   | |   | |
// | +---+ +---+ +---+ |
// +-------------------+

// 2. Grid Items: The direct children of the grid container that are placed within the grid.
// +-------------------+
// |  Grid Container   |
// | +---+ +---+ +---+ |
// | | 1 | | 2 | | 3 | |  <- Grid Items
// | +---+ +---+ +---+ |
// +-------------------+


// 3. Grid Columns -
// The vertical lines of grid items are called columns.
// +---+---+---+
// | C1| C2| C3|
// |   |   |   |
// |   |   |   |
// |   |   |   |
// +---+---+---+


// 4. Grid Rows -
// The horizontal lines of grid items are called rows.
// +-----------+
// | Row 1     |
// +-----------+
// | Row 2     |
// +-----------+


// 5. Grid Gaps -
// The spaces between each column/row are called gaps.

// A. Row gap
// +----+----+----+
// |    |    |    |
// +----+----+----+

// (gap) [Row gap]

// +----+----+----+
// |    |    |    |
// +----+----+----+

// B. Column Gap
// +----+         +----+         +----+
// |    |         |    |         |    |
// +----+         +----+         +----+
//      (column gap)   (column gap) 



// 4. Grid Lines -
// The lines between columns are called column lines.
// The lines between rows are called row lines.
// +---|---|---+
// | 1 | 2 | 3 |
// |---|---|---|  <- Grid Lines
// | 4 | 5 | 6 |
// |---|---|---|
//     ^
//     |
// Grid Lines


// 5. Grid Tracks: The rows and columns formed by grid lines.
// +---+---+---+
// | R1| R1| R1| <- Row Track 1
// |---|---|---|
// | R2| R2| R2| <- Row Track 2
// +---+---+---+

//   ^
//   |
// Column Track 1

// Grid Cell: The single space between four grid lines.
// Grid Area: A rectangular area made up of one or more grid cells

