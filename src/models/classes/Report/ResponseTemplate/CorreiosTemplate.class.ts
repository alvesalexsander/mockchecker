import AbstractTemplate from './AbstractTemplate.class';

export default class CorreiosTemplate extends AbstractTemplate {
    generate(data: any): string {
        return Object.keys(data)
            ? data?.sucessoEnvioCorreios
                ? `\n${this.color.cyan(`2ª via Correios:\t`)}${this.color.yellowBright(`Sucesso`)}`
                : `\n${this.color.cyan(`2ª via Correios:\t`)}${this.color.yellowBright(`Falha`)}`
            : `\n${this.color.cyan(`2ª via Correios:\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
