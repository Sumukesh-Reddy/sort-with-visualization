alert("Open in Computer");
const togglebutton = document.getElementById('tog');
var theme = localStorage.getItem('theme') || "dark";  
function applyTheme() {
    if (theme === "light") {
        document.body.style.backgroundColor = "#dee2e6"; 
        document.body.style.color = "black";  
        togglebutton.textContent = "Dark Mode";
        var boxes = document.querySelectorAll(".box-container div");
        boxes.forEach(box => {
            box.style.backgroundColor = "#007bff";
            box.style.color = "white"; 
        });
    } else {
        document.body.style.backgroundColor = "#121212"; 
        document.body.style.color = "white"; 
        togglebutton.textContent = "Light Mode"; 
        var boxes = document.querySelectorAll(".box-container div");
        boxes.forEach(box => {
            box.style.backgroundColor = "#dee2e6"; 
            box.style.color = "black"; 
        });
    }
}
applyTheme();
togglebutton.addEventListener('click', () => {
    if (theme === "light") {
        theme = "dark";
    } else {
        theme = "light"; 
    }
    localStorage.setItem('theme',theme);
    applyTheme();
});

function updateSizeDisplay(value){
    document.getElementById("sizeValue").innerText="Selected Size: "+value;
    document.getElementById("sizeValue").style.color="red";
}

function updateBinSizeDisplay(value){
    document.getElementById("sizeValuebineary").innerText="Selected Size: "+value;
    document.getElementById("sizeValuebineary").style.color="red";
}
let array=[];
let arraySize=10;
let insertion=document.getElementById("insertion")
insertion.addEventListener('click',()=>{
    var x=document.getElementById("typeofsorting");
    x.innerText="Insertion Sort";
    let di=document.getElementById("array");
    while(di.firstChild){
        di.removeChild(di.firstChild);
    }
    generatearray();
})

function generatearray(){
    var size=document.getElementById("size").value;
    arraySize=parseInt(size);
    array=[];
    for(let i=0;i<size;i++){
        array[i]=Math.floor((Math.random()*100)+1);
    }
    addintodiv(array);
}

function addintodiv(array){
    const di = document.getElementById("array");
    for(let i of array){
        const newdiv=document.createElement("div");
        const content=document.createTextNode(i);
        newdiv.classList.add('number');
        newdiv.style.backgroundColor="#007bff";
        newdiv.style.margin="10px";
        newdiv.style.padding="14px";
        newdiv.style.borderRadius="20%";
        newdiv.style.border="2px solid #121212";
        newdiv.appendChild(content);
        di.appendChild(newdiv);
    }
}

let selection=document.getElementById("selection")
selection.addEventListener('click',()=>{
    var x=document.getElementById("typeofsorting");
    x.innerText="Selection Sort";
    let di=document.getElementById("array");
    while(di.firstChild){
        di.removeChild(di.firstChild);
    }
    generatearray();
})

let merge=document.getElementById("merge")
merge.addEventListener('click',()=>{
    var x=document.getElementById("typeofsorting");
    x.innerText="Merge Sort";
    let di=document.getElementById("array");
    while(di.firstChild){
        di.removeChild(di.firstChild);
    }
    generatearray();
})

let quick=document.getElementById("quick")
quick.addEventListener('click',()=>{
    var x=document.getElementById("typeofsorting");
    x.innerText="Quick Sort";
    let di=document.getElementById("array");
    while(di.firstChild){
        di.removeChild(di.firstChild);
    }
    generatearray();
})

document.getElementById("visualizeBtn").addEventListener('click',()=>{
    var x=document.getElementById("typeofsorting");
    sort(x);
})
function sort(x){
    if(x.innerText==="Insertion Sort")
    {
        insertionsort();
    }
    else if(x.innerText==="Selection Sort"){
        selectionSort();
    }
    else if(x.innerText==="Merge Sort"){
        mergesort(0,array.length-1);
    }
    else if(x.innerText==="Quick Sort"){
        quicksort(0,array.length-1);
    }
    else{
        alert("wrong input");
    }
}

async function insertionsort(){
    const numbers=document.querySelectorAll('.number');
    for (let i=1;i<array.length;i++) {
        let key=array[i];
        let j=i-1;
        numbers[i].style.backgroundColor='#e74c3c';
        await sleep(500);
        while(j>=0&&array[j]>key) {
            array[j+1]=array[j];
            numbers[j+1].textContent=array[j+1];
            numbers[j].style.backgroundColor='#f39c12';
            await sleep(500);
            j--;
        }
        array[j+1]=key;
        numbers[j+1].textContent=key;
        numbers[j+1].style.backgroundColor ='#3498db';
        await sleep(500);
    }
    await sleep(1000);
    for (let i=1;i<array.length;i++){
        numbers[i].style.backgroundColor ='#3498db';
    }
}


async function selectionSort() {
    const numbers=document.querySelectorAll('.number');
    for (let i=0;i<array.length-1;i++) {
        let minIndex=i;
        numbers[i].style.backgroundColor = '#e74c3c'; 
        await sleep(400);
        for (let j = i + 1; j < array.length; j++) {
            numbers[j].style.backgroundColor = '#f39c12'; 
            await sleep(500);
            if (array[j] < array[minIndex]) {
                if (minIndex !== i) {
                    numbers[minIndex].style.backgroundColor = '#3498db';
                }
                minIndex = j;
                numbers[minIndex].style.backgroundColor = '#e74c3c';
            } else {
                numbers[j].style.backgroundColor = '#3498db'; 
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            numbers[i].textContent = array[i];
            numbers[minIndex].textContent = array[minIndex];
            numbers[i].style.backgroundColor = '#2ecc71'; 
            numbers[minIndex].style.backgroundColor = '#2ecc71'; 
            await sleep(400);
        }
        numbers[i].style.backgroundColor = '#3498db';
    }
    await sleep(1000);
    for (let i = 0; i < array.length; i++) {
        numbers[i].style.backgroundColor = '#3498db';
    }
}

 // merge sort
 async function mergesort(l, r) {
    const numbers=document.querySelectorAll('.number');
    if (l<r){
        var m=Math.floor(l+(r-l)/2);
        await mergesort(l,m);  
        await mergesort(m+1,r);
        await mergesorting(l,m,r);
    }
    await sleep(500);  

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.backgroundColor = '#3498db';  
    }
}

async function mergesorting(l, m, r) {
    const numbers = document.querySelectorAll('.number');
    var n1=m-l+1;
    var n2=r-m;
    var L=[];
    var R=[];
    for (var i=0;i<n1;i++){
        L[i]=array[l+i];
        numbers[l+i].style.backgroundColor = "#00cc00";
    }
    for (var j=0;j<n2;j++) {
        R[j]=array[m+1+j];
        numbers[m+1+j].style.backgroundColor = "purple"; 
    }

    var i = 0, j = 0;
    var k = l;

    while (i<n1&&j<n2) {
        numbers[l+i].style.backgroundColor = '#e74c3c'; 
        numbers[m +1+j].style.backgroundColor = '#e74c3c';
        if (L[i]<=R[j]) {
            array[k]=L[i];
            numbers[k].textContent=array[k];
            i++;
        }else{
            array[k]=R[j];
            numbers[k].textContent=array[k];
            j++;
        }
        k++;
        await sleep(500);
        for(let x=l;x<l+i;x++) {
            numbers[x].style.backgroundColor = '#3498db'; 
        }
        for(let x = m + 1; x < m + 1 + j; x++) {
            numbers[x].style.backgroundColor = '#3498db';  
        }
    }
    while(i<n1){
        array[k]=L[i];
        numbers[k].textContent=array[k];
        numbers[k].style.backgroundColor='#e74c3c';
        i++;
        k++;
        await sleep(500);
    }
    while (j<n2){
        array[k]=R[j];
        numbers[k].textContent=array[k];
        numbers[k].style.backgroundColor='#e74c3c';
        j++;
        k++;
        await sleep(500);
    }

    for (let x = l; x <= r; x++) {
        numbers[x].style.backgroundColor = '#3498db'; 
    }
}


//quick sort

async function partition(low,high){
    let pivot = array[high];
    let i = low - 1;
        for (var j = low; j <= high - 1; j++) {
            if (array[j] < pivot) {
                i++;
                await swap(i, j);
            }
        }
        await swap(i+1,high);  
        return i+1;
}
async function swap(i,j) {
    const numbers=document.querySelectorAll('.number');
        numbers[i].style.backgroundColor="#e74c3c";
        numbers[j].style.backgroundColor="#e74c3c";
        await sleep(500);
    var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        numbers[i].textContent=array[i];
        numbers[j].textContent=array[j];
        numbers[i].style.backgroundColor="#00cc00";
        numbers[j].style.backgroundColor="#00cc00";
        await sleep(500);
}
async function quicksort(low,high){
    if (low < high) {
        const pi = await partition(low,high);
        await quicksort(low, pi-1);
        await quicksort(pi+1,high);
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

