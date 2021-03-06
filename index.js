function Point(x, y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

function Shape(){

}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y);
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y);
}

function Circle(radius){
  Shape.call(this);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.diameter = function() {
  return this.radius * 2;
}

Circle.prototype.area = function() {
  return Math.pow(this.radius, 2) * Math.PI;
}

Circle.prototype.circumference = function() {
  return this.radius * 2 * Math.PI;
}

function Side(length){
  this.length = length;
}

function Polygon(sides){
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

Polygon.prototype.perimeter = function() {
  var p = 0;
  for (let i = 0; i < this.numberOfSides(); i++) {
    p += this.sides[i].length;
  }
  return(p);
}

function Quadrilateral(s1, s2, s3, s4){
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3), new Side(s4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height){
  Quadrilateral.call(this, width, width, height, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length){
  Rectangle.call(this, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if (this.hasOwnProperty(prop)){
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return props;
}

function Triangle(s1, s2, s3){
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
