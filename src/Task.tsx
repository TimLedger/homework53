import React from 'react';

interface TaskProps {
  id: string;
  text: string;
  onDeleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDeleteTask }) => {
  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div>
      <span>{text}</span>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default Task;
