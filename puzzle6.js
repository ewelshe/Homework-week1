var  red=getColor();
var blue=getColor();
right();
if (getColor()=="red"){
up();
up();
up();
}else {
  down();
  down();
  down();
}

if (getColor()=="blue"){
  right();
  down();
}else {
  left();
  up();
}
