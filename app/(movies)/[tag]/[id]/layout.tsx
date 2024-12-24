const MovieLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className='flex flex-col gap-12'>{children}</div>;
};
export default MovieLayout;
