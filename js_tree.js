"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Connor J Webdale 
   Date: 4.2.19 

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

// Creating of global variables 
var nodeCount = 0;
var elementCount = 0;
var textCount = 0;
var wsCount = 0;

// Event handler to run the makeTree() function when the page loads 
window.addEventListener("load", makeTree);

// Creates the node tree for the srouce article on the page 
function makeTree() {
      // Creates an aside element fragment 
      var asideFrag = document.createElement("aside");
      asideFrag.setAttribute("id", "treeBox");
      asideFrag.innerHTML = "<h1>Node Tree</h1>";

      // Appends the aside element fragement to the element with the ID "main"
      document.getElementById("main").appendChild(asideFrag);

      // Contains the initial "ol" element node 
      var nodeList = document.createElement("ol");

      // Appends nodeList to the aside element fragement 
      asideFrag.appendChild(nodeList);

      // Matches the CSS selector "#main article" 
      var sourceArticle = document.querySelectorAll("#main article");

      // Calls the makeBranches() function using sourceArticle and nodeList as parameters 
      makeBranches(sourceArticle, nodeList);

      // Displays the total count of nodes 
      document.getElementById("totalNodes").innerText = nodeCount;

      // Displays the total count of element nodes 
      document.getElementById("elemNodes").innerText = elementCount;

      // Displays the total count of text nodes
      document.getElementById("textNodes").innerText = textCount;

      // Displays the total count of whitespace nodes 
      document.getElementById("wsNodes").innerText = wsCount;
}

// Used to append node branches to the node tree diagram 
function makeBranches(treeNode, nestedList) {
      // treeNode stores the current node from the source article 
      // nestedList stores the structure of the node tree displayed in the web page 

      // Increases the nodeCount variable by 1 
      nodeCount++;

      // Creates a list item HTML fragment 
      var liElem = document.createElement("li");
      liElem.textContent = "+--";

      // Stores a span element node in the spanElem variable 
      var spanElem = document.createElement("span");

      // Appends the spanElem to the liElem node 
      liElem.appendChild(spanElem);

      // Appends the liElem node to the nestedList element node 
      nestedList.appendChild(liElem);

      for (var i = 0; i < treeNode[0].childNodes.length; i++) {
            // If treeNode represents an element node 
            if (treeNode[0].childNodes[i].nodeType === 1) {
                  console.log("is being run as an element node");
                  // Increases the value of the elementCount variable by 1 
                  elementCount++

                  // Adds the class attribute to the spanElem node 
                  spanElem.setAttribute("class", "elementNode");

                  // Appends a text string to the spanElem node 
                  spanElem.textContent = "<" + treeNode[0].childNodes[i].tagName + ">";

            } else { // If treeNode represents a text node 
                  console.log("is being run as a text node");
                  // Increases the value of the textCount variable by 1 
                  textCount++

                  // Declares the variable "textString" equal to the value of the text node 
                  var textString = treeNode[0].childNodes[i];

                  console.log(textString)
                  // If the function returns the value true, 
                  if (isWhiteSpaceNode(textString) === true) {
                        // Increases the value of the wsCount variable by 1
                        wsCount++

                        // Changes the class attribute 
                        spanElem.setAttribute("class", "whiteSpaceNode");

                        // Appends the text string "#text" to the spanElem node 
                        spanElem.textContent += "#text";
                  }

                  // If the function returns the value false, 
                  if (isWhiteSpaceNode(textString) === false) {
                        // Changes the class attribute 
                        spanElem.setAttribute("class", "textNode");

                        // Appends the value of the textString variable 
                        spanElem.innerText += textString.value;
                  }

                  // If the number of child nodes of treeNode is greater than zero, 
                  // if (treeNode.childNodes.length > 0) {
                  if (treeNode[0].childNodes > 0) {
                        // Creates a HTML fragment as an element node 
                        var newList = document.createElement("ol");
                        newList.innerText = "|";

                        // Appends newList to the nestedList element node 
                        nestedList.appendChild(newList);

                        // Loops through the child nodes of treeNode using n 
                        for (var n = 0; n < treeNode.childNodes.length; n++) {
                              // For each child node, calls the makeBranches() function using n and newList as parameter values 
                              makeBranches(n, newList);
                        }
                  }
            }
      }
}





function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}