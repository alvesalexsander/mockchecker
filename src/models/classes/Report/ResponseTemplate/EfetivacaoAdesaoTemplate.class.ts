import AbstractTemplate from './AbstractTemplate.class';

export default class EfetivacaoAdesaoTemplate extends AbstractTemplate {
    generate(data: any): string {
        return data
            ? data.sucessoReliga
                ? `${this.color.cyan(`Efetiva Adesão:\t\t`)}${this.color.yellowBright(`Sim`)}`
                : `${this.color.cyan(`Efetiva Adesão:\t\t`)}${this.color.yellowBright(`Não`)}`
            : `${this.color.cyan(`Efetiva Adesão:\t\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
