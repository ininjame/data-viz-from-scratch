function Histogram(x, y, width, height) {
    var x = x;
    var y = y;
    var w = width;
    var h = height;
     
    var buckets = []

    var bucketWidth = w/data.length


    function addBuckets(data, group, max_val) {
        var bucketX = x; 
        for (var i = 0; i < data.length; i++) {
            var bucketHeight = map(data[i], 0, max_val, y-h, h)
            var bucketY = y + h - bucketHeight
            buckets.push(new Bucket(bucketX, bucketY, bucketWidth, bucketHeight, group))
        }
    }

    function dataProcessing() {
        
    }

    
    addBuckets()

    this.draw = function(){
        for (var i=0; i < buckets.length; i++) {
            buckets[i].draw()
        }

    }
}