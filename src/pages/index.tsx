import { MAX_MONEY, extractNumber, numberToMoneyFormat } from '@/utils/money';
import { Button, Input, Typography } from '@material-tailwind/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  function handleClickCalculate() {
    router.push({
      pathname: '/calcular',
      query: { amount },
    });
  }

  const handleChangeText = (text: string) => {
    const number = extractNumber(text);
    let money = number;

    if (number > MAX_MONEY) money = MAX_MONEY;

    if (number < 0) money = 0;

    setAmount(money);
  };

  return (
    <main className="flex min-h-screen w-11/12 max-w-xs items-center justify-center flex-col mx-auto space-y-4">
      <Head>
        <title>Impostos do Mês</title>
      </Head>

      <Typography variant="h4">Impostos do mês</Typography>

      <Input
        label="Faturamento mensal"
        inputMode="numeric"
        value={numberToMoneyFormat(amount / 100)}
        onChange={event => handleChangeText(event.target.value)}
      />

      <Button className="w-full" onClick={handleClickCalculate}>
        Calcular
      </Button>
    </main>
  );
}
