import { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const handleAdd = () => {
    if (activity.trim() === "") return;
    setListData([...listData, activity]);
    setActivity("");
  };

  const handleDelete = (i) => {
    setListData(listData.filter((_, index) => index !== i));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white w-[360px] p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          📝 Todo List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleAdd}
            className="bg-indigo-500 text-white px-4 rounded-lg
                       hover:bg-indigo-600 transition-all"
          >
            Add
          </button>
        </div>

        {listData.length > 0 ? (
          <ul className="space-y-2">
            {listData.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center
                           bg-gray-100 px-3 py-2 rounded-lg"
              >
                <span className="text-gray-700">{item}</span>

                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No tasks added</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
