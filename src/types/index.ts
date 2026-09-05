import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  imgPath: string;
  icons: IconType[];
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  date: string;
}

export interface StackItem {
  title: string;
  Icon: IconType;
  colorItem: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  id: string;
  href: string;
  icon: IconType;
  label: string;
  hoverColor: string;
}
