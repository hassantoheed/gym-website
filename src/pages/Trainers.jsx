import { trainersData } from "../data/trainersData";
import TrainerCard from "../components/TrainerCard";

function Trainers() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-8">

      <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">
        Meet Our Trainers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {trainersData.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            {...trainer}
          />
        ))}

      </div>
    </div>
  );
}

export default Trainers;