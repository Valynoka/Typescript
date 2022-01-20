import React from 'react';
import UserList from "./componets/userList";
import TodoList from "./componets/todoList";

const App = () => {
  return(
      <div>
          <UserList/>
          <hr/>
          <TodoList/>
      </div>
  )
}

export default App;
