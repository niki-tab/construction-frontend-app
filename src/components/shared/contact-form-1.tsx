"use client";

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
    <form name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Your Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          id="yourname"
        />
        <br />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="youremail"
        />
        <br />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          id="yourmessage"
        ></textarea>
        <br />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
