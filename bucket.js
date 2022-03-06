function Bucket(x, y, width, height, group) {
    var x = x;
    var y = y;
    var w = width;
    var h = height;
    this.group = group;
    this.mouseOver = function(mouseX, mouseY) {
        if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
            push()
            fill(0)
            text(this.group.name, mouseX+5, mouseY) 
            pop()
            
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