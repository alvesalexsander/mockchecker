import AbstractTemplate from './AbstractTemplate.class';

export default class TipoPagamentoTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Tipo Pagamento:\t\t`)}${this.color.yellowBright(
            data?.tipoPagamento || this.notFoundMessage,
        )}`;
    }
}
