function duplicateChildNodes (parentId){
    var parent = document.getElementById(parentId);
    NodeList.prototype.forEach = Array.prototype.forEach;
    var children = parent.childNodes;
    children.forEach(function(item){
      var cln = item.cloneNode(true);
      parent.appendChild(cln);
    });
  };

  duplicateChildNodes("col1-ul");
  duplicateChildNodes("col2-ul");
  duplicateChildNodes("col3-ul");
  


  $(window).load(function(){
    $("#col1").addClass("col1--animated"); 
   $("#col2").addClass("col2--animated"); 
    $("#col3").addClass("col3--animated"); 
}) 