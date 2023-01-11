import React, { useState } from "react";

//create your first component
const Home = () => {
  const [dato, setdato] = useState("");
  const [save, setSave] = useState([]);

  function handledato(e) {
    setdato(e.target.value);
  }

  //4. procesamos todos los dato del formulario
  function enviardato(e) {
    e.preventDefault();
    setSave(save.concat(dato));
    setdato("");
  }

  function eliminardato(eliminarli) {
    const nuevasTareas = save.filter(function (item, index) {
      return index !== eliminarli;
    });
    console.log(eliminarli);
    console.log(nuevasTareas);
    setSave(nuevasTareas);
  }

  console.log(save);

  return (
    <>
      <div>
        <p className="fw-light fs-1 d-flex justify-content-center text-danger text-opacity-50">
         tareas
        </p>
        <div className="container col-md-4  mt-3">
          <input
            id="exampledato"
            onChange={(e) => {
              setdato(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
            value={dato}
          />
          <button
            className="btn btn-outline-secondary container col-md-4  mt-3 d-flex justify-content-center"
            type="button"
            id="enviar"
            onClick={enviardato}
          >
            Agregar
          </button>
        </div>
      </div>
      <div className=" d-flex justify-content-center mt-3">
        <ul className="list-group ">
          {save.map((item, index) => (
            <li key={index} class="list-group-item">
              {" "}
              {item}{" "}
              <button
                className="btn btn-outline-secondary justify-content-right"
                type="button"
                id="eliminar"
                onClick={() => eliminardato(index)}
              >
                x
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
