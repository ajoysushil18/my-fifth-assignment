let allIssues = []


function login(){

const user =
document.getElementById("username").value

const pass =
document.getElementById("password").value

if(user === "admin" && pass === "admin123"){

window.location.href = "dashboard.html"

}

else{

alert("Invalid credentials")

}

}
async function loadIssues(){

showLoader()

const res = await fetch(
"https://phi-lab-server.vercel.app/api/v1/lab/issues"
)

const data = await res.json()

allIssues = data.data

updateCounts()

displayIssues(allIssues)

hideLoader()

}


if(document.getElementById("issuesContainer")){

loadIssues()

}

function updateCounts(){

document.getElementById("allCount").innerText =
allIssues.length

document.getElementById("openCount").innerText =
allIssues.filter(i=>i.status==="open").length

document.getElementById("closedCount").innerText =
allIssues.filter(i=>i.status==="closed").length

}

function displayIssues(issues){

const container =
document.getElementById("issuesContainer")

container.innerHTML = ""

issues.forEach(issue=>{

const border =
issue.status === "open"
? "border-green-500"
: "border-purple-500"

const card = `

<div
onclick="showIssue(${issue.id})"
class="bg-white border-t-4 ${border}
p-4 rounded shadow hover:shadow-lg cursor-pointer">

<h2 class="font-bold mb-1">
${issue.title}
</h2>

<p class="text-sm text-gray-500 mb-2">
${issue.description}
</p>

<p class="text-sm">Status: ${issue.status}</p>
<p class="text-sm">Author: ${issue.author}</p>
<p class="text-sm">Label: ${issue.label}</p>

</div>

`

container.innerHTML += card

})

}

function filterIssues(type){

setActiveTab(type)

if(type === "all"){

displayIssues(allIssues)

}

if(type === "open"){

displayIssues(
allIssues.filter(i=>i.status==="open")
)

}

if(type === "closed"){

displayIssues(
allIssues.filter(i=>i.status==="closed")
)

}

}

function setActiveTab(type){

document.querySelectorAll(".tab")
.forEach(t=>{

t.classList.remove("bg-black","text-white")

t.classList.add("bg-gray-200")

})

const tab =
document.getElementById(type+"Tab")

tab.classList.add("bg-black","text-white")

}

async function searchIssues(){

const text =
document.getElementById("searchInput").value

showLoader()

const res = await fetch(

`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`

)

const data = await res.json()

displayIssues(data.data)

hideLoader()

}

async function showIssue(id){

const res = await fetch(

`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

)

const data = await res.json()

const issue = data.data

document.getElementById("modalTitle").innerText =
issue.title

document.getElementById("modalDesc").innerText =
issue.description

document.getElementById("modalAuthor").innerText =
"Author: "+issue.author

document.getElementById("modalStatus").innerText =
"Status: "+issue.status

document.getElementById("modalPriority").innerText =
"Priority: "+issue.priority

document.getElementById("modalLabel").innerText =
"Label: "+issue.label

document.getElementById("modalDate").innerText =
"Created: "+issue.createdAt

document.getElementById("modal")
.classList.remove("hidden")

document.getElementById("modal")
.classList.add("flex")

}

function closeModal(){

document.getElementById("modal")
.classList.add("hidden")

}

function showLoader(){

document.getElementById("loader")
.classList.remove("hidden")

}

function hideLoader(){

document.getElementById("loader")
.classList.add("hidden")

}