function triangleArea(side1,side2,side3)
{
    let halfPerimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(halfPerimeter*(halfPerimeter - side1)*(halfPerimeter - side2)*(halfPerimeter - side3));
    return area 
}

console.log(triangleArea(8,8,8))