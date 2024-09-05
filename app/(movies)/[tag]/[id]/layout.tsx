import Image from "next/image";
import Link from "next/link";
import { Fragment } from 'react';

const MovieLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Fragment>{children}</Fragment>;
};
export default MovieLayout;
