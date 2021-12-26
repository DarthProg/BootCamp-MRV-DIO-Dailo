programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		const inteiro tamanho = 6
		inteiro jogos = 0
		escreva ("Quantas surpresinhas você deseja sortear?")
		leia (jogos)
		inteiro megasena[tamanho][tamanho]
		
		para (inteiro linha=0; linha<jogos; linha++)
		{
			inteiro surpresinha = linha + 1
			escreva ("Jogo surpresinha " + surpresinha +":"+"\n")
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
 * @POSICAO-CURSOR = 554; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */