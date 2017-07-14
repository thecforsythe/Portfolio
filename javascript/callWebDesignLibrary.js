'use strict';

//--------------Summon Handlebars----------
var sectionWebDesign = [];

function WebDesign (webDesignLibraryObj) {
  for (var key in webDesignLibraryObj) {
    this[key] = webDesignLibraryObj[key];
  }
}

WebDesign.prototype.toHtml = function() {
  var source = $('#web-design-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

webDesignLibrary.forEach(function(sectionObject) {
  sectionWebDesign.push(new WebDesign(sectionObject));
});

sectionWebDesign.forEach(function(section){
  $('#web-design').append(section.toHtml());
});

console.log(webDesignLibrary);
