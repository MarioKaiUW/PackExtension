chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "makePack") {
        var allCheckBox = document.querySelectorAll('.listviewhovercolor [data-name=projectname] a');
        var data = []
        for (i = 0; i < allCheckBox.length; i++) { data[i] = allCheckBox[i].innerHTML; }
        console.log(data);
        var para = "action=createPackingList&data=" + JSON.stringify(data).split("#").join("%23");

        var div = document.createElement('div');
        div.id = "centerDiv";
        div.setAttribute("style", "background-color: red; position: fixed; width: 500px; height: 200px;top: 50%;left: 50%;margin-top: -100px;margin-left: -250px;")
        var url = "https://www.virovek.com/virovek/packing-list.php?" + para;
        div.innerHTML = "<iframe src='" + url + "' style='width: 634px; height: 500px;'> </iframe>";
        document.querySelector('body').appendChild(div);
    }
});