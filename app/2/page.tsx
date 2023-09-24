import { Prompt } from '@/components/Prompt';
import { Textarea } from '@/components/ui/textarea';

export default function Prompt2() {
  return (
    <form className="flex flex-col gap-4">
      <Prompt label="what took your enthusiasm and energy?" />
      <Textarea />
    </form>
  );
}
