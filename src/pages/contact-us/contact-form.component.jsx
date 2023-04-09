import { useState } from "react";
import "./contact-form.styles.scss";
import emailjs from "emailjs-com";
const email = ["gmail", "yahoo", "microsft email"];

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    massage: "",
  });
  const saveFormData = async (e) => {
    // e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_xixt4hs",
        "template_90g6xmc",
        e.target,
        "user_pligmR98aXIUTzALLK8ne"
      )
      .then(
        (result) => {
          console.log(result);
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
    // const response = await fetch("/api/registration", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    // });
    // if (response.status !== 200) {
    //   throw new Error(`Request failed: ${response.status}`);
    // }
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData(event);
      alert("Your registration was successfully submitted!");
      setValues({
        name: "",
        email: "",
        phone: "",
        massage: "",
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Санал хүсэлт</h2>

      <label>Нэр</label>
      <input type="text" required value={values.name} onChange={set("name")} />

      <label>Email</label>
      <select requiredvalue={values.email} onChange={set("email")}>
        <option value="">Emails</option>
        {email.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <label>Утас</label>
      <input
        type="number"
        required
        min="1"
        value={values.age}
        onChange={set("age")}
      />

      <label>Massage:</label>
      <textarea value={values.habits} onChange={set("habits")} />

      <button type="submit">Илгээх</button>
    </form>
  );
}
