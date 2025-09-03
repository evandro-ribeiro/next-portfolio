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
    <li
      className={`text-xs md:text-sm backdrop-blur-lg flex font-semibold gap-2 items-center p-2 md:p-4 rounded-full shadow-sm md:shadow-md md:shadow-white md:text-gray-100 duration-200 hover:scale-110 ${colorItem}`}
    >
      <Icon className="md:size-7 size-5 p-0.5" />
      {title}
    </li>
  );
}
