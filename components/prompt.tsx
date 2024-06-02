"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROMPTS } from "@/lib/constants";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const formSchema = z.object({
  answer: z.string().min(2, "required").max(250, "too long"),
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
      answer: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    ({ answer }) => {
      console.log("answer", answer);

      if (!hasNextPrompt) {
        router.push("/submitted");
      } else {
        router.push(`/${promptId + 1}`);
      }
    },
    [hasNextPrompt, promptId, router],
  );

  useEffect(() => {
    setFocus("answer");
  }, [setFocus]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleSubmit, onSubmit]);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Label htmlFor="answer">{prompt}</Label>

      {errors.answer && (
        <span className="text-sm text-muted-foreground">
          {errors.answer.message}
        </span>
      )}

      <div className="flex items-start gap-2">
        <Textarea {...register("answer")} />
        <Button
          className={cn(
            "w-11 rounded-full p-0 transition-opacity duration-200 disabled:opacity-0",
            !!watch("answer") ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          disabled={!watch("answer")}
          variant="outline"
          type="submit"
        >
          <CheckIcon className="h-4 w-4" />
        </Button>
      </div>
    </motion.form>
  );
};
