  $( document ).ready(function() {
  console.log('hi');

  // get uniq class
  var classList = [];
  $('span:not(:empty)').each(function () {
      if (this.className != "" && classList.indexOf(this.className) == -1)
          classList.push(this.className);
  });


  classList.forEach(function(rawclass) {
    console.log(rawclass);
  });


});
