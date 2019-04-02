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
}

// Used to append node branches to the node tree diagram 
function makeBranches(treeNode, nestedList) {
      // Stores the current node from the source article 
      // var treeNode = ;

      // Stores the structure of the node tree displayed in the web page 
      // var nestedList = ;

      // Increases the nodeCount variable by 1 
      nodeCount++;

      var liElem = document.
}





function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}