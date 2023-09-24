import { Prompt } from '@/components/Prompt';
import { Textarea } from '@/components/ui/textarea';

export default function Prompt1() {
  return (
    <form className="flex flex-col gap-4">
      <Prompt label="what filled you with enthusiasm? specifically. not what made you happy." />
      <Textarea />
    </form>
  );
}
