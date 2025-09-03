import { VerticalTimelineElement } from "react-vertical-timeline-component";

type CertificationCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  date?: string;
  backgroundColor?: string;
};

export default function CertificationCard({
  title,
  subtitle,
  icon,
  date,
  backgroundColor = "blue",
}: CertificationCardProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: backgroundColor,
        color: "#fff",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
      contentArrowStyle={{ borderRight: "15px solid  darkblue" }}
      iconStyle={{
        background: "lightblue",
        color: "#000",
        visibility: "visible",
      }}
      icon={icon}
      date={date}
      dateClassName="text-gray-100 text-lg"
      visible={true}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-purple-600 font-semibold bg-purple-200 rounded-xl py-1 px-2 text-center">
        {subtitle}
      </h4>
    </VerticalTimelineElement>
  );
}
