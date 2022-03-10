function payGapHist() {
    // this.id = 'Pay Gap Histogram'
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
        topMargin: marginSize*2,
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

    this.setup = function() {
        if (!this.loaded) {
          console.log('Data not yet loaded');
          return;
        }

        //get numeric cols from the raw data
        this.rawData = getNumCols(this.data)

        var firstCol = this.data.getColumn(0)
        var bestBins = sqrt(firstCol.length)
    
        // Create a select DOM element for each of the column choices
        this.selectCol1 = createSelect()
        this.selectCol2 = createSelect()
    
        // Set select position.
        push()
        fill(0)
        noStroke()
        text('Select columns to display', 40, 10)
        pop()
        this.selectCol1.position(width*0.9,50)
        this.selectCol2.position(width*0.9,70)
    
        // Fill the options with all numeric columns.
        for (var key in this.rawData) {
          this.selectCol1.option(key)
          this.selectCol2.option(key)
        }

        //create slider for number of bins
        this.binSlider = createSlider(10, bestBins*3, bestBins, 1);
        this.binSlider.position(400, 10);
    };

    this.destroy = function() {
        this.select.remove();
        this.binSlider.remove();
        this.selectCol1.remove();
        this.selectCol2.remove()
      };


    this.draw = function() {
        if (!this.loaded) {
            console.log('Data not yet loaded');
            return;
        }
        
        bins = this.binSlider.value()

        push()
        fill(0)
        text("Bins :"+ bins, width*0.7,20)
        pop()

        // console.log(this.rawData)

        //Select only data for the columns that are selected from the dropdown
        this.graphData = {}
        for (var key in this.rawData) {
            if (key == this.selectCol1.value() || key==this.selectCol2.value()) {
                this.graphData[key] = this.rawData[key]
            }
        }

        this.hist = new Histograms(this.layout.leftMargin, 
                                    this.layout.topMargin, 
                                    this.layout.plotWidth(), 
                                    this.layout.plotHeight(),
                                    this.graphData,
                                    bins)

        this.hist.draw()

    }

    function getNumCols(data) {
        var numCols = {}
        var numColHeaders = ['num_jobs_male','median_male','num_jobs_female','median_female','num_jobs','proportion_female','pay_gap']
        // for(var i=0; i<data.getColumnCount(); i++) {
        //     let colName = data.columns[i]
        //     let colData = stringsToNumbers(data.getColumn(colName))

            // var colType = 'number'
            // for(var j=0; j<colData.length; j++) {
            //     if (typeof(colData[j]) != 'number') {
            //         colType = typeof(colData[j])
            //     }
            // }
        //   if (colName in num) {
        //     numCols[colName] = colData
        //   }
        //     numCols[colName] = colType
        // }
        // return numCols
        for (var i=0; i<numColHeaders.length; i++) {
            numCols[numColHeaders[i]] = data.getColumn(numColHeaders[i])
        }

        return numCols
      
      }

}