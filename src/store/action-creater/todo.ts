import {Dispatch} from "react";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

// https://jsonplaceholder.typicode.com/users

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {

        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const resposnce = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: resposnce.data})
            }, 500)

        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export function setTodoPage (page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODOS_PAGE, payload: page}
}