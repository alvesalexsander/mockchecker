import AbstractTemplate from './AbstractTemplate.class';

export default class TotalDadosTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Total de dados:\t`)}${this.color.yellowBright(
            data?.dadosTotaisPlano ? `\t${data?.dadosTotaisPlano}` : this.notFoundMessage,
        )}`;
    }
}
