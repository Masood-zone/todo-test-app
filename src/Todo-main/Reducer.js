import { ACTIONS } from "./actions";

export default function TasksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.task_added:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ACTIONS.task_completed:
      return {
        ...state,
        tasks: state.tasks.map((taskId) =>
          taskId.id === action.payload
            ? { ...taskId, isCompleted: !taskId.isCompleted }
            : taskId
        ),
      };
    case ACTIONS.task_deleted:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case ACTIONS.edited_task:
      return {
        ...state,
        editing: action.id,
        newText: state.tasks.find((task) => task.id === action.id).text,
      };
    case ACTIONS.task_edited:
      return {
        ...state,
        newText: action.text,
      };
    case ACTIONS.edit_saved:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === state.editing ? { ...task, text: state.newText } : task
        ),
        editing: null,
        newText: "",
      };
    case ACTIONS.edit_canceled:
      return {
        ...state,
        editing: null,
        newText: "",
      };
    default:
      return state;
  }
}
