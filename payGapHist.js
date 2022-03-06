function payGapHist() {
    this.id = 'Pay Gap Histogram'
    // Name for the visualisation to appear in the menu bar.
    this.name = 'Pay Gap Histogram';

    // Each visualisation must have a unique ID with no special
    // characters.
    this.id = 'pay-gap-hist';

    var marginSize = 35;
    //Chart layout
    this.layout = {
        marginSize: marginSize,
    
        // Margin positions around the plot. Left and bottom have double
        // margin size to make space for axis and tick labels on the canvas.
        leftMargin: marginSize * 2,
        rightMargin: width - marginSize,
        topMargin: marginSize,
        bottomMargin: height - marginSize * 2,
        pad: 5,
    
        plotWidth: function() {
          return this.rightMargin - this.leftMargin;
        },
    
        plotHeight: function() {
          return this.bottomMargin - this.topMargin;
        },
    
        // Boolean to enable/disable background grid.
        grid: true,
    
        // Number of axis tick labels to draw so that they are not drawn on
        // top of one another.
        numXTickLabels: 10,
        numYTickLabels: 8,
    };
    

    // Property to represent whether data has been loaded.
    this.loaded = false;
    // Preload the data. This function is called automatically by the
    // gallery when a visualisation is added.
    this.preload = function() {
        var self = this;
        this.data = loadTable(
            'data/pay-gap/occupation-hourly-pay-by-gender-2017.csv','csv','header',
        // Callback function to set the value
        // this.loaded to true.
        function(table) {
            self.loaded = true;
        });

    };

    this.hist = new Histograms(this.layout.leftMargin, 
                                this.layout.rightMargin, 
                                this.layout.plotWidth, 
                                this.layout.plotHeight)

    this.draw = function() {
        if (!this.loaded) {
            console.log('Data not yet loaded');
            return;
        }

        this.hist.draw()

    }

}