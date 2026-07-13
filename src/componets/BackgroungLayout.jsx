export default function McDonaldBackground({ children, leftImage, rightImage, bgColor = "bg-yellow-200" }) {
  return (
    <div className={`relative flex justify-center items-center w-screen h-screen ${bgColor} overflow-hidden`}>
      {leftImage && (
        <img
          src={leftImage}
          alt="mcdonald arch left"
          className="absolute -bottom-10 -left-10 w-1/2 h-2/3 pointer-events-none select-none opacity-60"
        />
      )}
      {rightImage && (
        <img
          src={rightImage}
          alt="mcdonald arch right"
          className="absolute -top-1 -right-16 h-screen pointer-events-none select-none opacity-40"
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}