'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const MOOD = [-2, -1, 0, 1, 2];

export default function Mood() {
  const router = useRouter();

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.75 }}
    >
      <Label>how are you feeling today?</Label>

      <div className="flex gap-2">
        {MOOD.map((mood) => (
          <Button
            variant="outline"
            onClick={() => router.push('/1')}
            className="w-10"
            key={mood}
          >
            {mood}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
