"use strict";

(function(exports) {

  function Headlines(guardianapis) {
    this._titles = guardianapis.news;
  };

  Headlines.prototype.displayHeadlines = function () {
      var string = ""
      for (var i = 0; i < this._titles.length; i++) {
        string += "<li><div>" + this._titles[i].webTitle + "</div></li>"
      }
      return "<ul>" + string + "</ul>";
  }

  Headlines.prototype.displayThumbs = function () {
    return "<img src='>" + this._titles[i].fields.thumbnail + "<' />"
  }

//   Headlines.prototype._createObjectURL = function(blob) {
//   var objURL = URL.createObjectURL(blob);
//   this.objectURLs = this.objectURLs || [];
//   this.objectURLs.push(objURL);
//   return objURL;
//   }
//
//   Headlines.prototype._clearObjectURL = function() {
//   if (this.objectURLs) {
//     this.objectURLs.forEach(function(objURL) {
//       URL.revokeObjectURL(objURL);
//     });
//     this.objectURLs = null;
//   }
//   }
//
//   Headlines.prototype._requestRemoteImageAndAppend = function(imageUrl, element) {
//   // var xhr = new XMLHttpRequest();
//   // xhr.open('GET', imageUrl);
//   // xhr.responseType = 'blob';
//     xhr.onload = function() {
//     var img = document.createElement('img');
//     img.setAttribute('data-src', imageUrl);
//     var objURL = this._createObjectURL(xhr.response);
//     img.setAttribute('src', objURL);
//     element.appendChild(img);
//   }.bind(this);
//   xhr.send();
// };

exports.Headlines = Headlines;

})(this);
