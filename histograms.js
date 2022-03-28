function Histograms(x, y, plotWidth, plotHeight, rawData, bins) {
    var x = x;
    var y = y;
    var plotWidth = plotWidth;
    var plotHeight = plotHeight;
    var rawData = rawData
    var bins = bins
    var previous_bins = -1

    var colors = [color(252, 165, 2, 120), 
        color(2, 165, 252, 120)]

    
    var histograms = [];

    var groups = []; //contains attributes of each histogram to be generated

    var self = this

    var columns = Object.keys(rawData)

    //receives raw_data and output array of frequency buckets for each
    this.dataProcessing = function(rawData, bins) {
        //Process data and slot them into bins depending on the number of bins chosen
        var graphData = []
        for (var key in rawData) {
            var histData = []
            var max_val = max(rawData[key])
            var data = rawData[key]
            
            for (var i=0; i<= max_val*(bins-1)/bins; i+=max_val/bins) {
                counter = 0
                for (var j=0; j< data.length; j++) {
                    if (data[j] >= i && data[j] < i+max_val/bins) counter += 1
                }
                histData.push(counter/data.length)
            }
            graphData.push(histData)
        }
        return graphData
    }



    function addGroup() {
        //Add necessary info to create multiple histograms: name and color
        //Name will be fed into dropdown for user to choose
        for (var i=0; i< columns.length; i++) {
            var group = {
                name: columns[i],
                color: colors[i]
            }
            groups.push(group)
        }
    }

    function addHistogram(graphData) {
        let data = self.dataProcessing(0,0,0)
        // console.log(data)
        for (var i=0; i< groups.length; i++) {
            histograms.push(new Histogram(x, y, plotWidth, plotHeight, graphData[i], groups[i]))
        }
    }

    if (previous_bins != bins) {
        this.graphData = this.dataProcessing(rawData, bins)
    }
    else {
        previous_bins = bins
    }
    
    addGroup();
    addHistogram(this.graphData);
    

    this.draw = function(){
        for (var i=0; i<histograms.length; i++) {
            histograms[i].draw()
        }
    }

}