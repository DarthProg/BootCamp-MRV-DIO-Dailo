programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		const inteiro tamanho = 6
		inteiro jogos
		escreva ("Quantas surpresinhas você deseja sortear?")
		leia (jogos)
		inteiro megasena[1][tamanho]
		
		para (inteiro linha=0; linha<jogos; linha++)
		{
			escreva ("Jogo surpresinha " + linha +":"+"\n")
			para (inteiro coluna=0; coluna<tamanho; coluna++)
			{
				megasena[linha][coluna]=u.sorteia(1,60)
				escreva ("["+megasena[linha][coluna]+"]","\t")
			}
			escreva ("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 503; 
 * @PONTOS-DE-PARADA = 6, 7;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */