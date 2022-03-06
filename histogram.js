function Histogram(x, y, width, height, data, group, max_val) {
    var x = x;
    var y = y;
    var width = width;
    var height = height;
    var max_val = max_val;
    
    var data = data
     
    var group = group
    var buckets = []

    var bucketWidth = width/data.length


    function addBuckets() {
        var bucketX = x; 
        for (var i = 0; i < data.length; i++) {
            var bucketHeight = map(data[i], 0, max_val, y-height, height)
            var bucketY = y + height - bucketHeight
            buckets.push(new Bucket(bucketX, bucketY, bucketWidth, bucketHeight, group))
        }
    }



    
    addBuckets()

    this.draw = function(){
        for (var i=0; i < buckets.length; i++) {
            buckets[i].draw()
        }

    }
}