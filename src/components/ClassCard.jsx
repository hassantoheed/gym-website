function ClassCard({ name, trainer, time, duration, difficulty }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Trainer: {trainer}</p>
      <p>{time} • {duration}</p>
      <p>{difficulty}</p>
    </div>
  );
}

export default ClassCard;