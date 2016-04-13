Activity_List = localStorage.getItem("StoredActivityList");

if (Activity_List == null) {
	var act_list = {
		listName: "Doesn't Matter",
		Activities: [
		{
			E_Title: "Coffee",
			E_Description: "Let's grab coffee at the Starbucks at the Barton Creek Square mall.  See you there at 5 PM! - Andrew",
			E_Date: "2016-04-25",
			E_Time: "5:00:PM",
			E_Join: false,
			E_id: 1,
		},
		{
			E_Title: "Dinner",
			E_Description: "I've made a reservation for six at Uchiko.  The address is 4200 N Lamar Blvd, Austin, TX 78756.  See you there! - Jess",
			E_Date: "2016-04-29",
			E_Time: "6:00:PM",
			E_Join: true,
			E_id: 2,
		}]
	}
}
else {
	load_Activity_List = localStorage.getItem("StoredActivityList");
	var act_list = JSON.parse(load_Activity_List);
}

act_list_string = JSON.stringify(act_list);
localStorage.setItem("StoredActivityList", act_list_string);

function displayActivities() {
	var html = '<div data-role="tabs" id="tabs"><div data-role="navbar" id = "tabs_titles"><ul id = "tabz">';
	for (var i = 0; i < act_list.Activities.length; i++) {
		html += '<li><a href="#'+act_list.Activities[i].E_id+'">'+act_list.Activities[i].E_Title+'</a></li>';
	}
	html += '</ul></div>'
	for (var i = 0; i < act_list.Activities.length; i++) {
		html += '<div id ="'+act_list.Activities[i].E_id+'" class="ui-body-d ui-content"><p>'+act_list.Activities[i].E_Description+'</p>';
		if (act_list.Activities[i].E_Join) {
			AttendingNum = "Attending"+act_list.Activities[i].E_id;
			new_html = "<button onclick = \"join_event('Attending2')\" id = \"Attending2Button\">Join</button><p>Attending:<div id=\"Attending2\">5</div></p>";
			html += new_html;
		}
		html += "</div>";
	}
	html += "</div>";
	$("#Activity_table").html(html);
	act_list_string = JSON.stringify(act_list);
	localStorage.setItem("StoredActivityList", act_list_string);
}

function Add_Activity() {
	current_activities = act_list;
	E_Title = document.getElementById ("name").value;
	E_Description = document.getElementById("eventDescription").value;
	E_Date = document.getElementById("date").value;
	E_Time = document.getElementById("time").value;
	E_Join = $("#joinbutton").is(":checked");
	E_id = act_list.Activities.length + 1;
	act_list.Activities.push({E_Title: E_Title, E_Description: E_Description, E_Date: E_Date, E_Time: E_Time, E_Join: E_Join,E_id: E_id});
	act_list_string = JSON.stringify(act_list);
	localStorage.setItem("StoredActivityList", act_list_string);
}
