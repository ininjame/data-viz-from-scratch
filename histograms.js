function Histograms(x, y, plotWidth, plotHeight, raw_data, bins, columns) {
    var x = x;
    var y = y;
    var plotWidth = plotWidth;
    var plotHeight = plotHeight;
    var raw_data = raw_data;
    var bins = bins;
    var max_val = plotHeight

    var histograms = [];

    var columns = columns; //list of columns to use for generating histogram

    var groups = []; //contains attributes of each histogram to be generated

    var colors = ["red", "green", "blue"]

    function dataProcessing() {
        return
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
        for (var i=0; i< groups.length; i++) {
            histograms.push(new Histogram(x, y, plotWidth, plotHeight, data, groups[i], max_val))
        }
    }

    addGroup();
    addHistogram();

    this.draw()

}