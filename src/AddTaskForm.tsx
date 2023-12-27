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
    if (currentTask !== '') {
      onAddTask(currentTask);
      setCurrentTask('');
    }
  };

  return (
    <div className='form'>
      <input type="text" value={currentTask} onChange={handleInputChange} placeholder='Что нужно сделать?'/>
      <button className='form_btn' onClick={handleAddTask}><span></span></button>
    </div>
  );
};

export default AddTaskForm;