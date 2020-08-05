import AbstractTemplate from './AbstractTemplate.class';

export default class TipoPlanoTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Tipo do Plano:\t\t`)}${this.color.yellowBright(
            data?.tipoPlano || this.notFoundMessage,
        )}`;
    }
}
