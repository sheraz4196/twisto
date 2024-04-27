import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <form className="flex flex-col gap-4 lg:gap-8 p-2 md:p-4 lg:p-8 rounded-md border flex-1">
      <h3 className="text-3xl font-semibold text-zinc-900">Get Notified</h3>
      <p className="text-zinc-600">
        Subscribe, and get notification whenever we update something, or bring
        something amazing for you
      </p>
      <div className="flex gap-2 items-center">
        <Input placeholder="Email" type="email" />
        <Button>Subscribe</Button>
      </div>
    </form>
  );
}
