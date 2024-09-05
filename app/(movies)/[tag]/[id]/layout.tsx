import Image from "next/image";
import Link from "next/link";

const MovieLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="">{children}</section>;
};
export default MovieLayout;
