// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Test() {
//   const [api, setApi] = useState([]);
//   const [loading, setLoading]=useState(true)
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => {
//         setApi(response.data);
//         console.log(response);
//         setLoading(false)
//       })
//       .catch((error) => {
//         alert("error", error);
//         setLoading(false)
//       });
//   }, [api]);

//   return <div>
//     {loading ?<div>Loading...</div>:null }
// {api.map((item)=>(
//   <div key={item.id}>
// <div>{item.title}</div>

//   </div>
// ))}

//   </div>;
// }

// export default Test;

import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://example.com/api/endpoint",
        formData
      );
      console.log("Response:", response.data);
      // Handle success, show a success message, etc.
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h1>Contact Form</h1>
      
      {loading ? 
       <div> abc</div>
      : 
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
};

export default Test;
