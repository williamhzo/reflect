'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PROMPTS } from '@/lib/constants';
import { CheckIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useAuth } from '@clerk/nextjs';

const formSchema = z.object({
  answer: z.string().min(2, 'required').max(250, 'too long'),
});

type FormValues = z.infer<typeof formSchema>;

type PromptProps = PropsWithChildren & {
  promptId: number;
};

export const Prompt: FC<PromptProps> = ({ promptId }) => {
  const prompt = PROMPTS[promptId];
  const router = useRouter();

  const hasNextPrompt = promptId < PROMPTS.length - 1;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setFocus,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: '',
    },
  });

  const { isSignedIn } = useAuth();

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    ({ answer }) => {
      console.log('answer', answer);

      if (!hasNextPrompt) {
        router.push('/submitted');
      } else if (isSignedIn) {
        router.push(`/${promptId + 1}`);
      } else {
        router.push(`/demo/${promptId + 1}`);
      }
    },
    [hasNextPrompt, isSignedIn, promptId, router]
  );

  useEffect(() => {
    setFocus('answer');
  }, [setFocus]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleSubmit, onSubmit]);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Label htmlFor="answer">{prompt}</Label>

      {errors.answer && (
        <span className="text-muted-foreground text-sm">
          {errors.answer.message}
        </span>
      )}

      <div className="flex items-start gap-2">
        <Textarea {...register('answer')} />
        <Button
          className={cn(
            'rounded-full w-11 p-0 disabled:opacity-0 duration-200 transition-opacity',
            !!watch('answer') ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          disabled={!watch('answer')}
          variant="outline"
          type="submit"
        >
          <CheckIcon className="h-4 w-4" />
        </Button>
      </div>
    </motion.form>
  );
};
