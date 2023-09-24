import { Prompt } from '@/components/prompt';
import { PROMPTS } from '@/lib/constants';

export default function Page({ params }: { params: { id: string } }) {
  const prompt = PROMPTS[+params.id - 1];

  if (!prompt) {
    throw new Error(`invalid route param! got ${params.id}`);
  }

  return <Prompt label={prompt} />;
}
