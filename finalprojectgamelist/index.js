var rownum = 0;
var scores =[];
function scoreplus(){
    tocarousel();
    var f = Math.floor(Math.random(scores.length)*10);
    scores[f][0]++;
    console.log(f);
    console.log(scores[f]);
    $ ("#caroswitch").append("<img src='https://unsplash.it/200/300' style='width:720px;height:500px;  margin: 0 auto'>");
}
function tocarousel(){
   $ ("#caroswitch").html("<img src='https://unsplash.it/200/300' style='width:720px;height:500px;  margin: 0 auto'>");
   
}
console.log("righthere");
var database=firebase.database().ref();
//button executes this function
function updateDB(){
    var vote =0;
    var name = $("#name").val();
    var gamename=$("#gamename").val();
    var gamel = $("#gamelink").val();
    console.log(name + "'s game: " + gamename);
var value ={
    Score:vote,
    Name: name,
    Gamename: gamename,
    Gamelink: gamel
};
database.push(value);
arval=[0,name,rownum];
    scores.push(arval);
    rownum++;
}
database.on("child_added", function(rowData){
  var row= rowData.val();
  var vote=row.Score;
    var name=row.Name;  
    var gamename=row.Gamename;
    var gamel=row.Gamelink;
    var Key = firebase.database().ref().push().key;
var gamelist="<a href='"+gamel+"'<p>"+ gamename +"  by "+name+ " has "+ vote +" votes </p></a>";
console.log(gamelist);
var text="<div class='col-md-4'>"+"<a href='"+gamel+"'<p>"+ gamename +" by "+name+"</p></a>"+"<a href='#'<button id='"+name+"' onclick='scoreplus();' class='btn btn-default'>like</button></a></div>";
$("#gamelist").append(text);
})
