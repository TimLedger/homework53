import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [currentTask, setCurrentTask] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTask = () => {
    onAddTask(currentTask);
    setCurrentTask('');
  };

  return (
    <div>
      <input type="text" value={currentTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default AddTaskForm;
