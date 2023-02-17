import React from "react";
import Card from "../components/Shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About Page</h1>
      <p> This is a react app to leave feedback for a product or service</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
