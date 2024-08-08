import React from "react";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

type TooltipPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "left-start"
  | "left"
  | "left-end"
  | "right-start"
  | "right"
  | "right-end";

type TooltipItem = {
  image: string; // URL of the image
  title: string; // Title of the item
  description: string; // Description of the item
  price: string; // Price of the item
};

type CustomTooltipProps = {
  items: TooltipItem[];
  triggerElement: React.ReactNode;
  placement?: TooltipPlacement; // Use the defined type
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  items,
  triggerElement,
  placement = "top" // Default placement
}) => {
  return (
    <Tooltip content={<TooltipContent items={items} />} placement={placement}>
      {triggerElement}
    </Tooltip>
  );
};

const TooltipContent: React.FC<{ items: TooltipItem[] }> = ({ items }) => {
  return (
    <div className="p-2">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Image */}
          <Image src={item.image} alt={item.title} width={200} height={100} />
          {/* <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto mb-2 rounded"
            
          /> */}
          {/* Details */}
          <div className="text-small font-bold mb-1">{item.title}</div>
          <div className="text-tiny mb-2">{item.description}</div>
          <div className="text-tiny mb-2">Price: {item.price}</div>
          <div className="items-center justify-center text-center">
            <button className="flex w-full bg-[#AD8C87] text-white items-center justify-center rounded py-2 px-4">
              + Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomTooltip;
