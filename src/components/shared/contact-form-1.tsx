"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactForm1() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const myForm = e.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        alert("Message sent successfully");
      } else {
        alert(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      alert(`${e}`);
    }
  };
  return (
    <div className="bg-slate-100 w-1/2 m-auto p-5 rounded-lg">
    <form name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="form-name">Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          id="form-name"
        />
        <br />
      </p>
      <p>
        <label htmlFor="form-email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          id="form-email"
        />
        <br />
      </p>
      <p>
        <label htmlFor="form-company">Nombre empresa:</label>
        <input
          type="text"
          name="company"
          placeholder="Escribe el nombre de tu empresa"
          id="form-company"
        />
        <br />
      </p>
      <p>
        <label htmlFor="form-telephone">Teléfono:</label>
        <input
          type="text"
          name="phone"
          placeholder="Escribe el nombre de tu empresa"
          id="form-telephone"
        />
        <br />
      </p>
      <p>
        <Input name="test" type="text" placeholder="test" />
        <br />
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
    </div>
  );
}
