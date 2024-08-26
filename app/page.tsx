import Banner from "@/components/home/Banner";
import MoiveList from "@/components/home/MoiveList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TRENDING_URL, UPCOMING } from "@/redux/api/endpoint";
import { Facebook, Navigation, TableCellsMerge, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className=''>
      <Banner />
      <MoiveList title="TRENDING" url={TRENDING_URL} />
      <div className="flex items-center gap-4 px-8">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="w-[130px] text-md font-medium font-poppins">
            <span className="text-green-200/90">Share NETFLIX</span> to your
            friends
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button className="flex w-[110px] bg-teal-600 font-md h-8 font-medium items-center gap-4">
            <Navigation size={18} color="#ffffff" />
            Shared
          </Button>
          <Button
            variant={"outline"}
            className="flex w-[110px] font-md h-8 items-center gap-4"
          >
            <Twitter size={18} color="#ffffff" />
            Tweet
          </Button>
          <Button className="flex w-[110px] bg-green-400/80 font-md h-8 items-center gap-4">
            <Facebook size={18} color="#ffffff" />
            Shared
          </Button>
          <Button className="flex w-[110px] bg-red-300/80 font-md h-8 items-center gap-4">
            <TableCellsMerge size={18} color="#ffffff" />
            Shared
          </Button>
        </div>
      </div>
    </main>
  );
}
