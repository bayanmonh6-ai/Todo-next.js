export const TaskStats = ({ todos }) => {
    const completedTasks = todos.filter(
        (todo) => todo.checked
    ) .length;
    
    if (todos.length === 0) {
        return null;
    }
    return(
        <p className="font-normal text-[14px] text-[#6B7280]">
            {completedTasks} of {todos.length} tasks completed
        </p>
    );
};