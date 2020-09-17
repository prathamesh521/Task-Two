const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".box")



fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

function dragStart(){
    this.className += " hold";
}
function dragEnd(){
    this.className = "fill";
}

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
   e.preventDefault();
}
function dragLeave(){
    this.className = "box"
    removeData()
}
function dragDrop(){
    this.className = "box";
    this.className += " filled"
    storeData()
}

function storeData(){
    let key = localStorage.getItem("box")

            if(key == null){
                dataObj = []
            }
            else{
                dataObj = JSON.parse(key)
            }

            let dataInput = {
                value: "boxEnter"
            }

            dataObj.push(dataInput);
            localStorage.setItem("box", JSON.stringify(dataObj));
}

function removeData(index){

    let key = localStorage.getItem("box");
    if (key == null) {
        dataObj = [];
    }
    else {
        dataObj = JSON.parse(key);
    }
    dataObj.splice(index, 1);
    localStorage.setItem("box", JSON.stringify(dataObj));
}
