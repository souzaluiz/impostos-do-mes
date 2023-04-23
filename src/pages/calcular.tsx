import { Button, Card, CardBody, Input, Typography } from '@material-tailwind/react';

export default function Calculate() {
  return (
    <main className="flex min-h-screen w-11/12 max-w-xs items-center justify-center flex-col mx-auto space-y-4">
      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" className="mb-4 text-center">
            Impostos do mês
          </Typography>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              INSS
            </Typography>
            <Typography>R$ 148,44</Typography>
          </div>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              Simples Nacional
            </Typography>
            <Typography>R$ 366,50</Typography>
          </div>

          <div className="flex flex-row justify-between">
            <Typography variant="h6" className="mb-2 text-left">
              Total
            </Typography>
            <Typography>R$ 600</Typography>
          </div>

          <Button className="w-full mt-4">Voltar</Button>
        </CardBody>
      </Card>
    </main>
  );
}
