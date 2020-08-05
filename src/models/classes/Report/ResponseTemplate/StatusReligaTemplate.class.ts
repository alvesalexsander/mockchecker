import AbstractTemplate from './AbstractTemplate.class';

export default class StatusReligaTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `\n${this.color.cyan(`Status do Religa:\t`)}${this.color.yellowBright(
            data?.statusReliga || this.notFoundMessage,
        )}`;
    }
}
