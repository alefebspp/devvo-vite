import Header, { HeaderProps } from "@/components/header";

type Props = HeaderProps;

export default function AppLayoutHeader({ children, className }: Props) {
  return <Header className={className}>{children}</Header>;
}
