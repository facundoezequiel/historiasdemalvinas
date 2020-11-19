import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "@/components/uikit/input";
import MDEditor from "@uiw/react-md-editor";
import Button from "@/components/uikit/button";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import dayjs from "dayjs";
import axios from "axios";
import { string_to_slug } from "../lib";

const CreateContainer = styled.div`
  width: 100%;
`;

export default function Create({ categorias }) {
  const { userAuth, userData } = useAuthState();
  const [editorValue, setEditorValue] = useState();
  const [titleValue, setTitleValue] = useState({
    title: "",
    date: dayjs().format("DD/MM/YYYY"),
    category: "default",
    abstract: "prueba",
    user: "",
    imgcover: "",
  });
  function handleEditorChange(value) {
    setEditorValue(value);
  }
  function handleTitleChange(value) {
    setTitleValue({ ...titleValue, title: value });
  }
  function handleCategoryChange(value) {
    setTitleValue({ ...titleValue, category: value });
  }
  async function handleSubmit() {
    await axios
      .post("/api/historias/add", {
        title: titleValue.title,
        date: titleValue.date,
        category: titleValue.category,
        content: editorValue,
        slug: string_to_slug(titleValue.title),
        imgcover: titleValue.imgcover,
        user: userData.id,
        abstract: titleValue.abstract,
      })
      .then((data) => {
        console.log("Manda historia", data);
      });
  }
  return (
    <CreateContainer>
      <Input
        type="text"
        text="Titulo de la historia"
        onChange={(e) => handleTitleChange(e.target.value)}
        value={titleValue.title}
      ></Input>
      <select
        value={titleValue.category}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="default">Seleccioná una categoria</option>
        {categorias.map((categoria) => (
          <option value={categoria.id} key={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
      <MDEditor
        preview="edit"
        value={editorValue}
        onChange={handleEditorChange}
      />
      <Button text="guardar" onClick={() => handleSubmit()}></Button>
    </CreateContainer>
  );
}
