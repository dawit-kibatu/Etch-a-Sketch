const container=document.querySelector("#container");
const sizeButton=document.querySelector("#sizeButton");
container.style.cssText="display:flex; justify-content:center;width:960px; margin:auto;";
function makeGrid(n){
    for(let i=0;i<n;i++){
    const div=document.createElement("div");
    for(let j=0;j<n;j++){
    const grid=document.createElement("div");
    div.style.cssText="width:80%; height:80%;padding:0px;margin:0px;"
    grid.style.cssText="background-color: white;border:solid black; width:10%; height:10%; padding:50%;";
    div.appendChild(grid);
    grid.addEventListener("mouseenter",handleMouseEnter)
}
container.appendChild(div)
}
function handleMouseEnter(event){
    let backgroundColor=getRandomColor()
    event.target.style.cssText=`background-color:${backgroundColor};border:solid black; width:10%; height:10%; padding:50%;`
}
}
makeGrid(16);

function removeGrids(){
    container.innerHTML=""
}
sizeButton.addEventListener("click",handleClick)
function handleClick(){
    let size=prompt("Enter the size you want.(1-100)")
    if(size>=1 && size<=100){
         removeGrids();
         makeGrid(size);
    }
    else if(size<1 || size>100){
        alert("Please input a valid number(1-100)")
    }
    else{
        alert("Enter a number(don't use your words)")
    }
}
function getRandomColor(){
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}