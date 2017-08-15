var rownum = 1;
var database=firebase.database().ref();
//button executes this function
function updateDB(){
    var vote =0;
    var name = $("#name").val();
    var gamename=$("#gamename").val();
    var gamel = $("#gamelink").val();
  
    console.log(name + "'s game: " + gamename);
  $("#gamelist").append("<div class='col-md-4'>"+"<a href='"+gamel+"'<p>"+ gamename +" by "+name+"</p></a>"+"<button id='like' class='btn btn-default'>Vote</button></div>");

    //Update database here
var value ={
    Score:vote,
    Name: name,
    Gamename: gamename,
    Gamelink: gamel
};
database.push(value);


database.on("child_added", function(rowData){
  var row= rowData.val();
  var vote=row.Score;
    var name=row.Name;  
    var gamename=row.Gamename;
    var gamel=row.Gamelink;
var gamelist="<a href='"+gamel+"'<p>"+ gamename +"  by "+name+ " has "+ vote +" votes </p></a>";
console.log(gamelist);
$


})
};
$('#like').click(function(){
    database.on("child_",function(rowData){
        row.Score++;
    updateDB();
    })
});