import React from "react";

// Define the props for the Hotspot component
interface HotspotProps {
  top: number; // Top position as a percentage
  left: number; // Left position as a percentage
  content: React.ReactNode; // The content to display inside the hotspot
  onClick: () => void; // Function to handle click events
}

// The Hotspot component
const Hotspot: React.FC<HotspotProps> = ({ top, left, content, onClick }) => {
  return (
    <div
      onClick={onClick} // Event handler for clicks
      className="absolute p-2 cursor-pointer bg-red-500 text-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${top}%`, left: `${left}%` }} // Positioning using inline styles
    >
      {content}
    </div>
  );
};

export default Hotspot;
