"use strict";
(function(exports) {

  function GuardianApis(){
    this.news = getGuardianNews();
  }

  function getGuardianNews() {
    var url = 'http://content.guardianapis.com/search?q=business&api-key=d5da5877-5eef-4644-b37e-4e6c47e4c2ff&show-fields=thumbnail';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.onload = function () {
      var data = xmlhttp.responseText;
      var jsdata = JSON.parse(data);
      var news = jsdata.response.results;
      return news;
    };
    xmlhttp.send();
  }

  exports.GuardianApis = GuardianApis

})(this);
