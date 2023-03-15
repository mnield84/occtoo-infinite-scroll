import React from "react";
import { ITodos } from "../../types/todos";
import { ScrollItemStyled } from "./ScrollItem.styles";

const ScrollItem = React.forwardRef(({ todo }: IScrollItem, ref) => {
  type Ref = React.RefObject<HTMLDivElement>;

  const todoContent = (
    <>
      <h2>{todo.title}</h2>
      <p>Status: {todo.completed ? "Completed" : "To Complete"}</p>
    </>
  );

  const content = ref ? (
    <ScrollItemStyled className="article" ref={ref as Ref}>
      {todoContent}
    </ScrollItemStyled>
  ) : (
    <ScrollItemStyled className="article">{todoContent}</ScrollItemStyled>
  );
  return content;
});

export default ScrollItem;

interface IScrollItem {
  todo: ITodos;
}
