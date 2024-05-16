import React, { useState, FormEvent } from "react";

export default function ClearDigitalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
      // console.log(data);
    } catch (err) {
      setError(err.message); // Change 'error' to 'err' here
      // console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  // return (
  //   <div>
  //     {error && <div style={{ color: 'red' }}>{error}</div>}
  //     <form onSubmit={onSubmit}>
  //       <input type="text" name="firstName" />
  //       <input type="text" name="lastName" />
  //       <input type="email" name="email" />
  //       <input type="text" name="country" />
  //       <button type="submit" disabled={isLoading}>
  //         {isLoading ? 'Loading...' : 'Submit'}
  //       </button>
  //     </form>
  //   </div>

  // );
}
