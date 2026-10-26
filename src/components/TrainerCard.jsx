function TrainerCard({
  name,
  specialty,
  experience,
  image,
}) {
  return (
    <div className="bg-[#1a1a1a] text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-orange-500 mb-3">
          {name}
        </h2>

        <p className="mb-2">
          <span className="font-semibold">
            Specialty:
          </span>{" "}
          {specialty}
        </p>

        <p className="mb-4">
          <span className="font-semibold">
            Experience:
          </span>{" "}
          {experience}
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
            Instagram
          </button>

          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
            Facebook
          </button>
        </div>

      </div>
    </div>
  );
}

export default TrainerCard;