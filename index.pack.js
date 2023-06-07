// onclick functionality
const frame = document.getElementById("frame");
const frame2 = document.getElementById("frame2");
const imageInput = document.getElementById("imageInput");
const origenButton = document.getElementById("btn-origen");
const circleButton = document.getElementById("btn-circle");
const square2Button = document.getElementById("btn-square2");
const squareButton = document.getElementById("btn-square");
const heartButton = document.getElementById("btn-heart");
const saveButton = document.getElementById("btn-save");
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");

circleButton.addEventListener("click", selectFrame);
squareButton.addEventListener("click", selectFrame);
square2Button.addEventListener("click", selectFrame);
origenButton.addEventListener("click", selectFrame);
heartButton.addEventListener("click", selectFrame);
saveButton.addEventListener("click", saveImage);

// dialog.returnValue = "favAnimal";

function selectFrame(button) {
    const buttonID = this.id;  
    console.log(buttonID);  
    switch (buttonID) {
      
      case 'btn-heart':
        frame.className = "frame heart";     
        frame2.className = "frame heart";    
        break;   
      case 'btn-circle':
        frame.className = "frame circle";        
        frame2.className = "frame circle";        
        break;
      case 'btn-origen':
        frame.className = "";        
        frame2.className = "";        
        break;
      case 'btn-square':
        frame.className = "frame square"; 
        frame2.className = "frame square"; 
        break;
      case 'btn-square2':
        frame.className = "frame square2";
        frame2.className = "frame square2";
        break;
    }
    
}

function saveImage(){
  document.getElementById('block').style = "display: flex;margin-top: 80px;";
  dialog.close("animalNotChosen");
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  document.getElementById('block').style = "display: none";
  imageInput.click();
});

function previewImage(event) {
  var input = event.target;
  dialog.showModal();
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("previewImage").src = e.target.result;
      document.getElementById("previewImage2").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
});
