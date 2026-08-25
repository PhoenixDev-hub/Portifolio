export default function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #1111 1px, transparent 1px), linear-gradient(to bottom, #1111 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
