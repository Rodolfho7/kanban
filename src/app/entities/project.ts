export type Todo = {
  name: string;
  person: string;
  status: string;
  comments: string;
};

export type Project = {
  name: string;
  list: Todo[];
}