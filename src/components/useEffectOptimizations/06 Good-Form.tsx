import React, { useEffect, useState } from "react";
import { post } from "../../utils";

const GoodForm = () => {
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post("/analytics/event", "visit_form-analytics", " ");
  }, []);

  console.time('✅')
  // ✅ Good: Event-specific logic is in the event handler do not trigger a render
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post("/api/register", name + " " + country, "✅");
  }
  console.timeEnd('✅')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Enter your country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export { GoodForm };
