import { useState } from "react";
import axios from "axios";

const Fileupload = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    file: "",
  });

  const handleFileChange = (event) => {
    setState({ ...state, file: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClick =() => {
    const formdata = new FormData();
    formdata.append("file", state.file);
    formdata.append("title", state.title);
    formdata.append("description", state.description);
  axios.post(`http://localhost:8080/file/filecloudinary`,formdata).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div
      className="form-group row col-6 offset-3"
      style={{ marginTop: "50px" }}
    >
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Enter Title"
          onChange={handleInputChange}
        />
        <label>description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          placeholder="Enter Description"
          onChange={handleInputChange}
        ></textarea>{" "}
        <br />
        <br />
        <label>File -</label>
        <input
          type="file"
          className="form-control-file"
          id="file"
          onChange={handleFileChange}
        />{" "}
        <br /> <br />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={handleClick}
        >
          Upload Data
        </button>
      </form>
    
    </div>
  );
};

export default Fileupload;
