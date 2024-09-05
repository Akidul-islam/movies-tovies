import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};
export default Loading;
