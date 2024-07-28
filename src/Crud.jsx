import { useState } from "react";

const Crud = () => {
    const [work, setWork] = useState(["eat", "sleep"]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(event) {
        setNewtask(event.target.value);
    }

    function handleAddevent() {
        if (newTask.trim() !== "") {
            setWork(t => [...t, newTask]);
            setNewtask("");
        }
    }

    function handledelete(index) {
        const updatedTask = work.filter((_, i) => i !== index);
        setWork(updatedTask);
    }

    function handleUp(index) {
        if (index > 0) {
            const updatedTasks = [...work];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setWork(updatedTasks);
        }
    }

    function handleDown(index) {
        if (index < work.length - 1) {
            const updatedTasks = [...work];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setWork(updatedTasks);
        }
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>CRUD APPLICATION</p>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={newTask}
                    onChange={handleInputChange}
                    style={{ padding: '5px', marginRight: '5px' }}
                />
                <button
                    className="add-button"
                    onClick={handleAddevent}
                    style={{ padding: '5px 10px' }}
                >
                    Add
                </button>
            </div>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {work.map((element, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <span className="text" style={{ marginRight: '10px' }}>{element}</span>
                        <button
                            className="delete-button"
                            onClick={() => handledelete(index)}
                            style={{ marginRight: '5px', padding: '5px 10px' }}
                        >
                            Delete
                        </button>
                        <button
                            className="up-button"
                            onClick={() => handleUp(index)}
                            style={{ marginRight: '5px', padding: '5px 10px' }}
                        >
                            Up
                        </button>
                        <button
                            className="down-button"
                            onClick={() => handleDown(index)}
                            style={{ padding: '5px 10px' }}
                        >
                            Down
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Crud;
