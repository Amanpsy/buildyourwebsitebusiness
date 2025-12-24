export default function Background({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] overflow-hidden">
      
      {/* Global background blobs */}
      <div className="
        absolute w-[600px] h-[600px]
        bg-gradient-to-br from-[#D4AF37]/25 to-transparent
        rounded-full -top-64 -left-64
        blur-3xl
        pointer-events-none
      " />

      <div className="
        absolute w-[500px] h-[500px]
        bg-gradient-to-br from-[#D4AF37]/20 to-transparent
        rounded-full top-1/2 -right-64
        blur-3xl
        pointer-events-none
      " />

      <div className="
        absolute w-[400px] h-[400px]
        bg-gradient-to-br from-[#D4AF37]/15 to-transparent
        rounded-full bottom-0 left-1/3
        blur-3xl
        pointer-events-none
      " />

      {/* App content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
