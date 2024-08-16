import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchButton() {
  return (
    <div className="flex max-w-[550px] items-center my-8">
      <Input
        type="email"
        className=" rounded-none outline-none border-0 bg-white"
        placeholder="Email"
      />
      <Button type="submit" className="bg-tomato rounded-none">
        <Search />
      </Button>
    </div>
  );
}
