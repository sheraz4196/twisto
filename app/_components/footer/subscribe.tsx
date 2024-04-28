import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Subscribe() {
  return (
    <form className="flex flex-1 flex-col gap-4 rounded-md border p-2 md:p-4 lg:gap-8 lg:p-8">
      <h3 className="text-3xl font-semibold text-zinc-900">Get Notified</h3>
      <p className="text-zinc-600">
        Subscribe, and get notification whenever we update something, or bring something amazing for
        you
      </p>
      <div className="flex items-center gap-2">
        <Input placeholder="Email" type="email" />
        <Button className="bg-accent-700 hover:bg-green-500">Subscribe</Button>
      </div>
    </form>
  );
}
