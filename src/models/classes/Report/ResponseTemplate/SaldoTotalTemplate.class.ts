import AbstractTemplate from './AbstractTemplate.class';

export default class SaldoTotalTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `\n${this.color.cyan(`Saldo para Recarga/Contratação de Pacotes:\nTotal:\t\t`)}${this.color.yellowBright(
            `${
                !isNaN(data?.saldo)
                    ? `\tR$ ${Number.parseFloat(data?.saldo).toFixed(2).replace('.', ',')}`
                    : this.notFoundMessage
            }`,
        )}`;
    }
}
