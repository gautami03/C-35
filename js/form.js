class Form{
constructor(){

}
display(){
 var title=createElement("h1");
 var input=createInput("Enter your name");
 var button=createButton("Start");
 var greeting=createElement("h3");
 title.html("Car Racing Game");
 
 title.position(130,50);
 input.position(130,150);
 button.position(150,180);
 button.mousePressed(function(){
    input.hide();
    button.hide();
    var name=input.value();
    playerCount++;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("Hello "+name);
    greeting.position(130,160);
 });
}




}