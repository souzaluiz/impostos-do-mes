import { Button, Input, Typography } from '@material-tailwind/react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-11/12 max-w-xs items-center justify-center flex-col mx-auto space-y-4">
      <Typography variant="h4">Impostos do mês</Typography>

      <Input label="Faturamento mensal" />

      <Button className="w-full">Calcular</Button>
    </main>
  );
}
