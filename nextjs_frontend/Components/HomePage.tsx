import React from "react";
import { useState } from "react";
import axios from "axios";

function HomePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [searchName, setSearchName] = useState("");

  let base_url_for_express_server = "http://localhost:4000";

  async function create(data: any) {
    console.log("🚀 ~ file: HomePage.tsx ~ line 12 ~ create ~ HITS create");
    var config = {
      method: "post",
      url: `${base_url_for_express_server}/create_insertOne/`,
      data: data,
    };

    let response = await axios(config);
    console.log(
      "🚀 ~ file: HomePage.tsx ~ line 18 ~ create ~ response",
      response.data
    );
  }

  async function read(data: any) {
    console.log("🚀 ~ file: HomePage.tsx ~ line 12 ~ create ~ HITS read");
    var config = {
      method: "post",
      url: `${base_url_for_express_server}/read_findOne/`,
      data: data,
    };

    let response = await axios(config);
    console.log(
      "🚀 ~ file: HomePage.tsx ~ line 18 ~ read ~ response",
      response.data
    );
  }

  async function update() {
    let data = {
      searchData: {
        name: searchName,
      },
      updateData: {
        name: name,
        age: age,
      },
    };
    console.log("🚀 ~ file: HomePage.tsx ~ line 12 ~ update ~ HITS update");
    var config = {
      method: "post",
      url: `${base_url_for_express_server}/update_updateOne/`,
      data: data,
    };

    let response = await axios(config);
    console.log(
      "🚀 ~ file: HomePage.tsx ~ line 18 ~ update ~ response",
      response.data
    );
  }

  async function Delete() {
    let data = {
      searchData: {
        name: searchName,
      },
    };
    console.log("🚀 ~ file: HomePage.tsx ~ line 12 ~ delete ~ HITS delete");
    var config = {
      method: "post",
      url: `${base_url_for_express_server}/delete_deleteOne/`,
      data: data,
    };

    let response = await axios(config);
    console.log(
      "🚀 ~ file: HomePage.tsx ~ line 18 ~ delete ~ response",
      response.data
    );
  }

  return (
    <>
      <h1>HomePage</h1>
      <div className="row">
        <div className="col-md-6">
          <b> Create Operation </b>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              className="form-control"
              name="age"
              id="age"
              type="text"
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={async () => await create({ name: name, age: age })}
            className="btn btn-success"
          >
            click here to add data to DB
          </button>

          <br></br>
          <br></br>
          <b> Read Operation </b>

          <div className="form-group">
            <label htmlFor="name">Search Name:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={async () => await read({ name: name })}
            className="btn btn-success"
          >
            click here to read/search in DB
          </button>

          <br></br>
          <br></br>
          <b> Update Operation</b>

          <div className="form-group">
            <label htmlFor="name">Search Name:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setSearchName(event.target.value)}
            />
            <label htmlFor="name">Update Name:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="name">Update Age:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setAge(event.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={async () =>
              // update currently hard coded
              await update()
            }
            className="btn btn-success"
          >
            click here to update data in DB
          </button>

          <br></br>
          <br></br>
          <b> Delete Operation </b>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              name="name"
              id="name"
              type="text"
              onChange={(event) => setSearchName(event.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={async () => await Delete()}
            className="btn btn-success"
          >
            click here to delete data from DB
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
