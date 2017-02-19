"use strict";


(function(exports){

  function NewsController(headlines){
    this.headlines = headlines;
  }

  NewsController.prototype.printHeadlines = function(){
      document.getElementById('headlines').innerHTML = this.headlines.displayHeadlines();
  }

  // NoteController.prototype.makeURLShowSingleNoteForCurrentPage = function() {
  //   window.addEventListener("hashchange", showSingleNoteForCurrentPage);
  // }
  //
  // function showSingleNoteForCurrentPage() {
  //   showNote(getNoteFromUrl(location.hash));
  // }
  //
  // function getNoteFromUrl(location) {
  //   return parseInt(location.split("#notes/")[1]);
  // }
  //
  // function showNote(id) {
  //   var htmlstring = new SingleNoteView(notelist._notes[id]).singleHTML();
  //   document.getElementById("note").innerHTML = htmlstring;
  // }

  exports.NewsController = NewsController;


})(this);
