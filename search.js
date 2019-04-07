'use strict';
let searchKeyWord = document.getElementById('searchKeyWord');
// let searchBtn = document.getElementById('searchBtn');
let resultList = document.getElementById('resultList');

// searchBtn.onclick = function() {
//     clearHistory();
//     let keyword = document.getElementById('searchKeyWord').value;
//     chrome.bookmarks.search(keyword, function(results){
//         results.map((item) => {
//             if (item.title && item.url) {
//                 addRow(item.title, item.url);
//             }
//         });
//     });
// };

searchKeyWord.oninput = function() {
    clearHistory();
    let keyword = searchKeyWord.value;
    chrome.bookmarks.search(keyword, function(results){
        results.map((item) => {
            if (item.title && item.url) {
                addRow(item.title, item.url);
            }
        });
    });
};

function addRow(title, url){
    let row=document.createElement("a");
    row.setAttribute("href", url);
    row.setAttribute("target", "_blank");
    addLi(row, title);
    document.getElementById("resultList").appendChild(row);
}

function addLi(parent, title) {
    let li=document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerHTML=title;
    parent.appendChild(li);
}

function clearHistory() {
    while(resultList.hasChildNodes()){
        resultList.removeChild(resultList.firstChild);
    }
}