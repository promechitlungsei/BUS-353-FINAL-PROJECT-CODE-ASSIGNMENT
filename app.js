Titanium.UI.setBackgroundColor('#d2b45b');

var MainLoginWin = Titanium.UI.createWindow({							//START OF LOGIN PAGE CODE
	text: 'Login page',
	backgroundColor: '#d2b45b'
});

var LogintitleView = Ti.UI.createView({										
	width: '100%',
	height: '12%',
	top:'0%',
	backgroundColor: '#d2b45b',
});

var LogintitleLabel = Ti.UI.createLabel({
	text:'Welcome to Vandal Study!!',
	left: '14%',
	color: 'black',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'50sp',
			fontWeight:'bold',
			fontColor:'white',
	}									
});

var LoginAccountView = Ti.UI.createView({								
	height: '15%',
	width: '100%',
	top:'20%',
	backgroundColor: 'black',
});

var LoginPasswordView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'33%',
	backgroundColor: 'black',
});

var LoginAccountLabel = Ti.UI.createLabel({
	text:'UserName',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'35sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var LoginPasswordLabel = Ti.UI.createLabel({
	text:'Password',
	left: '8%',
	textAlign:'Center',
	bottom: '25%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'35sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var LoginTextSubWindow = Ti.UI.createView({
	top: '22%',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '40%'
});

var LogintextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL, 
 		height:Ti.UI.FILL,
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var LoginTextSubWindow2 = Ti.UI.createView({
	top: '33%',
	 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '40%'
});

var LogintextField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL,
		height:Ti.UI.FILL,	
			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var LogintextFieldSubmitButtonView = Ti.UI.createView({			
	backgroundColor: '#d2b45b',
	height:'15%',
	width: '100%',
	bottom: '41%',
});

var LogintextFieldSubmitButton = Ti.UI.createButton({
	title:'Login',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold',
		},
		backgroundColor:'white'
});

MainLoginWin.open();
MainLoginWin.add(LogintitleView);
MainLoginWin.add(LoginAccountView);
MainLoginWin.add(LoginPasswordView);
LoginAccountView.add(LoginAccountLabel);
LoginPasswordView.add(LoginPasswordLabel);
LogintitleView.add(LogintitleLabel);
MainLoginWin.add(LoginTextSubWindow);
LoginTextSubWindow.add(LogintextField);
MainLoginWin.add(LoginTextSubWindow2);
LoginTextSubWindow2.add(LogintextField2);
MainLoginWin.add(LogintextFieldSubmitButtonView);
LogintextFieldSubmitButtonView.add(LogintextFieldSubmitButton);
																	// END of LOGIN PAGE CODE

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Study Buddy thingy',
    backgroundColor:'#d2b45b'
});
var FindTutorWindow = Ti.UI.createWindow({				// these are the windows for child pages
	text:'FindTutor',
	backgroundColor:'#fff'
});
var MyGroupsWindow = Ti.UI.createWindow({
	text:'My Groups',
	backgroundColor:'#fff'
});
var FindGroupSearchWindow = Ti.UI.createWindow({
	text:'Find Groups/Tutor',
	backgroundColor:'#fff'
});

var FindGroupWindow = Ti.UI.createWindow({				//Window for find group page after searching Find Group
	text:'Find Groups/Tutor Results',
	backgroundColor:'#fff'
});

var CreateGroupWindow = Ti.UI.createWindow({
	text:'Create Group',
	backgroundColor:'#fff'
});

var FindTutorWindowReturnView = Ti.UI.createView({
	backgroundColor: 'black',
	height:'8%',
	width: '100%',
	bottom: 0,
});

var FindTutorWindowReturnButton = Ti.UI.createButton({
		title:'Home',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		right: '36%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

var MyGroupsWindowReturnView = Ti.UI.createView({
	backgroundColor: 'black',
	height:'8%',
	width: '100%',
	bottom: 0,
});

var MyGroupsWindowReturnButton = Ti.UI.createButton({
		title:'Home',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		right: '36%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

var CreateGroupWindowReturnView = Ti.UI.createView({
	backgroundColor: 'black',
	height:'8%',
	width: '100%',
	bottom: 0,
});

var CreateGroupWindowReturnButton = Ti.UI.createButton({
		title:'Home',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		right: '36%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

var FindGroupWindowReturnView = Ti.UI.createView({
	backgroundColor: 'black',
	height:'8%',
	width: '100%',
	bottom: 0,
});

var FindGroupWindowReturnButton = Ti.UI.createButton({
		title:'Home',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		right: '36%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});




var CreateGroupSubWindow = Ti.UI.createWindow({			//Create Groups sub window to actually make a group
	text:'Create Group',
	backgroundColor:'black'
});
var CreateGroupTitleViewSubWindow = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var CreateGroupTitleLabelSubWindow = Ti.UI.createLabel({
	text:'Create Group 1',
	textAlign:'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'65sp',
		fontWeight:'bold',
	}
});

var CreateGrouptextSubWindow = Ti.UI.createView({
	top: '20%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});


var CreateGrouptextFieldSubmitButtonView = Ti.UI.createView({			
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
	bottom: 0,
});

var CreateGrouptextFieldSubmitButton = Ti.UI.createButton({
	title:'Submit your group name',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});


var CreateGroupAccountView = Ti.UI.createView({								
	height: '15%',
	width: '100%',
	top:'20%',
	backgroundColor: '#d2b45b',
});

var CreateGroupClassView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'33%',
	backgroundColor: '#d2b45b',
});

var CreateGroupAccountLabel = Ti.UI.createLabel({
	text:'Create Group Name',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	color: 'white',
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'white'
	}									
});

var CreateGroupClassLabel = Ti.UI.createLabel({
	text:'Input Class/Subject',
	left: '8%',
	textAlign:'Center',
	bottom: '25%',
	height: Ti.UI.FILL,
	color: 'white',
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}					
				
});

var CreateGroupTextSubWindow = Ti.UI.createView({
	top: '20%',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var CreateGrouptextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL, 
 		height:Ti.UI.FILL,
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var CreateGroupTextSubWindow2 = Ti.UI.createView({
	top: '34%',
	 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var CreateGrouptextField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL,
		height:Ti.UI.FILL,	
			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});				



var CreateGroupAddMemberView = Ti.UI.createView({								
	height: '15%',
	width: '100%',
	top:'46%',
	backgroundColor: '#d2b45b',
});

var CreateGroupAddDescriptionView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'59%',
	backgroundColor: '#d2b45b',
});

var CreateGroupAddMemberLabel = Ti.UI.createLabel({
	text:'Add Members',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	color: 'white',
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var CreateGroupAddDescriptionLabel = Ti.UI.createLabel({
	text:'Add Description',
	left: '8%',
	textAlign:'Center',
	bottom: '25%',
	height: Ti.UI.FILL,
	color: 'white',
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var CreateGroupTextSubWindow3 = Ti.UI.createView({
	top: '48%',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var CreateGrouptextField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL, 
 		height:Ti.UI.FILL,
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var CreateGroupTextSubWindow4 = Ti.UI.createView({
	top: '62%',
	 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var CreateGrouptextField4 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL,
		height:Ti.UI.FILL,	
			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});			
									//END OF CREATE GROUP 1 OPTION LIST
									
CreateGroupSubWindow.add(CreateGroupTitleViewSubWindow);				// adding stuff for CreateGroupSubWindow
CreateGroupTitleViewSubWindow.add(CreateGroupTitleLabelSubWindow);
CreateGroupSubWindow.add(CreateGrouptextFieldSubmitButtonView);
CreateGrouptextFieldSubmitButtonView.add(CreateGrouptextFieldSubmitButton);		
CreateGroupSubWindow.add(CreateGroupAccountView);
CreateGroupSubWindow.add(CreateGroupClassView);
CreateGroupAccountView.add(CreateGroupAccountLabel);
CreateGroupClassView.add(CreateGroupClassLabel);
CreateGroupSubWindow.add(CreateGroupAddMemberView);
CreateGroupAddMemberView.add(CreateGroupAddMemberLabel);
CreateGroupAddDescriptionView.add(CreateGroupAddDescriptionLabel);
CreateGroupSubWindow.add(CreateGroupAddDescriptionView);
CreateGroupSubWindow.add(CreateGroupTextSubWindow);
CreateGroupTextSubWindow.add(CreateGrouptextField);
CreateGroupSubWindow.add(CreateGroupTextSubWindow2);
CreateGroupTextSubWindow2.add(CreateGrouptextField2);
CreateGroupSubWindow.add(CreateGroupTextSubWindow3);
CreateGroupTextSubWindow3.add(CreateGrouptextField3);
CreateGroupSubWindow.add(CreateGroupTextSubWindow4);
CreateGroupTextSubWindow4.add(CreateGrouptextField4);

															//START OF GROUP CREATION SUCCESS PAGE

var CreateGroupSuccessWindow = Ti.UI.createWindow ({
		text: 'Login page',
	backgroundColor: '#d2b45b'
});				

var CreateGroupSuccessView = Ti.UI.createView ({
		height: '15%',
	width: '100%',
	top:'15%',
	backgroundColor: '#d2b45b',
});



var CreateGroupSuccessView2 = Ti.UI.createView ({
		height: '15%',
	width: '100%',
	bottom:'45%',
	backgroundColor: '#d2b45b',
});		

var CreateGroupSuccessLabel = Ti.UI.createLabel({
		text:'Group  ___  has been created!!',
	textAlign:'center',
	height:Ti.UI.FILL,
	color: 'black',
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var CreateGroupSuccessButton = Ti.UI.createButton	({
		title:'Return to Home',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});

CreateGroupSuccessWindow.add(CreateGroupSuccessView);							
CreateGroupSuccessView.add(CreateGroupSuccessButton);
CreateGroupSuccessWindow.add(CreateGroupSuccessView2);
CreateGroupSuccessView2.add(CreateGroupSuccessLabel);

CreateGroupSuccessButton.addEventListener('click', function(e){		//event for button to Home
	CreateGroupSuccessWindow.close();
	CreateGroupSubWindow.close();
	CreateGroupWindow.close();
});
		

var FindGroupSubWindow = Ti.UI.createWindow({			//Find Groups sub window to actually find your group
	text:'Create Group',
	backgroundColor:'black'
});
var FindGroupTitleViewSubWindow = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var FindGroupTitleLabelSubWindow = Ti.UI.createLabel({
	text:'Group 1',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});		

var FindGroupSummaryView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'20%',
	backgroundColor: 'black',
});

var FindGroupSummaryLabel = Ti.UI.createLabel({
	text:'Group 1 is a team that focuses on Human Resources, we mainly study Bus 359 and Bus 412, we currently have 12 members and our schedule is very flexible, we also have two tutors, Rick and Sarah who mainly help during the weekends, the group is open so go ahead and join us if you would like',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'20sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});													

var FindGroupDecisionView = Ti.UI.createView({										
	height: '9%',
	width: '100%',
	top:'20%',
	backgroundColor: 'black',
});

var FindGroupDecisionLabel = Ti.UI.createLabel({
	text:'Would you like to join this group?\n Yes \n No',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'35sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});



var FindGrouptextFieldReturnButtonView = Ti.UI.createView({			
	backgroundColor: '#d2b45b',
	height:'15%',
	width: '100%',
	bottom: '41%',
});

var FindGrouptextFieldReturnButton = Ti.UI.createButton({
		title:'Submit',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		right: '36%',
		bottom: 0,
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});


FindGroupSubWindow.add(FindGroupTitleViewSubWindow);					//adding stuff for Find Group Sub Window
FindGroupTitleViewSubWindow.add(FindGroupTitleLabelSubWindow);
FindGroupSubWindow.add(FindGrouptextFieldReturnButtonView);
FindGrouptextFieldReturnButtonView.add(FindGrouptextFieldReturnButton);
FindGroupSubWindow.add(FindGroupDecisionView);
FindGroupDecisionView.add(FindGroupDecisionLabel);
FindGroupSubWindow.add(FindGroupSummaryView);
FindGroupSummaryView.add(FindGroupSummaryLabel);


																// END OF FIND GROUP SUB WINDOW CODE




var DropboxView = Ti.UI.createView({
	height: '3%',
	width: '19%',
	left: '5%',
	top: '4%',
	backgroundColor: 'white',
});

var DropboxLabel = Ti.UI.createLabel({
	text:'Dropbox',
	left: '0%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'15sp',
			fontWeight:'bold',
			fontColor:'black'
	}			
});

//var DropBoxRow = Ti.UI.createTableViewRow({
//	
//);
//
//var DropboxLabelButton = Ti.UI.createLabel({
//	text: 'DropBox Test Text',
//	font: {
//		fontSize: '10sp',
//		fontWeight: 'bold',
//	},
//		minimumFontSize: '8sp',
//		textAlign: 'left',
//		top: '2',
//		left: '10',
//		height: '20'
//});
//
//var theSnippet = Ti.UI.createLabel ({
//	text: 'bla bla blabla bla bro',
//});

//var SecondRow = Ti.UI.createTableViewRow({
//	
//});
												//	END of DROPBOX CODE
												
//Cloud.Chats.create({												//START OF CHATGROUP CODE, BUT BECAUSE OF CLOUD I CANNOT UTILIZE THIS CODE WITHOUT OBTAINING PERMISSIONS TO ADD IN MY TIAPP.XML
//    to_ids: ids.join(','),												//THIS CODE SENDS A MESSAGE
//    message: 'Good morning'
//}, function (e) {
//    if (e.success) {
//        for (var i = 0; i < e.chats.length; i++) {
//            var chat = e.chats[i];
//            alert('Success:\n' +
//                'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' +
//                'Updated: ' + chat.updated_at + '\n' +
//                'Message: ' + chat.message);
//        }
//    } else {
//        alert('Error:\n' +
//            ((e.error && e.message) || JSON.stringify(e)));
//    }
//});


//Cloud.Chats.query({
//    participate_ids: ids.join(','),								//THIS CODE QUERIES RESPONSES FROM OTHER USERS
//    where: {
//        updated_at: { '$gt': last_update_time }
//    }
//}, function (e) {
//    if (e.success) {
//        for (var i = 0; i < e.chats.length; i++) {
//            var chat = e.chats[i];
//            alert('Success:\n' +
//                'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' +
//                'Updated: ' + chat.updated_at + '\n' +
//                'Message: ' + chat.message);
//        }
//    } else {
//        alert('Error:\n' +
//           ((e.error && e.message) || JSON.stringify(e)));
 //   }
//});


//var titleView = Ti.UI.createView({									//THIS SECTION LISTS THE RESPONSES AND IF AN ERROR COMES UP THEN AN ERROR MESSAGE APPEARS
//	height: '10%',
//	width: '7Cloud.Chats.getChatGroups(function (e) {
//    if (e.success) {
 //       for (var i = 0; i < e.chats.length; i++) {
 //           var group = e.chat_groups[i];
 //           alert('Success:\n' +
 //               'id: ' + group.id + '\n' +
 //               'created_at: ' + group.created_at + '\n' +
 //               'number of users: ' + group.participate_users.length);
 //       }
 //   } else {
 //       alert('Error:\n' +
 //           ((e.error && e.message) || JSON.stringify(e)));
 //   }
//});0%',
//	top:'0%',
//	left: 0,
//	backgroundColor: 'black',
//});


//Cloud.Chats.getChatGroups(function (e) {
//    if (e.success) {
//        for (var i = 0; i < e.chats.length; i++) {
//            var group = e.chat_groups[i];
 //           alert('Success:\n' +
 //               'id: ' + group.id + '\n' +
 //               'created_at: ' + group.created_at + '\n' +
  //              'number of users: ' + group.participate_users.length);
 //       }
 //   } else {
 //       alert('Error:\n' +
 //           ((e.error && e.message) || JSON.stringify(e)));
 //   }
//});
																					//END OF CHAT ROOM CODE

var titleLabel = Ti.UI.createLabel({
	text:'Vandal Study',
	left: '45%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'50sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var LogOutView = Ti.UI.createView({
	height: '10%',
	width: '30%',
	right: 0,
	top:'0%',
	backgroundColor: 'black',
});

var LogOutButton = Ti.UI.createButton({
		title:'Logout',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'90%',
		right: 0,
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'30sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

var FindTutorTitleView = Ti.UI.createView({					// START OF FIND TUTOR CODE
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var FindTutorTitleLabel = Ti.UI.createLabel({
	text:'Find Tutor',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});


var FindTutorAccountView = Ti.UI.createView({								
	height: '15%',
	width: '100%',
	top:'20%',
	backgroundColor: 'black',
});

var FindTutorClassView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'33%',
	backgroundColor: 'black',
});

var FindTutorAccountLabel = Ti.UI.createLabel({
	text:'Find Tutor by Name',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var FindTutorClassLabel = Ti.UI.createLabel({
	text:'Find Tutor by Class',
	left: '8%',
	textAlign:'Center',
	bottom: '25%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var FindTutorTextSubWindow = Ti.UI.createView({
	top: '20%',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var FindTutortextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL, 
 		height:Ti.UI.FILL,
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var FindTutorTextSubWindow2 = Ti.UI.createView({
	top: '34%',
	 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var FindTutortextField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL,
		height:Ti.UI.FILL,	
			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var FindTutortextFieldSubmitButtonView = Ti.UI.createView({			
	backgroundColor: '#d2b45b',
	height:'15%',
	width: '100%',
	bottom: '40%',
});

var FindTutortextFieldSubmitButton = Ti.UI.createButton({
	title:'Search',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

FindTutorWindow.add(FindTutorTitleView);		
FindTutorWindow.add(FindTutorAccountView);
FindTutorWindow.add(FindTutorClassView);
FindTutorAccountView.add(FindTutorAccountLabel);
FindTutorClassView.add(FindTutorClassLabel);
FindTutorWindow.add(FindTutorTextSubWindow);
FindTutorTextSubWindow.add(FindTutortextField);
FindTutorWindow.add(FindTutorTextSubWindow2);
FindTutorTextSubWindow2.add(FindTutortextField2);
FindTutorWindow.add(FindTutortextFieldSubmitButtonView);
FindTutortextFieldSubmitButtonView.add(FindTutortextFieldSubmitButton);		// Find Tutor page's display, it should look like the schedule from vandal web

																		// START of MY GROUPS LIST
var MyGroupsTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});
var MyGroupsTitleLabel = Ti.UI.createLabel({
	text:'My Groups',
	color: '#d2b45b',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var MyGroupChoice1View = Ti.UI.createView({			// Code to create different group windows in main create group page
	top: '15%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var MyGroupChoice1Button = Ti.UI.createButton({
	title:'My Group 1',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var MyGroupChoice2View = Ti.UI.createView({
	top: '30%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var MyGroupChoice2Button = Ti.UI.createButton({
	title:'My Group 2',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var MyGroupChoice3View = Ti.UI.createView({
	top: '45%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var MyGroupChoice3Button = Ti.UI.createButton({
	title:'My Group 3',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var MyGroupChoice4View = Ti.UI.createView({
	top: '60%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var MyGroupChoice4Button = Ti.UI.createButton({
	title:'My Group 4',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});

var MyGroupSubWindow = Ti.UI.createWindow({			//Find Groups sub window to actually find your group
	text:'My Group Chat Page',
	backgroundColor:'white'
});

var MyGroupSubTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var MyGroupSubTitleLabel = Ti.UI.createLabel({
	text:'Group 1 Chat Room',
	color: '#d2b45b',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var MyGroupChatTextField1 = Ti.UI.createTextField({
  color: 'black',
  top: '17%', 
  left: '5%',
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});






MyGroupSubWindow.add(MyGroupSubTitleView);				//	MY GROUPS SUB PAGE ADD LIST VIEWS
MyGroupSubTitleView.add(MyGroupSubTitleLabel);
MyGroupSubWindow.add(MyGroupChatTextField1);

	

														// END of MY GROUPS SUB PAGE LIST

var FindGroupSearchTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});
var FindGroupSearchTitleLabel = Ti.UI.createLabel({
	text:'Find Groups',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});


var FindGroupSearchAccountView = Ti.UI.createView({								
	height: '15%',
	width: '100%',
	top:'20%',
	backgroundColor: 'black',
});

var FindGroupSearchClassView = Ti.UI.createView({										
	height: '15%',
	width: '100%',
	top:'33%',
	backgroundColor: 'black',
});

var FindGroupSearchAccountLabel = Ti.UI.createLabel({
	text:'Find Group by Name',
	left: '8%',
	bottom: '25%',
	textAlign:'Center',
	height: Ti.UI.FILL,
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var FindGroupSearchClassLabel = Ti.UI.createLabel({
	text:'Find Group by Class',
	left: '8%',
	textAlign:'Center',
	bottom: '25%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}									
});

var FindGroupSearchTextSubWindow = Ti.UI.createView({
	top: '20%',
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var FindGroupSearchtextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL, 
 		height:Ti.UI.FILL,
 			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var FindGroupSearchTextSubWindow2 = Ti.UI.createView({
	top: '34%',
	 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	 borderRadius: 25,
	backgroundColor: 'white',
	height:'8%',
	width: '40%',
	left: '55%'
});

var FindGroupSearchtextField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: 'black',
  borderRadius: 25,
  top: '35%', 
  left: '5%',
  width: Ti.UI.FILL,
		height:Ti.UI.FILL,	
			font:{
			fontSize:'30sp',
			fontWeight:'bold',
			fontColor:'black'
	}						
});

var FindGroupSearchtextFieldSubmitButtonView = Ti.UI.createView({			
	backgroundColor: '#d2b45b',
	height:'15%',
	width: '100%',
	bottom: '40%',
});

var FindGroupSearchtextFieldSubmitButton = Ti.UI.createButton({
	title: 'Search',		
	color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'30%',
		borderRadius: 25,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold',
		},
		backgroundColor:'black'
});

FindGroupSearchWindow.add(FindGroupSearchTitleView);
FindGroupSearchTitleView.add(FindGroupSearchTitleLabel);
FindGroupSearchWindow.add(FindGroupSearchTitleView);		
FindGroupSearchWindow.add(FindGroupSearchAccountView);
FindGroupSearchWindow.add(FindGroupSearchClassView);
FindGroupSearchAccountView.add(FindGroupSearchAccountLabel);
FindGroupSearchClassView.add(FindGroupSearchClassLabel);
FindGroupSearchWindow.add(FindGroupSearchTextSubWindow);
FindGroupSearchTextSubWindow.add(FindGroupSearchtextField);
FindGroupSearchWindow.add(FindGroupSearchTextSubWindow2);
FindGroupSearchTextSubWindow2.add(FindGroupSearchtextField2);
FindGroupSearchWindow.add(FindGroupSearchtextFieldSubmitButtonView);
FindGroupSearchtextFieldSubmitButtonView.add(FindGroupSearchtextFieldSubmitButton);		// Find Tutor page's display, it should look like the schedule from vandal web

var FindGroupTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});
var FindGroupTitleLabel = Ti.UI.createLabel({
	text:'Results',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});


var FindGroupChoice1View = Ti.UI.createView({			// Code to create different group windows in main create group page
	top: '15%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var FindGroupChoice1Button = Ti.UI.createButton({
	title:'Group 1				open',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var FindGroupChoice2View = Ti.UI.createView({
	top: '30%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var FindGroupChoice2Button = Ti.UI.createButton({
	title:'Group 2				closed',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var FindGroupChoice3View = Ti.UI.createView({
	top: '45%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var FindGroupChoice3Button = Ti.UI.createButton({
	title:'Group 3				closed',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var FindGroupChoice4View = Ti.UI.createView({
	top: '60%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var FindGroupChoice4Button = Ti.UI.createButton({
	title:'Group 4				closed',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});

																//END OF FIND GROUP LIST

var CreateGroupTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});
var CreateGroupTitleLabel = Ti.UI.createLabel({
	text:'Create Group',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var CreateGroupChoice1View = Ti.UI.createView({			// Code to create different group windows in main create group page
	top: '15%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var CreateGroupChoice1Button = Ti.UI.createButton({
	title:'Create Group 1',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var CreateGroupChoice2View = Ti.UI.createView({
	top: '30%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var CreateGroupChoice2Button = Ti.UI.createButton({
	title:'Create Group 2',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var CreateGroupChoice3View = Ti.UI.createView({
	top: '45%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var CreateGroupChoice3Button = Ti.UI.createButton({
	title:'Create Group 3',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});
var CreateGroupChoice4View = Ti.UI.createView({
	top: '60%',
	backgroundColor: 'black',
	height:'15%',
	width: '100%',
});

var CreateGroupChoice4Button = Ti.UI.createButton({
	title:'Create Group 4',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'white'
});



var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});

var HomeScrnPic = Ti.UI.createView({
	height:'20%',
	width:'45%',
	left:'24%',
	bottom: '2%',
	borderRadius: 20,
	backgroundImage:'/images/UofI.png'
});

var FindTutorView = Ti.UI.createView({		
	height: '15%',
	width: '20%',
	left: '37%',
	top: '20%'
});

var MyGroupsView = Ti.UI.createView({
	height: '15%',
	width: '20%',
	left: '58%',
	top: '40%'
});
var FindGroupView = Ti.UI.createView({
	height: '15%',
	width: '20%',
	left: '37%',
	top: '60%'
});
var CreateGroupView = Ti.UI.createView({
	height: '15%',
	width: '20%',
	left: '18%',
	top: '40%'
});
var blablaView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	


var FindTutorButton = Ti.UI.createButton({			//Buttons
	title: 'Find Tutor',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});


var MyGroupsButton = Ti.UI.createButton({
	title:'My Groups',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var FindGroupButton = Ti.UI.createButton({
	title:'Find Groups',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var CreateGroupButton = Ti.UI.createButton({
	title:'Create Group',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		borderRadius: 10,
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});

LogintextFieldSubmitButton.addEventListener('click', function(e){			//Event Listeners
	win1.open();
});

MyGroupsButton.addEventListener('click', function(e){			//Event Listeners
	MyGroupsWindow.open();
});
FindTutorButton.addEventListener('click', function(e){

	FindTutorWindow.open();
});
FindGroupButton.addEventListener('click', function(e){

	FindGroupSearchWindow.open();
});

CreateGroupButton.addEventListener('click', function(e){

	CreateGroupWindow.open();
});


CreateGroupChoice1Button.addEventListener('click', function(e){		//event for button to Create Group sub page

	CreateGroupSubWindow.open();
});

CreateGrouptextFieldSubmitButton.addEventListener('click', function(e){		//event for button to Create Group sub page

	CreateGroupSuccessWindow.open();
});

FindGroupChoice1Button.addEventListener('click', function(e){		//event for button to Create Group sub page

	FindGroupSubWindow.open();
});

MyGroupChoice1Button.addEventListener('click', function(e){		//event for button to Create Group sub page

	MyGroupSubWindow.open();
});

LogOutButton.addEventListener('click', function(e){		//event for button to log out

	win1.close();
});

FindTutorWindowReturnButton.addEventListener('click', function(e){		//event for button to log out

	FindTutorWindow.close();
});

MyGroupsWindowReturnButton.addEventListener('click', function(e){		//event for button to log out

	MyGroupsWindow.close();
});

FindGroupWindowReturnButton.addEventListener('click', function(e){		//event for button to log out

	FindGroupSearchWindow.close();
});

CreateGroupWindowReturnButton.addEventListener('click', function(e){		//event for button to log out

	CreateGroupWindow.close();
});

FindGroupSearchtextFieldSubmitButton.addEventListener('click', function(e){		//event for button to get FIND GROUP RESULTS
	FindGroupWindow.open();
});

win1.add(titleView);
win1.add(DropboxView);
titleView.add(titleLabel);
win1.add(MyGroupsView);
win1.add(FindTutorView);
win1.add(FindGroupView);
win1.add(CreateGroupView);
win1.add(blablaView);
win1.add(HomeScrnPic);
win1.add(ContactList);

win1.add(LogOutView);								// Home Buttons For all pages
LogOutView.add(LogOutButton);
FindTutorWindow.add(FindTutorWindowReturnView);
FindTutorWindowReturnView.add(FindTutorWindowReturnButton);
MyGroupsWindow.add(MyGroupsWindowReturnView);
MyGroupsWindowReturnView.add(MyGroupsWindowReturnButton);
FindGroupSearchWindow.add(FindGroupWindowReturnView);
FindGroupWindowReturnView.add(FindGroupWindowReturnButton);
CreateGroupWindow.add(CreateGroupWindowReturnView);
CreateGroupWindowReturnView.add(CreateGroupWindowReturnButton);




MyGroupsWindow.add(MyGroupsTitleView);				//	MY GROUPS PAGE ADD LIST VIEWS
MyGroupsWindow.add(MyGroupChoice1View);
MyGroupsWindow.add(MyGroupChoice2View);
MyGroupsWindow.add(MyGroupChoice3View);
MyGroupsWindow.add(MyGroupChoice4View);

MyGroupChoice1View.add(MyGroupChoice1Button);
MyGroupChoice2View.add(MyGroupChoice2Button);
MyGroupChoice3View.add(MyGroupChoice3Button);
MyGroupChoice4View.add(MyGroupChoice4Button);





CreateGroupWindow.add(CreateGroupTitleView);			// add your create group buttons and windows for create group page here
CreateGroupWindow.add(CreateGroupChoice1View);
CreateGroupWindow.add(CreateGroupChoice2View);
CreateGroupWindow.add(CreateGroupChoice3View);
CreateGroupWindow.add(CreateGroupChoice4View);

CreateGroupTitleView.add(CreateGroupTitleLabel);				// create group buttons
CreateGroupChoice1View.add(CreateGroupChoice1Button);
CreateGroupChoice2View.add(CreateGroupChoice2Button);
CreateGroupChoice3View.add(CreateGroupChoice3Button);
CreateGroupChoice4View.add(CreateGroupChoice4Button);


FindGroupTitleView.add(FindGroupTitleView);			// add your find group buttons and windows for create group page here
FindGroupWindow.add(FindGroupChoice1View);
FindGroupWindow.add(FindGroupChoice2View);
FindGroupWindow.add(FindGroupChoice3View);
FindGroupWindow.add(FindGroupChoice4View);

FindGroupWindow.add(FindGroupTitleView);			// add your find group buttons to sub page
FindGroupChoice1View.add(FindGroupChoice1Button);
FindGroupChoice2View.add(FindGroupChoice2Button);
FindGroupChoice3View.add(FindGroupChoice3Button);
FindGroupChoice4View.add(FindGroupChoice4Button);


DropboxView.add(DropboxLabel);


MyGroupsView.add(MyGroupsButton);
FindTutorView.add(FindTutorButton);
FindGroupView.add(FindGroupButton);
CreateGroupView.add(CreateGroupButton);


MyGroupsTitleView.add(MyGroupsTitleLabel);
FindTutorTitleView.add(FindTutorTitleLabel);
FindGroupTitleView.add(FindGroupTitleLabel);

