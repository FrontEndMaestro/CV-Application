import "../styles/Input.css";

export default function Input({ name, labelText, type, value }) {
  const required =
    type == "email" || name.endsWith("name") || type == "tel" ? true : false;
  return (
    <label for={name}>
      <p>
        {labelText}
        {required ? "*" : null}
        {labelText == "Linkedin" || labelText == "Github" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m15.988 13l3.902-3.902c1.437-1.437 1.485-3.718.107-5.095c-1.377-1.378-3.658-1.33-5.095.107L11 8.012m2 7.95l-3.892 3.88c-1.432 1.43-3.64 1.615-5.082.107c-1.442-1.507-1.326-3.639.107-5.068L8.025 11M9 15l6-6"
            />
          </svg>
        ) : null}
      </p>

      <input
        name={name}
        id={name}
        type={type}
        required={required}
        maxLength={type == "tel" ? "16" : null}
        pattern={type == "tel" ? "\\+?[0-9][0-9]{7,14}" : null}
        title={
          type == "tel"
            ? "Phone number should be in the format: +123456789234"
            : null
        }
        defaultValue={value}
      ></input>
    </label>
  );
}
