import React, { useEffect, useState } from "react";
import { post } from "../../utils";

const BadForm = () => {
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  // ✅ Good: This logic should run because the component was displayed
  useEffect(() => {
    post("/analytics/event", "visit_form-analytics", " ");
  }, []);

  console.time('❌')
  // ❌ Avoid: Event-specific logic inside an Effect
  const [jsonToSubmit, setJsonToSubmit] = useState({});
  useEffect(() => {
    if (jsonToSubmit !== null) {
      post("/api/register", name + " " + country, '❌');
    }
  }, [jsonToSubmit]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJsonToSubmit({ name, country });
  }
  console.timeEnd('❌')

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

export { BadForm };
