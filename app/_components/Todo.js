export const Todo = ({ value, toggleTodo, deleteTodo}) => {
  return (
    <div className="flex h-15.5 bg-[#F9FAFB] rounded-lg items-center justify-between p-4">
      <div className="flex gap-2.5">
        <input
          type="checkbox"
          className="w-5 h-5 accent-blue-600"
          checked={value.checked}
          onChange={() => toggleTodo(value.id)}
          
        />
        <div className={`text-[14px] transition-all duration-300 ${value.checked ? "line-through text-gray-400 opacity-60" : "text-black"}`}>{value.text}</div>
      </div>
      <button 
      onClick={() => deleteTodo(value.id)}
      className="bg-[#FEF2F2] text-[#EF4444] text-center text-[14px] px-3 py-1.6 ml-35 rounded-lg cursor-pointer transition-all duration-150 active:scale-95">
        Delete
      </button>
    </div>
  );
};
