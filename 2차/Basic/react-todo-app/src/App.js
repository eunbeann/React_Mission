import React, { useState } from "react";
// 리액트는 라이브러리이므로 리액트 라이브러리에서 컴포넌트 가지고 오기
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  // 첫 인수는 변수 이름, 두 번째 인수는 State를 정하는 함수
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // fare 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();
    // 새로운 할 일 데이터
    let newTodo = {
      // 유니크한 id값을 위해
      id: Date.now(),
      title: value,
      completed: false,
    };

    //원래 있던 할 일에 새로운 할 일 더해주기
    //State 바꾸기 전개연산자 이용해서 스테이트를 넣어 새 데잍 ㅓ넣어주기
    // this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      {/* html에서는 그냥 class라고 하지만 JSX에서는 class 작성시 className이라고 함*/}
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoDate={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
