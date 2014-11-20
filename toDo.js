//add item to to-do list when addToList button is clicked

function addItem(itemText){
    //grab id of ul
    var list = document.getElementById("toDoList");
    
    //create new li element via power of java script
    var newEl = document.createElement("li");
    
    //create checkbox to be used to strike-through done items
    var newElCbox = document.createElement("input");
    newElCbox.type = "checkbox";
    
    //append checkbox to li
    newEl.appendChild(newElCbox);
    
    //create span to contain list item text
    var newElSpan = document.createElement("span");
    
    //innerText doesn't work, we need to create text node
    var newElSpanText = document.createTextNode(itemText);
    
    //append Textnode to span
    newElSpan.appendChild(newElSpanText);
    //append span to li
    newEl.appendChild(newElSpan);
    //append li to ul id "list"
    list.appendChild(newEl);
    itemText.focus();
    
    
}
function checkDone(){
    //create an array of list('li')elements
    var liz = document.getElementsByTagName("li");
    //here's where the action is, we loop through li elements and
    //place their children into a subarray "c", we then test c[0]which is the
    //checkbox for checked value, if true, we line-through c[1] the span element
    for (var a = 0; a < liz.length; a++) { var b = liz[a]; var c = b.children; if(c[0].checked) {c[1].style.textDecoration = "line-through";}
}};