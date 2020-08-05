import CorreiosTemplate from './CorreiosTemplate.class';
import DadosConsumidosTemplate from './DadosConsumidosTemplate.class';
import DescricaoReligaTemplate from './DescricaoReligaTemplate.class';
import EfetivacaoAdesaoTemplate from './EfetivacaoAdesaoTemplate.class';
import ElegibilidadeAdesaoTemplate from './ElegibilidadeAdesaoTemplate.class';
import ElegibilidadeReligaTemplate from './ElegibilidadeReligaTemplate.class';
import EmailTemplate from './EmailTemplate.class';
import LoginSenhaTemplate from './LoginSenhaTemplate.class';
import NavegacaoBloqueadaTemplate from './NavegacaoBloqueadaTemplate.class';
import PlanoTemplate from './PlanoTemplate.class';
import QuantidadeFaturasTemplate from './QuantidadeFaturasTemplate.class';
import SaldoTotalTemplate from './SaldoTotalTemplate.class';
import SMSTemplate from './SMSTemplate.class';
import StatusFaturasTemplate from './StatusFaturasTemplate.class';
import StatusReligaTemplate from './StatusReligaTemplate.class';
import TipoContaTemplate from './TipoContaTemplate.class';
import TipoPagamentoTemplate from './TipoPagamentoTemplate.class';
import TipoPlanoTemplate from './TipoPlanoTemplate.class';
import TotalDadosTemplate from './TotalDadosTemplate.class';

const TEMPLATES: any = {
    correios: new CorreiosTemplate(),
    dadosConsumidos: new DadosConsumidosTemplate(),
    descReliga: new DescricaoReligaTemplate(),
    efetivacaoAdesao: new EfetivacaoAdesaoTemplate(),
    elegibilidadeAdesao: new ElegibilidadeAdesaoTemplate(),
    elegibilidadeReliga: new ElegibilidadeReligaTemplate(),
    email: new EmailTemplate(),
    loginSenha: new LoginSenhaTemplate(),
    navegacaoBloqueada: new NavegacaoBloqueadaTemplate(),
    plano: new PlanoTemplate(),
    quantidadeFaturas: new QuantidadeFaturasTemplate(),
    saldoTotal: new SaldoTotalTemplate(),
    sms: new SMSTemplate(),
    statusFaturas: new StatusFaturasTemplate(),
    statusReliga: new StatusReligaTemplate(),
    tipoConta: new TipoContaTemplate(),
    tipoPagamento: new TipoPagamentoTemplate(),
    tipoPlano: new TipoPlanoTemplate(),
    totalDados: new TotalDadosTemplate(),
};

export default TEMPLATES;
