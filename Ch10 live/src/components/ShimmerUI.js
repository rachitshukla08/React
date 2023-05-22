const ShimmerUI = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
