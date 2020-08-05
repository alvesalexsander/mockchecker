import AbstractTemplate from './AbstractTemplate.class';

export default class SMSTemplate extends AbstractTemplate {
    generate(data: any): string {
        return data
            ? data.sucessoEnvioFaturasSMS
                ? `${this.color.cyan(`2ª via SMS:\t\t`)}${this.color.yellowBright(`Falha`)}`
                : `${this.color.cyan(`2ª via SMS:\t\t`)}${this.color.yellowBright(`Sucesso`)}`
            : `${this.color.cyan(`2ª via SMS:\t\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
