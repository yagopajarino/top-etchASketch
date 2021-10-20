let grid_div = document.querySelector(".grid_container")

function get_size() {
    let n = document.querySelector(".grid_size")
    return n = parseInt(n.value)   
}

resetGrid()

function createGRid(n){
    for (let x = 0; x < n; x++) {
        let row = document.createElement("div")
        row.classList.toggle("row")
        for (let y = 0; y < n; y++) {
            let cell = document.createElement("div")
            cell.classList.toggle("square")
            cell.style.height = `${700/n - 2}px`
            cell.style.width = `${700/n - 2}px`
            row.append(cell)
        }
        grid_div.append(row)
    }
}

function hover(){
    let sqrs = document.querySelectorAll(".square")
    let color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
    sqrs.forEach(element => {
    element.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = color
        })
    });
}

let res_btn = document.querySelector(".resetBtn")
res_btn.addEventListener("click", resetGrid)

function resetGrid() {
    while (grid_div.firstChild) {
        grid_div.removeChild(grid_div.lastChild)
    }
    get_size()
    createGRid(get_size())
    hover()
}

