import AbstractTemplate from './AbstractTemplate.class';

export default class NavegacaoBloqueadaTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Navegação:\nBloqueada?\t\t`)}${this.color.yellowBright(
            data?.navegaçãoBloqueada === 'N' ? 'Não' : 'Sim' || this.notFoundMessage,
        )}`;
    }
}
