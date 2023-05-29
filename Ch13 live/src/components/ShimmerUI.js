const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap gap-8" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((_, idx) => (
          <div
            key={idx}
            className="w-[200] h-[300] bg-gray-100 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
