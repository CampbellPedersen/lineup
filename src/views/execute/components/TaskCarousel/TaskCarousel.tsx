import React from "react";
import { Task } from "@src/models/task";
import { useCarousel } from "@src/views/execute/components/TaskCarousel/useCarousel";
import "./TaskCarousel.scss";
import { Emoji } from "@src/components/Emoji";

type Props = {
  tasks: Task[];
};

export const TaskCarousel: React.FC<Props> = ({ tasks }) => {
  const { next, style } = useCarousel(tasks.length + 1);

  return (
    <div className="task-carousel">
      <div className="content" style={style}>
        {tasks.map((task, index) => (
          <TaskCarouselItem key={index} task={task} onClick={next} />
        ))}
        <DoneCarouselItem />
      </div>
    </div>
  );
};

type ItemProps = {
  task: Task;
  onClick?: () => void;
};

const TaskCarouselItem: React.FC<ItemProps> = ({ task, onClick }) => (
  <div className="task-item" onClick={onClick}>
    <div>
      <span className="name">{task.name}</span>
      <p className="instructions">{task.instructions}</p>
    </div>
  </div>
);

const DoneCarouselItem: React.FC = () => (
  <div className="completed-item">
    <div>
      <span className="name">
        All done! <Emoji symbol="🎉" label="party popper" />
      </span>
    </div>
  </div>
);
