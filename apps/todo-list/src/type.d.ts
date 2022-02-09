interface Todo {
text: string;
complete: boolean;
}

type completeToDo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;