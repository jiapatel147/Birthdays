function preload() {

}
function setup() {
canvas= createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
filter_color="";
}
function draw() {
image(video,0,0,640,480);
tint(filter_color);
}
function take_snapshot() {
save('Jia.png');
}
function apply_filter() {
filter_color= document.getElementById("color").value;
}