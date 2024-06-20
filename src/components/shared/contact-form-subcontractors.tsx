"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from 'react';

export default function ContactFormSubcontractors() {

  const [success, setSuccess] = useState(false);

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
        setSuccess(true);
      } else {
        alert(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      alert(`${e}`);
    }
  };
  return (
    <div className="bg-slate-100 w-3/4 md:w-2/5 p-5 rounded-lg mb-20 md:mb-0">
    <form name="Subcontractor Form" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="Subcontractor Form" />
      <div className="grid w-full max-w-sm items-center gap-1.5 m-auto py-2">
        <Label className="font-mono font-bold" htmlFor="name">Nombre:</Label>
        <Input className="font-mono" id="form-name" name="name" type="text" placeholder="Escribe tu nombre" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 m-auto py-2">
        <Label className="font-mono font-bold" htmlFor="email">Email:</Label>
        <Input className="font-mono" id="form-email" name="email" type="email" placeholder="Escribe tu email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 m-auto py-2">
        <Label className="font-mono font-bold" htmlFor="company">Nombre empresa:</Label>
        <Input className="font-mono" id="form-company" name="company" type="text" placeholder="Escribe el nombre de tu empresa" />
        </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 m-auto py-2">
        <Label className="font-mono font-bold" htmlFor="telephone">Teléfono:</Label>
        <Input className="font-mono" id="form-telephone" name="telephone" type="text" placeholder="Escribe tú número de teléfono" />
      </div>
      <div className="flex flex-col items-center w-full max-w-sm items-center gap-1.5 m-auto py-4">
        {!success && <Button type="submit" className="bg-secondary-brand-color hover:bg-primary-brand-color w-1/2">Enviar</Button>}
        {success && <Alert className="border-green-500 bg-green-100">
            <AlertTitle className="text-green-700">¡Gracias!</AlertTitle>
            <AlertDescription className="text-green-700">
              Pronto nos pondremos en contacto contigo.
            </AlertDescription>
          </Alert>}
      </div>
    </form>
    </div>
  );
}
