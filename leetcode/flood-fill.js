// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor.

// You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel,

// plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,

// plus any pixels connected 4-directionally to those pixels (also with the same color),

// and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  current = image[sr][sc];
  if (current === newColor) {
    return image;
  }
  const flood = (image, sr, sc, newColor) => {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[0].length ||
      current !== image[sr][sc]
    ) {
      return;
    }
    if (image[sr][sc] === current) {
      image[sr][sc] = newColor;
    }
    flood(image, sr - 1, sc, newColor);
    flood(image, sr + 1, sc, newColor);
    flood(image, sr, sc - 1, newColor);
    flood(image, sr, sc + 1, newColor);
  };
  flood(image, sr, sc, newColor);
  return image;
};
