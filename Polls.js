Poll_List = localStorage.getItem("StoredPollList");

if (Poll_List == null) {
   var poll_list = {
      listName: "Doesn't Matter",
      Polls: [
      {
         P_Title: "Coffee vs Tea",
         P_img: "pie.png",
      },
      {
         P_Title: "Best Apartment Furnishers",
         P_img: "barchart.gif",
      }]
   }
}
else {
   load_Poll_List = localStorage.getItem("StoredPollList");
   var poll_list = JSON.parse(load_Poll_List);
}

poll_list_string = JSON.stringify(poll_list);
localStorage.setItem("StoredPollList", poll_list_string);

function displayPolls() {
   var html = "";
   for (var i = 0; i < poll_list.Polls.length; i++) {
      html += '<figure><figcaption>'+poll_list.Polls[i].P_Title+'</figcaption>' +
      '<img src="'+poll_list.Polls[i].P_img+'" style="width:200px;height:200px;float: left;"></figure>';
   }

   $("#yourPolls").html(html);
   poll_list_string = JSON.stringify(poll_list);
   localStorage.setItem("StoredPollList", poll_list_string);
}

function addPoll(){
   current_polls = poll_list;
   P_Title = document.getElementById ("question").value;
   
   var sel = document.getElementById('select-native-2');
   var sv = sel.options[sel.selectedIndex].value;
   if(sv == "pie"){
      P_img = "pie.png";
   }
   else{
      P_img = "barchart.gif";
   }
   poll_list.Polls.push({P_Title: P_Title, P_img: P_img});
   poll_list_string = JSON.stringify(poll_list);
   localStorage.setItem("StoredPollList", poll_list_string);
}