export type Task = {
  id: string;
  name: string;
  instructions?: string;
};

export type Lineup = {
  id: string;
  name: string;
  tasks: Task[];
};
