"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <Label htmlFor="name">Nombre:</Label>
        <Input id="form-name" name="name" type="text" placeholder="Escribe tu nombre" />
        <br />
      </p>
      <p>
        <Label htmlFor="email">Email:</Label>
        <Input id="form-email" name="email" type="email" placeholder="Escribe tu email" />
        <br />
      </p>
      <p>
        <Label htmlFor="company">Nombre empresa:</Label>
        <Input id="form-company" name="company" type="text" placeholder="Escribe el nombre de tu empresa" />
        <br />
      </p>
      <p>
        <Label htmlFor="telephone">Teléfono</Label>
        <Input id="form-telephone" name="telephone" type="text" placeholder="Escribe el nombre de tu empresa" />
        <br />
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
    </div>
  );
}
