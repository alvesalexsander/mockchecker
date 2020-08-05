import AbstractTemplate from './AbstractTemplate.class';

export default class DescricaoReligaTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Motivo da Eligib.:`)}${this.color.yellowBright(
            data?.descricao ? `\t${data?.descricao}` : this.notFoundMessage,
        )}`;
    }
}
