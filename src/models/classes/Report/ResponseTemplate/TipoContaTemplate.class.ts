import AbstractTemplate from './AbstractTemplate.class';

export default class TipoContaTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Tipo de Conta:\t\t`)}${this.color.yellowBright(
            data?.tipoConta || this.notFoundMessage,
        )}`;
    }
}
