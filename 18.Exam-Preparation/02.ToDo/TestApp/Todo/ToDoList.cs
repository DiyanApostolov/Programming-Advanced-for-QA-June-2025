using System.Text;

namespace TestApp.Todo;

//ToDoList == списък със задачи
//описваме как изглежда всеки един списък със задачи
public class ToDoList
{
    //характеристики
    private readonly List<TaskItem> _tasks = new();

    //действия

    //добавяне на задача в списъка
    public void AddTask(string title, DateTime dueDate)
    {
        TaskItem newTask = new(title, dueDate);
        this._tasks.Add(newTask);
    }

    //завършваме задача
    public void CompleteTask(string title)
    {
        TaskItem? taskToComplete = this._tasks.FirstOrDefault(task =>
            task.Title.Equals(title, StringComparison.OrdinalIgnoreCase));
        if (taskToComplete is null)
        {
            throw new ArgumentException("Task with given title does not exist.");
        }
        
        taskToComplete.IsCompleted = true;
    }

    //визуализира всички задачи в него
    public string DisplayTasks()
    {
        StringBuilder sb = new();
        
        sb.AppendLine("To-Do List:");
        foreach (TaskItem task in this._tasks)
        {
            sb.AppendLine($"{(task.IsCompleted ? "[✓]" : "[ ]")} {task.Title} - Due: {task.DueDate.ToString("MM/dd/yyyy")}");
        }

        return sb.ToString().Trim();
    }
}
