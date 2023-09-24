import React from "react";
import { shallow } from "enzyme";
import TodoItem from "../TodoItem";

describe("<TodoItem />", () => {
  it("simulates a click event for 'Completed' button", () => {
    const onCompleted = jest.fn();
    const onRemoveTodo = jest.fn();
    const todo = { text: "Sample Todo" };
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        onCompleted={onCompleted}
        onRemoveTodo={onRemoveTodo}
      />
    );
    wrapper.find("button").at(0).simulate("click");
    expect(onCompleted).toHaveBeenCalledWith(todo.text);
  });

  it("renders without errors", () => {
    const onCompleted = jest.fn();
    const onRemoveTodo = jest.fn();
    const todo = { text: "Sample Todo" };
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        onCompleted={onCompleted}
        onRemoveTodo={onRemoveTodo}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
