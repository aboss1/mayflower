Poll_List = localStorage.getItem("StoredPollList");

if (Poll_List == null) {
   var poll_list = {
      listName: "Pre-populated Polls",
      Polls: [
      {
         P_Title: "Hannah's Writing vs Marnie's Music",
         P_img: "pie.png",
      },
      {
         P_Title: "Couple Most Likely to Couple",
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
      html += '<div class="wrapper">'+
             '<img src="'+poll_list.Polls[i].P_img+'"/>'+
             '<span class="caption">'+poll_list.Polls[i].P_Title+'</span></div>';
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