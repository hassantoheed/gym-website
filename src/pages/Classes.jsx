import { useState } from "react";
import { classesData } from "../data/classesData";
import ClassCard from "../components/ClassCard";

function Classes() {
  const [filter, setFilter] = useState("All");

  const filteredClasses =
    filter === "All"
      ? classesData
      : classesData.filter((c) => c.type === filter);

  return (
    <div>
      <h1>Classes</h1>

      {/* Filter Buttons */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Cardio")}>Cardio</button>
      <button onClick={() => setFilter("Strength")}>Strength</button>
      <button onClick={() => setFilter("Yoga")}>Yoga</button>

      {/* Class Cards */}
      {filteredClasses.map((item) => (
        <ClassCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Classes;