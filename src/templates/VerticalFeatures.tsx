import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Muito mais velocidade"
    description="capacidade de processamento 80 vezes maior que a geração passada"
  >
    <VerticalFeatureRow
      title="Tecnologia revolucionaria"
      description="Com processos mais eficazes foi possível atingir muito mais velocidade e reduzir o consumo de bateria"
      image="/assets/images/iphoneBlacBronze.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Tela mais fluida para nao perder um segundo"
      description="Com uma taxa de atualização mais rápida seu jogo ficara alucinante, e a experiencia de uso nunca mais sera a mesma!"
      image="/assets/images/iphoneTela.jpg"
      imageAlt="Second feature alt text"
      reverse
    />

    <VerticalFeatureRow
      title="PROMOÇÃO"
      description="INSIRA A BAIXO O EMAIL DE 10 AMIGOS E RECEBA UM DESCONTO de R$1500,00 NA PRÉ-VENDA"
      image="/assets/images/festa.jpg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
