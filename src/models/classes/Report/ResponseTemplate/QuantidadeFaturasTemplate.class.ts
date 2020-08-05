import AbstractTemplate from './AbstractTemplate.class';

export default class QuantidadeFaturasTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `\n${this.color.cyan(`Cobranças e Faturas:\nQuantidade faturas no sistema: `)}${this.color.yellowBright(
            data?.quantidadeDeFaturas || this.notFoundMessage,
        )}`;
    }
}
