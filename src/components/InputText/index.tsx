import { useState } from "react";
import { Container } from "./styles";

interface Input {
  name: string;
  type?: string;
  placeholder?: string;
  max?: number;
  textarea?: boolean;
  cols?: number;
  rows?: number;
  messageInvalid?: string;
}

export function InputText(props: Input) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
    console.log(event.target.value)
    if (event.target.value && !isValidEmail(event.target.value)) {
      setError(true);
      console.log('isInvalid')
    } else {
        setError(false);
        console.log('valid')
    }
    setMessage(event.target.value);
  };

  return (
    <Container>
      <label htmlFor="" color={ error ? "red" : "" }>{props.name}</label>
      {props.textarea ? (
        <textarea
          value={message}
          onChange={handleChange}
          maxLength={props.max ?? 20}
          tabIndex={1}
          placeholder={props.placeholder ?? ""}
          cols={props.cols}
          rows={props.rows}
        ></textarea>
      ) : (
        <input
          value={message}
          onChange={handleChange}
          maxLength={props.max ?? 20}
          tabIndex={1}
          type={props.type ?? ""}
          placeholder={props.placeholder ?? ""}
        />
      )}
      {props?.messageInvalid && error && (
        <small>&#8226; {props?.messageInvalid}</small>
      )}
    </Container>
  );
}
("");
