function payGapHist() {
    this.id = 'Pay Gap Histogram'
    // Name for the visualisation to appear in the menu bar.
    this.name = 'Pay Gap Histogram';

    // Each visualisation must have a unique ID with no special
    // characters.
    this.id = 'pay-gap-hist';

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

    this.draw = function() {
        if (!this.loaded) {
            console.log('Data not yet loaded');
            return;
        }

        console.log('Testing')

    }

}