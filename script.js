const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var closeBtn = document.getElementById("closeModal");

btn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// list //
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModal");
var addTaskBtn = document.getElementById("addTask");

openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

addTaskBtn.onclick = function() {
    var description = document.getElementById("description").value;
    var label = document.getElementById("label").value;
    var date = document.getElementById("date").value;
    var priority = document.getElementById("priority").value;

    var task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.innerHTML = `<p>${description} - ${label} - ${date}</p>
                      <span class="priority ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
                      <button onclick="this.parentElement.remove()">x</button>`;
    
    document.getElementById("todo").appendChild(task);
    modal.style.display = "none";
    addDragAndDropHandlers(task);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addDragAndDropHandlers(task) {
    task.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', e.target.outerHTML);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    });

    task.addEventListener('dragend', function (e) {
        e.target.style.display = 'block';
    });
}

function addDropZoneHandlers(dropzone) {
    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        var data = e.dataTransfer.getData('text/plain');
        dropzone.innerHTML += data;
        var task = dropzone.lastElementChild;
        task.style.display = 'block';
        addDragAndDropHandlers(task);
    });
}

var dropzones = document.querySelectorAll('.task-box');
dropzones.forEach(addDropZoneHandlers);

// list //
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

function createTask(description, label, date, priority) {
    var task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.innerHTML = `
        <p>${description} - ${label} - ${date}</p>
        <span class="priority ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;
    return task;
}

function addTaskToBox(boxId, description, label, date, priority) {
    var box = document.getElementById(boxId);
    var task = createTask(description, label, date, priority);
    box.appendChild(task);
    addDragAndDropHandlers(task);
}

function addDragAndDropHandlers(task) {
    task.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', e.target.outerHTML);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    });

    task.addEventListener('dragend', function (e) {
        e.target.style.display = 'block';
    });
}

function addDropZoneHandlers(dropzone) {
    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        var data = e.dataTransfer.getData('text/plain');
        dropzone.innerHTML += data;
        var task = dropzone.lastElementChild;
        task.style.display = 'block';
        addDragAndDropHandlers(task);
    });
}

var dropzones = document.querySelectorAll('.task-box');
dropzones.forEach(addDropZoneHandlers);
// list //