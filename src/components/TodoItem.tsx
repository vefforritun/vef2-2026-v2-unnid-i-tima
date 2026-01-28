import type { FC } from 'hono/jsx';

import type { Todo } from '../types.js';
import { TodoList } from './TodoList.js';

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  return (<li>{todo.title}</li>)
}