let projects = [];

function createProject() {
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;

    if (projectName && projectDescription) {
        const project = {
            id: projects.length + 1,
            name: projectName,
            description: projectDescription,
            tasks: []
        };

        projects.push(project);
        renderProjects();
        clearProjectForm();
    }
}

function clearProjectForm() {
    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
}

function renderProjects() {
    const projectsDiv = document.getElementById('projects');
    projectsDiv.innerHTML = '';

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const taskForm = document.createElement('div');
        taskForm.className = 'task-form';
        taskForm.innerHTML = `
            <h4>Create Task</h4>
            <input type="text" placeholder="Task Name" required>
            <input type="date" placeholder="Deadline" required>
            <select>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button onclick="createTask(${project.id})">Create Task</button>
        `;

        const taskList = document.createElement('div');
        taskList.className = 'task-list';

        project.tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `${task.name} - ${task.deadline} - ${task.status}`;
            taskList.appendChild(taskDiv);
        });

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(taskForm);
        projectDiv.appendChild(taskList);

        projectsDiv.appendChild(projectDiv);
    });
}

function createTask(projectId) {
    const project = projects.find(p => p.id === projectId);

    if (project) {
        const taskForm = document.querySelectorAll(`.task-form`)[projectId - 1];
        const taskName = taskForm.querySelector('input[type="text"]').value;
        const taskDeadline = taskForm.querySelector('input[type="date"]').value;
        const taskStatus = taskForm.querySelector('select').value;

        if (taskName && taskDeadline && taskStatus) {
            const task = {
                name: taskName,
                deadline: taskDeadline,
                status: taskStatus
            };

            project.tasks.push(task);
            renderProjects();
        }
    }
}
