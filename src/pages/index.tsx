import { Button, Input, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState('');
  const router = useRouter();

  function handleClickCalculate() {
    const cents = parseFloat(amount.replace(',', '.')) * 100;

    router.push({
      pathname: '/calcular',
      query: { amount: cents },
    });
  }

  return (
    <main className="flex min-h-screen w-11/12 max-w-xs items-center justify-center flex-col mx-auto space-y-4">
      <Typography variant="h4">Impostos do mês</Typography>

      <Input
        label="Faturamento mensal"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />

      <Button className="w-full" onClick={handleClickCalculate}>
        Calcular
      </Button>
    </main>
  );
}
