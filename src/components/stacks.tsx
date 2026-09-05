import { IconType } from "react-icons";

export default function Stack({
  Icon,
  title,
  colorItem,
}: {
  Icon: IconType;
  title: string;
  colorItem: string;
}) {
  return (
    <div
      className={`
        tech-badge
        text-xs md:text-sm
        flex font-semibold gap-2 items-center
        px-3 md:px-4 py-2 md:py-2.5
        rounded-full
        cursor-default
        transition-all duration-300
        hover:scale-110
        ${colorItem}
      `}
    >
      <Icon className="md:size-5 size-4" />
      {title}
    </div>
  );
}
