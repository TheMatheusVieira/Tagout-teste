import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardDetail } from './ui/card';
import { CalendarDays, Clock } from 'lucide-react';

export function UseCard() {
  return <Card>
              <div className="relative">
                <CardHeader>
                  <CardTitle>Nome do colaborador</CardTitle>
                  <CardDescription>Cargo do colaborador</CardDescription>
                  <CardDetail />
                </CardHeader>
              </div>

              <div className="flex flex-row gap-10">
                <div className="text-irongray">
                  <CardContent>
                    <div className="justify-items-start">
                      <p className="mb-4">Hora início</p>
                      <div className="flex flex-row gap-2">
                        <Clock size={24} className="mt-0.5" />
                        <h1 className="font-medium text-lg ml-1">16:00</h1>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="text-irongray">
                  <CardContent>
                    <p className="mb-4">Data início</p>
                    <div className="flex flex-row gap-2">
                      <CalendarDays size={24} className="mt-0.5" />
                      <h1 className="font-medium text-lg ml-1">09 / 12 / 24</h1>
                    </div>
                  </CardContent>
                </div>
              </div>
    </Card>
}
