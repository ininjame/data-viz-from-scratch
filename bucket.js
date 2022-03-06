function Bucket(x, y, width, height, group) {
    var x = x;
    var y = y;
    var width = width;

    this.height = height;
    this.group = group;
    this.mouseOver = function(mouseX, mouseY) {
        if (mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
            return this.group.name
        }
    }
    
    this.draw = function() {
        push()
        fill(group.color)
        noStroke()
        rect(x, y, width, height)
    }
    
}