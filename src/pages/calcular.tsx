import { Button, Card, CardBody, Input, Typography } from '@material-tailwind/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAmountStore } from '../state/amount.state';

const FATOR_R = 0.06;
const PRO_LABORE = 0.28;
const INSS = 0.11;

export default function Calculate() {
  const router = useRouter();

  const amount = useAmountStore(state => state.amount);
  const clearAmount = useAmountStore(state => state.clearAmount);

  function navigateToHome() {
    clearAmount();
    router.back();
  }

  function getSimpleNational() {
    const simpleNational = (amount * FATOR_R).toFixed(2);
    return simpleNational;
  }

  function getInss() {
    const proLabore = (amount * PRO_LABORE).toFixed(2);
    return (Number(proLabore) * INSS).toFixed(2);
  }

  function getTotal() {
    const simpleNational = getSimpleNational();
    const inss = getInss();

    return (Number(simpleNational) + Number(inss)).toFixed(2);
  }

  return (
    <main className="flex min-h-screen w-11/12 max-w-xs items-center justify-center flex-col mx-auto space-y-4">
      <Head>
        <title>Resultado</title>
      </Head>

      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" className="mb-4 text-center">
            Impostos do mês
          </Typography>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              Simples Nacional
            </Typography>
            <Typography>R$ {getSimpleNational()}</Typography>
          </div>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              INSS
            </Typography>
            <Typography>R$ {getInss()}</Typography>
          </div>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              Total
            </Typography>
            <Typography>R$ {getTotal()}</Typography>
          </div>

          <Button className="w-full mt-4" onClick={navigateToHome}>
            Voltar
          </Button>
        </CardBody>
      </Card>
    </main>
  );
}
