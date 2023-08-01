import { Button } from '@starter/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <h1 className="text-4xl font-bold">Turbo Starter</h1>
      <Button size="lg">Beep Boop</Button>
    </main>
  );
}
