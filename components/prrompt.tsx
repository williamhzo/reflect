'use client';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

type PromptProps = PropsWithChildren & {
  label: string;
};

export const Prompt: FC<PromptProps> = ({ label }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="flex flex-col gap-4 w-full">
      <Label htmlFor="prompt">{label}</Label>

      <Textarea id="prompt" name="prompt" ref={inputRef} />
    </form>
  );
};
