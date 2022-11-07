function calculateTriangleArea(length, width) {
  return length * width / 2
}

function calculateRectangleArea(base, height) {
  return base * height
}

function calculateCircleArea(radius) {
  return Math.PI * radius * radius
}

if (calculateRectangleArea.name === true)
  (function calculateRectangleArea(base, height) {
    return [base * height]
  })
if (calculateTriangleArea.name === true)
  (function calculateTriangleArea(length, width) {
    return [length * width / 2]
  })

else(function calculateCircleArea(radius) {
  return [Math.PI * radius * radius]
})
