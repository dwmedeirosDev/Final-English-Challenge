import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
          <p>Suas formas verbais são Do, Did e Done.</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
          <p>O verbo Have significa " Ter " Propriedade, posse, e em sua posição principal é o significado literal.</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
          <p>It's a joy to be part of this moment.</p>
          <p>It's an immense sadness to lose a family member.</p>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
          <p>Will é um verbo auxiliar seguindo de um verbo na sua forma-base, onde têm uma requisição, afirmação direta ou capacidade e going to é usado quando temos uma forte evidencia de algo que acontecerá ( Predição) ou intenção.</p>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
          <ul>
            <li>How</li>
            <li>What</li>
            <li>Where</li>
            <li>Who</li>
          </ul>
        <S.H2>How many types of adverbs are there in English?</S.H2>
          <p>São 5 tipos de advérbios (Manner - Maneira, Place - Local, Time - tempo, Frequency - Frequencia, Intesifier - Intensificador).</p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
          <p>I study english everyday.</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
          <p>Big elephants can always understand small elephants. (Because)</p>
      </S.Box>
    </S.Container>
  );
}