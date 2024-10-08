import Image from "next/image";

const Loading = () => {
  return (
    <div className="relative h-screen  flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <Image
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        width={28}
        height={28}
        alt="image"
        className="rounded-full h-28 w-28"
      />
    </div>
  );
};

export default Loading;
