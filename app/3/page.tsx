import { Prompt } from '@/components/Prompt';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Prompt3() {
  return (
    <form className="flex flex-col gap-4">
      <Prompt label="what did you learn about yourself today?" />
      <Textarea />
    </form>
  );
}
