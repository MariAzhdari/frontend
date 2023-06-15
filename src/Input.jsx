import { useState, useEffect } from "react";
import axios from "axios";

function Input() {
  const [book, setBook] = useState({
    url: "",
    title: ""
  });
  const [error, setError] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/new_table", book);

    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <input type="text" placeholder="inter url" onChange={handleChange} />
      <input type="text" placeholder="inter title" />
      <button className="add" onChange={handleChange}>
        add
      </button>
    </div>
  );
}

export default Input;
