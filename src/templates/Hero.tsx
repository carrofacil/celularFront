import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-600">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-gray-400">Iphone ideal para você</span>
            <br />
            <span className="text-gray-200">
              Não fique fora dessa revolução!
            </span>
            <p style={{ fontSize: '16px' }} className="text-gray-400">
              (Promoção de pré-venda)
            </p>
          </>
        }
      />
    </Section>
  </Background>
);

export { Hero };
