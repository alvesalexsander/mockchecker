import SETTINGS from '../../../../settings';
import AbstractTemplate from './AbstractTemplate.class';

export default class StatusFaturasTemplate extends AbstractTemplate {
    meses: any = {
        '01': 'Janeiro',
        '02': 'Fevereiro',
        '03': 'Março',
        '04': 'Abril',
        '05': 'Maio',
        '06': 'Junho',
        '07': 'Julho',
        '08': 'Agosto',
        '09': 'Setembro',
        '10': 'Outubro',
        '11': 'Novembro',
        '12': 'Dezembro',
    };

    generate(data: any): string {
        let response = this.notFoundMessage;
        if (Array.isArray(data?.faturasSimplificadas)) {
            response =
                `${this.color.cyan(`Status das Faturas:`)}` +
                this.color.yellowBright(
                    `${
                        data?.faturasSimplificadas.map((fatura: any) => {
                            if (data?.faturasSimplificadas.indexOf(fatura) === 0) {
                                return `\t${data?.faturasSimplificadas.indexOf(fatura) + 1 || this.notFoundMessage} - ${
                                    fatura.status || this.notFoundMessage
                                } - (${this.meses[fatura.mês] || this.notFoundMessage}) - Barcode ${
                                    fatura.barcode ? 'True' : 'False'
                                }`;
                            } else {
                                return `\n\t\t\t${
                                    data?.faturasSimplificadas?.indexOf(fatura) + 1 || this.notFoundMessage
                                } - ${fatura.status || this.notFoundMessage} - (${
                                    this.meses[fatura.mês] || this.notFoundMessage
                                }) - Barcode ${fatura.barcode ? 'True' : 'False'}`;
                            }
                        }) || this.notFoundMessage
                    }`,
                );
        }

        return response;
    }
}
