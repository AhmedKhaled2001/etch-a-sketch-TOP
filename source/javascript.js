const contentDiv = document.querySelector("#grid");

let gridSize = 25;
let gridBoxList = [];
let rowList = [];

let gridBoxHoveredList = [];
buildGrid(gridSize);
function buildGrid(gridSize)
{
    for(let i = 0; i < gridSize; i++)
    {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        contentDiv.appendChild(newRow);
        rowList.push(newRow);
        for(let j = 0; j < gridSize; j++)
        {
            let newGrid = document.createElement("div");
            newGrid.classList.add("flex-items");
            newGrid.setAttribute("id", "grid-box");
            newRow.appendChild(newGrid);
            gridBoxList.push(newGrid);
    
    
        }
    }
}
function destroyGrid()
{
    for(gridBox of gridBoxList)
    {
        gridBox.remove();
    }
    for(row of rowList)
    {
        row.remove();
    }
    rowList = [];
    gridBoxList = [];
    gridBoxHoveredList = [];
}
const buttons = document.querySelectorAll("button");

for(let button of buttons)
{
    if(button.id == "clear")
    {
        button.addEventListener('click', (e)=>{
            for(gridBox of gridBoxHoveredList)
            {
                gridBox.style.backgroundColor = "rgb(24, 28, 28)";
                gridBox.style.removeProperty("opacity");
            }
        });
    }
    else
    {
        button.addEventListener('click', (e)=>{
            const newSize = Math.min(parseInt(prompt("New Grid Size (100 Max!)")), 100);
            destroyGrid();
            buildGrid(newSize);
        });
    }
}
contentDiv.addEventListener('mouseover', function(event)
{
    const target = event.target;
    if(target.id == "grid-box")
    {
        //target.classList.add("hovered");
        const randRed = Math.random() * 255;
        const randGreen = Math.random() * 255;
        const randBlue = Math.random() * 255;
        target.style.backgroundColor = `rgb(${randRed},${randGreen},${randBlue})`;
        const opacityNumber = target.style.opacity || 0;
        target.style.opacity = `${Math.min(1, (parseFloat(opacityNumber) )+0.1)}`;
        console.log(`opacity : ${target.style.opacity}`);
        gridBoxHoveredList.push(target);

    }
});
/*
contentDiv.addEventListener('mouseout', function(event)
{
    const target = event.target;
    target.classList.remove("hovered");
});*/