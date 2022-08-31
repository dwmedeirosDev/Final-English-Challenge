import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
          <p>A sigla HTTPS " Hyper Text Transfer Protocol Secure" em português significa Protocolo de transferência de hipertexto seguro, esse protocolo é usado para criptografar e autenticar a comunicação entre o servidor e o navegador.</p>
        <S.H2>Stateless is...?</S.H2>
          <p>É um protocolo de comunicação que considera cada requisição independente, ou seja que não está atrelada a nenhuma requisição anterior.</p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
          <p>Serve para indicar o sujeito da ação verbal.</p>
        <S.H2>Could, Should and Would are know as...?</S.H2>
          <p>São conhecidos como verbos modais.</p>
        <S.H2>What Should means?</S.H2>
          <p>Should significa " dever ", que é usado para expressar obrigação, probabilidade ou recomendação.</p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
            <p>Let's say great things about you.</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
            <p>He'll go to Bahia next month.</p>
          <li>3 - Ela estará ai amanhã</li>
            <p>She will be here tomorrow.</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
          <p>Sujeito da sentença é "They" / Eles.</p>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
          <ul>
            <li>I was</li>
            <li>You were</li>
            <li>He was</li>
            <li>She was</li>
            <li>It was</li>
            <li>We were</li>
            <li>You were</li>
            <li>They were</li>
          </ul>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
          <p>Explicação: Ambos são pronomes demonstrativos que fazem referência a substativos singula.</p>
          <p>This: este,esta ou isto / That: esse, essa, isso, aquele, aquela ou aquilo.</p>
          <p>Frase com this: This is my chair.</p>
          <p>Frase com that: That is your bus</p>
      </S.Box>
    </S.Container>
  );
}