 const milestoneData = JSON.parse(data).data;

 function milestoneload(mData) {
     
    const milestones = document.querySelector(".milestonelist");
    
    milestones.innerHTML = `${mData.map( function(milestone) {
      return ` 
      <div class="flex" id="${milestone._id}">
      <div class="borde>
      <div class="checkbox" >
      <input type="checkbox" onclick="milestonMark(this, ${milestone._id})">
      </div>
      <div class="mlist" onclick="myFunction(this, ${milestone._id})"> 
      <p class="show shown"> ${milestone.name}</p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules.map(function (module) {
        return `<div class="module">
            <p>
              ${module.name}
            </p>
        </div>`
      }).join("") }
    </div>`
    }).join("")}
    </div>`
 }
 

 function myFunction(milestoneElment, id) {
  console.dir(milestoneElment)
  const milestoneElement = milestoneElment.parentNode.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const activePanel = document.querySelector(".active");
  if(!milestoneElment.classList.contains("active") && activePanel)  {
    activePanel.classList.remove("active");
  }
  milestoneElment.classList.toggle("active");
  if(!milestoneElement.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  milestoneElement.classList.toggle("show");

  milestoneShow(id);
  
 }

 function milestoneShow(id) {
  const imge = document.querySelector(".milestoneImage");
  const name = document.querySelector(".name");
  const description = document.querySelector(".description");
  imge.style.opacity = 0;
  name.innerText = milestoneData[id].name;
  description.innerText = milestoneData[id].description;
  imge.src = milestoneData[id].image;
 }

 const milestonesImage = document.querySelector(".milestoneImage") 
 milestonesImage.onload = function() {
  this.style.opacity = 1;
 }

 function milestonMark(checkbo, id) {
  console.log(checkbo.checked);
  const d_list = document.querySelector(".doneList");
  //console.dir(m_list)
  const m_list = document.querySelector(".milestonelist");
  
  
  let itm = document.getElementById("id");
  console.log(itm)
  if(checkbo.checked) {
    m_list.removeChild(itm);
    d_list.appendChild(itm);
  } else {
    m_list.appendChild(itm);
    d_list.removeChild(itm);
  }

 }
 milestoneload(milestoneData);

