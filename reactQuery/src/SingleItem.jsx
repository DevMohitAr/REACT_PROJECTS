import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const SingleItem = ({ title, id, isDone }) => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      axios.patch(`http://localhost:3000/api/tasks/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => console.log(error),
  });

  const { mutate: deleteTask } = useMutation({
    mutationFn: ({taskId}) => axios.delete(`http://localhost:3000/api/tasks/${taskId}`),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['tasks']})
    },
    onError:(error)=>{
      console.log(error);
    }
  });
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => editTask({ taskId: id, isDone: !isDone })}
      />
      <p
        style={{
          textDecoration: isDone ? "line-through" : "",
          textTransform: "capitalize",
          fontSize: "1.5rem",
          color: "#0D0D0D",
        }}
      >
        {title}
      </p>
      <button
        style={{
          color: "#EA715D",
          background: "none",
          border: "none",
          fontSize: "1.25rem",
          cursor:"pointer"
        }}
        onClick={() => deleteTask({ taskId: id })}
      >
        <FaTrash />
      </button>
    </section>
  );
};
export default SingleItem;
