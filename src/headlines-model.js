"use strict";

(function(exports) {

  function Headlines(guardianapis) {
    this.headlines = guardianapis.news;
  };

  Headlines.prototype.displayHeadlines = function () {
    var string = ""
      for (var i = 0; i < this.headlines.length; i++) {
      string += "<li><img src='>" + this.headlines[i].fields.thumbnail + "<' /><div>" + this.headlines[i].webTitle + "</div></li>"
    }
    return "<ul>" + string + "</ul>";
  }

  Headlines.prototype._createObjectURL = function(blob) {
  var objURL = URL.createObjectURL(blob);
  this.objectURLs = this.objectURLs || [];
  this.objectURLs.push(objURL);
  return objURL;
  }

  Headlines.prototype._clearObjectURL = function() {
  if (this.objectURLs) {
    this.objectURLs.forEach(function(objURL) {
      URL.revokeObjectURL(objURL);
    });
    this.objectURLs = null;
  }
  }

  Headlines.prototype._requestRemoteImageAndAppend = function(imageUrl, element) {
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', imageUrl);
  // xhr.responseType = 'blob';
  xhr.onload = function() {
    var img = document.createElement('img');
    img.setAttribute('data-src', imageUrl);
    var objURL = this._createObjectURL(xhr.response);
    img.setAttribute('src', objURL);
    element.appendChild(img);
  }.bind(this);
  xhr.send();
};

  Headlines.prototype.displayThumbs = function () {
    return "<img src='>" + this.headlines[i].fields.thumbnail + "<' />"
  }

exports.Headlines = Headlines;

})(this);
