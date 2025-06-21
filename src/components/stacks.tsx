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
      className={`text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md lg:shadow-white lg:text-gray-100 duration-200 hover:scale-110 ${colorItem}`}
    >
      <Icon className="md:size-10 size-5 p-0.5" />
      {title}
    </li>
  );
}
