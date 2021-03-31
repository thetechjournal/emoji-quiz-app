function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const droppableElement = document.getElementById(event.target.id);
  const dropzone = event.target;
    if(draggableElement.getAttribute('data-emoji') === droppableElement.getAttribute('data-emoji')){
    event.preventDefault();
    const nodeCopy = document.getElementById(id).cloneNode(true);
    event
      .currentTarget
      .style
      .backgroundColor = 'green';
      dropzone.appendChild(nodeCopy);
    event
      .dataTransfer
      .clearData();
  } 
}


