
// selectors 
let container = document.getElementById("container")
let sec = document.querySelector("section")
let btn = document.getElementById("box")
let slider = document.getElementById("slider")
let div = document.getElementsByClassName("grid-el")
let  boxes = container.querySelectorAll(".grid-el")

// grid lines visibility 

btn.addEventListener("click",showGridLines)
function showGridLines(){
    if (btn.checked == true ){
        container.style.gap = "1px";

    }
    else {
        container.style.gap = "0px";
    }
    
}
// resizing grid 
function gridSizeUserDefined(e) {
    let gridValue = e.target.valueAsNumber;
    gridSetDimensions(gridValue);
    
}
gridSetDimensions(16);


slider.addEventListener("change", gridSizeUserDefined)



function gridSetDimensions(gridValue) {
    container.textContent = '';
    for (i=0; i < (gridValue * gridValue); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('grid-el');
        container.appendChild(pixel);
        container.style.gridTemplateColumns = `repeat(${gridValue},auto)`
    }
}


// color select buttons 

sec.addEventListener("click",colorSelect)
let colorPicker = sec.childNodes[1]

function colorSelect(e){
   
   if (e.target.classList.contains("black")){
    div = document.getElementsByClassName("grid-el")
    boxes = container.querySelectorAll(".grid-el")
    boxes.forEach(div=> {
    div.addEventListener("mouseenter", color)
    function color(e){
        e.target.style.backgroundColor = "black"
    }
    
    });
    }
    else if (e.target.classList.contains("rainbow")){
        div = document.getElementsByClassName("grid-el")
        boxes = container.querySelectorAll(".grid-el")
    
            boxes.forEach(div=> {
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                const rgb = `rgb(${r},${g},${b})`; 
        
        
                div.addEventListener("mouseenter", rainbowColor)
                function rainbowColor(e){
                e.target.style.backgroundColor = `rgb(${r},${g},${b})`
            }
            
        });
    }
        else if(e.target.classList.contains("eraser")){
            div = document.getElementsByClassName("grid-el")
            boxes = container.querySelectorAll(".grid-el")
    
            boxes.forEach(div=> {
                div.addEventListener("mouseenter", erase)
                beck = div.style.backgroundColor
                function erase(e){
                    e.target.style.backgroundColor = beck

                }
            });
        }else if(e.target.classList.contains("background")){
            e.target.addEventListener("input",backColor)
            function backColor(e){
                let back = e.target.value;
                div = document.getElementsByClassName("grid-el")
                boxes = container.querySelectorAll(".grid-el")
                    boxes.forEach(div=> {
                       div.style.backgroundColor = back 


                    
                });

            
            
            
            
            }

        }else if(e.target.classList.contains("clear")){
           
            div = document.getElementsByClassName("grid-el")
            boxes = container.querySelectorAll(".grid-el")
            boxes.forEach(div=> {
                div.style.backgroundColor = background.firstElementChild.value 
                

             
         });

                     
        }else if (e.target.classList.contains("containerColor")){
            e.target.addEventListener("input",gridColor)
            function gridColor(e){
                container.style.backgroundColor = e.target.value

            }

            
        }
    

        


}


let panel = sec.childNodes

panelChildren = panel[1].children
console.log(panelChildren)
colorPick = panelChildren[9]
background = panelChildren[13]
console.log(background.firstElementChild)

containerColor = panelChildren[7]

// custom color button
colorPick.addEventListener("input", colorOfChoice)

function colorOfChoice(e){
    let choice = e.target.value
    
    div = document.getElementsByClassName("grid-el")
    boxes = container.querySelectorAll(".grid-el")
        boxes.forEach(div=> {
            div.addEventListener("mouseenter", choosenColor)
            function choosenColor(e){
                div.style.backgroundColor = choice 
            }
        
    });


}














    




