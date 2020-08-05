import AbstractTemplate from './AbstractTemplate.class';

export default class PlanoTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Plano Contratado:\t`)}${this.color.yellowBright.bold(
            data?.nomePlano || this.notFoundMessage,
        )}`;
    }
}
