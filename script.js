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


    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }


    removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };
    const addNewTask = (NewTaskContent) => {
        tasks.push({
            content: NewTaskContent,
        });
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const NewTaskContent = document.querySelector(".js-task").value.trim();
        if (NewTaskContent === "") {
            return;
        }

        addNewTask(NewTaskContent);
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        <li
         class="tasklist-task"
         >

        <button class="js-done">
        ${task.done ? "✔" : ""}
        </button>

        <span class="task-list__text${task.done ? " task-done" : ""}">
        ${task.content}
        </span>

        <button class="js-delete">
        🗑
        </button>
        </li>
        `;
        }
        document.querySelector(".js-tasklist").innerHTML = htmlString;

        const removeButton = document.querySelectorAll(".js-delete");

        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });



        const doneButton = document.querySelectorAll(".js-done");

        doneButton.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }





    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}