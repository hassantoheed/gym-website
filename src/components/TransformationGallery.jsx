function TransformationGallery() {

  const images = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  ];

  return (
    <div>

      <h2>
        Transformation Gallery
      </h2>

      <div>
        {images.map((img, index) => (

          <div key={index}>

            <img
              src={img}
              alt="Transformation"
              className="gallery-img"
            />

          </div>

        ))}
      </div>

    </div>
  );
}

export default TransformationGallery;