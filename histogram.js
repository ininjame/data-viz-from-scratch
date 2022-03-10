function Histogram(x, y, width, height, data, group) {
    var x = x;
    var y = y;
    var w = width;
    var h = height;
     
    var buckets = []



    function addBuckets() {
        var bucketX = x; 
        var step = 2
        var bucketWidth = (w-step*data.length)/data.length;
        var max_val = max(data)
        for (var i = 0; i < data.length; i++) {
            var bucketHeight = map(data[i], 0, max_val, 0, h)
            // console.log(bucketHeight)
            var bucketY = h - bucketHeight
            buckets.push(new Bucket(bucketX, bucketY, bucketWidth, bucketHeight, group))
            bucketX += bucketWidth + step
        }
    }

    addBuckets()

    this.draw = function(){
        for (var i=0; i < buckets.length; i++) {
            buckets[i].draw()
            buckets[i].mouseOver()
        }

    }
}