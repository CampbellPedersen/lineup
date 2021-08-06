import React from 'react';
import {v4 as uuid} from 'uuid';
import { Lineup, Task } from '@src/models/task';
import { TaskCarousel } from './components/TaskCarousel';
import './Execute.scss'

// Comes from store probably?
const tasks: Task[] = [{
  id: uuid(),
  name: 'Make the bed',
  instructions: 'If sheets are dirty, change them',
}, {
  id: uuid(),
  name: 'Clear used dishes',
  instructions: 'If full, turn the dishwasher on',
}, {
  id: uuid(),
  name: 'Remove all garbage',
}];

const lineup: Lineup = {
  id: uuid(),
  name: 'Clean my room',
  tasks,
}

export const Execute: React.FC = () => {

  return (
    <section className="execute">
      <TaskCarousel tasks={lineup.tasks}/>
    </section>
  )
}