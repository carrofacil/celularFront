import { useState } from 'react';

import { Section } from '../layout/Section';
import { api } from '../services/api';

export function Banner() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(true);
  async function sendMail() {
    const comparison =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = comparison.test(String(email).toLowerCase());

    if (isValid) {
      try {
        await api.post('/email', { email });
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
    } else {
      setSuccess(false);
    }
  }
  return (
    <Section>
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            fontSize: '44px',
            fontWeight: 'bold',
            color: '#FE5c5c',
          }}
        >
          Insira aqui abaixo:
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25px',
          }}
        >
          <input
            className="email-input"
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => sendMail()} className="button-send">
            Enviar
          </button>
        </div>

        {!success && (
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#a0aec0',
            }}
          >
            Email invalido ou já cadastrado
          </span>
        )}
        {success && (
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#a0aec0',
            }}
          >
            Quanto mais enviar maior o seu desconto
          </span>
        )}
      </div>
    </Section>
  );
}
