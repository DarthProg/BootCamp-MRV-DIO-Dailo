programa
{
		funcao inicio()
	{
			cadeia agenda[3][3] = {
			{"Ana", "Manaus  ", "(92) 9999-8574"},
			{"João", "São Paulo", "(11) 9999-5241"},
			{"Maria", "Ribeirão Preto", "(16) 9999-8596"}
			
		}
		escreva ("------------------------------------------------------"+ "\n")
		escreva ("-------------- AGENDA DE CLIENTES 1.0 ----------------"+ "\n")
		escreva ("------------------------------------------------------"+ "\n")
		para (inteiro contador=0; contador <=2; contador ++)
		{
			escreva (agenda[contador][0], "\t\t", agenda[contador][1], "\t\t", agenda[contador][2], "\n")
		
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 601; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */