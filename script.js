{
    const tasks = [
        {
            content: "test1",
            done: false,
        },
        {
            content: "test2",
            done: true,
        }
    ];

    const addNewTask = (NewTaskContent) => {
        tasks.push({
            content: NewTaskContent,
        });
    render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const NewTaskContent = document.querySelector(".js-task").value.trim();
        if (NewTaskContent === ""){
            return;
        }
        
            addNewTask(NewTaskContent);
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        <li
         class="tasklist-task${task.done ? " task-done" : ""}"
         >
        <button class="js-done">✔</button>
        <span class="task-list__text">${task.content}</span>
        <button class="js-delete">🗑</button>
        </li>
        `;
        }
        document.querySelector(".js-tasklist").innerHTML = htmlString;

    }
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        
        form.addEventListener("submit", onFormSubmit);
    };
    
    init();
}