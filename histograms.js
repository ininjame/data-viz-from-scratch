function Histograms(x, y, plotWidth, plotHeight) {
    var x = x;
    var y = y;
    var plotWidth = plotWidth;
    var plotHeight = plotHeight;
    //find max value to determine plot height
    var max_val = plotHeight

    //mock data to test display
    // var data = [[100,200,399, 300, 200, 50], [100,200,200, 300, 400, 500]]

    var histograms = [];

    var columns = ['test1','test2']; //list of columns to use for generating histogram

    var groups = []; //contains attributes of each histogram to be generated

    var colors = ["red", "green", "blue"]

    var self = this

    //receives raw_data and output array of frequency buckets for each
    this.dataProcessing = function(raw_data, bins, columns) {
         //mock data to test display
        
        return [[100,200,399, 300, 200, 50], [100,200,200, 300, 400, 500]]
    }

    function calculateMaxVal() {
        //Find the maximum frequency across all the data
        return
    }

    function addGroup() {
        for (var i=0; i < columns.length; i++) {
            var group = {
                name: columns[i],
                color: colors[i]
            }
            groups.push(group)
        }
    }

    function addHistogram() {
        let data = self.dataProcessing(0,0,0)
        // console.log(data)
        for (var i=0; i< groups.length; i++) {
            histograms.push(new Histogram(x, y, plotWidth, plotHeight, data[i], groups[i]))
        }
    }

    addGroup();
    addHistogram();

    this.draw = function(){
        for (var i=0; i<histograms.length; i++) {
            histograms[i].draw()
        }
    }

}