namespace TestApp.Todo;

//TaskItem == задача
//описваме как изглежда всяка една задача
public class TaskItem
{
    //properties -> характеристики
    public string Title { get; }

    public DateTime DueDate { get; }

    public bool IsCompleted { get; set; }


    public TaskItem(string title, DateTime dueDate)
    {
        this.Title = title;
        this.DueDate = dueDate;
        this.IsCompleted = false;
    }
    
    
}
