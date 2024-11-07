import { useNavigate } from "react-router-dom";

export default function Button({ text, path }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(path);
  }

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}
