import React from 'react';
import { Task } from '@src/models/task';
import { makeIndices, useCarousel } from '@src/views/execute/components/TaskCarousel/useCarousel';
import './TaskCarousel.scss';

type Props = {
  tasks: Task[]
}

export const TaskCarousel: React.FC<Props> = ({tasks}) => {
  const {next, back, style} = useCarousel(tasks.length);

  return (
    <div className='task-carousel'>
      <div className="content" style={style}>
        {tasks.map((task, index) => (
          <TaskCarouselItem key={index} task={task} onClick={next} />
        ))}
      </div>
    </div>
  );
}

type ItemProps = {
  task: Task
  onClick?: () => void;
}

const TaskCarouselItem: React.FC<ItemProps> = ({task, onClick}) => (
  <div className="item" onClick={onClick}>
    <div>
      <span className="name">{task.name}</span>
      <p className="instructions">{task.instructions}</p>
    </div>
  </div>
);
