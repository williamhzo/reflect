import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FC, PropsWithChildren } from 'react';

type PromptProps = PropsWithChildren & {
  label: string;
};

export const Prompt: FC<PromptProps> = ({ label }) => {
  return (
    <form className="flex flex-col gap-4">
      <Label>{label}</Label>

      <Textarea />
    </form>
  );
};
