import IResponseTemplate from './ResponseTemplate.interface';
import AbstractTemplate from './AbstractTemplate.class';

export default class DadosConsumidosTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Dados consumidos:`)}${this.color.yellowBright(
            data?.dadosConsumidosPlano ? `\t${data?.dadosConsumidosPlano}` : this.notFoundMessage,
        )}`;
    }
}
