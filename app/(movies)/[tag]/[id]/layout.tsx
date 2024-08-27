import Image from "next/image";
import Link from "next/link";

const MovieLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="px-8">{children}</section>;
};
export default MovieLayout;
