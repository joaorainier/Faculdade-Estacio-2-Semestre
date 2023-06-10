import { Injectable } from '@angular/core';
import { Livro } from './livro';
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros : Livro[] = [
    {
      codigo: 1,
      codEditora: 3,
      titulo: 'A Tormenta de Espadas',
      resumo: 'O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas. Joffrey, da Casa Lannister, ocupa o Trono de Ferro, como o instável governante dos Sete Reinos, ao passo que seu rival mais amargo, lorde Stannis, jaz derrotado e enfeitiçado pelas promessas da Mulher Vermelha. O jovem Robb, da Casa Stark, ainda comanda o Norte, contudo, e planeja sua batalha contra os Lannister, mesmo que sua irmã seja refém deles em Porto Real. Enquanto isso, Daenerys Targaryen atravessa um continente deixando um rastro de sangue a caminho de Westeros, levando consigo os três únicos dragões existentes em todo o mundo. Enquanto forças opostas avançam para uma gigantesca batalha final, um exército de selvagens chega dos confins da civilização. Em seu rastro vem uma horda de terríveis criaturas místicas – os Outros: um batalhão de mortos-vivos cujos corpos são imparáveis.',
      autores: ["George R.R. Martin"],
    },
    {
      codigo: 2,
      codEditora: 1,
      titulo: 'O Ladrão de Raios',
      resumo: 'O autor conjuga lendas da mitologia grega com aventuras no século XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga. Marcados pelo destino, eles dificilmente passam da adolescência. Poucos conseguem descobrir sua identidade.O garoto-problema Percy Jackson é um deles. Tem experiências estranhas em que deuses e monstros mitológicos parecem saltar das páginas dos livros direto para a sua vida. Pior que isso: algumas dessas criaturas estão bastante irritadas. Um artefato precioso foi roubado do Monte Olimpo e Percy é o principal suspeito. Para restaurar a paz, ele e seus amigos – jovens heróis modernos – terão de fazer mais do que capturar o verdadeiro ladrão: precisam elucidar uma traição mais ameaçadora que fúria dos deuses.',
      autores: ["Rick Riordan"],
    },
    {
      codigo: 3,
      codEditora: 2,
      titulo: 'Duna',
      resumo: 'A vida do jovem Paul Atreides está prestes a mudar radicalmente. Após a visita de uma mulher misteriosa, ele é obrigado a deixar seu planeta natal para sobreviver ao ambiente árido e severo de Arrakis, o Planeta Deserto. Envolvido numa intrincada teia política e religiosa, Paul divide-se entre as obrigações de herdeiro e seu treinamento nas doutrinas secretas de uma antiga irmandade, que vê nele a esperança de realização de um plano urdido há séculos. Ecos de profecias ancestrais também o cercam entre os nativos de Arrakis. Seria ele o eleito que tornaria viáveis seus sonhos e planos ocultos?',
      autores: ["Franklin Herbert"],
    },
    {
      codigo: 4,
      codEditora: 1,
      titulo: 'Coraline',
      resumo: 'Certas portas não devem ser abertas. E Coraline descobre isso pouco tempo depois de chegar com os pais à sua nova casa, um apartamento em um casarão antigo ocupado por vizinhos excêntricos e envolto por uma névoa insistente, um mundo de estranhezas e magia, o tipo de universo que apenas Neil Gaiman pode criar. Ao abrir uma porta misteriosa na sala de casa, a menina se depara com um lugar macabro e fascinante. Ali, naquele outro mundo, seus outros pais são criaturas muito pálidas, com botões negros no lugar dos olhos, sempre dispostos a lhe dar atenção, fazer suas comidas preferidas e mostrar os brinquedos mais divertidos. Coraline enfim se sente... em casa. Mas essa sensação logo desaparece, quando ela descobre que o lugar guarda mistérios e perigos, e a menina se dá conta de que voltar para sua verdadeira casa vai ser muito mais difícil ― e assustador ― do que imaginava.',
      autores: ["Neil Gaiman"],
    },
    {
      codigo: 5,
      codEditora: 2,
      titulo: 'Fundação',
      resumo: 'Há doze mil anos, o Império Galáctico reina, absoluto, sobre todos os mundos habitados. Mas esse reinado ignora um futuro terrível: uma crise levará a humanidade a uma era sombria de ignorância e barbárie que se estenderá por milênios. O único homem a prever a tragédia é Hari Seldon, que a partir de uma ciência recém-descoberta, a psico-história, cria um plano para preservar todo o conhecimento humano e evitar o declínio da civilização. Esse plano será a última esperança da humanidade e deverá ser colocado em prática, através dos séculos, pelos membros da Fundação.',
      autores: ["Isaac Asimov"],
    },
    {
      codigo: 6,
      codEditora: 3,
      titulo: 'O Espadachim de Carvão',
      resumo: 'Kurgala é um mundo abandonado por Quatro Deuses. Adapak é filho de um deles. E agora ele está sendo caçado. Perseguido por um misterioso grupo de assassinos, o jovem de pele cor de carvão se vê obrigado a deixar a ilha sagrada onde cresceu e a desbravar um mundo hostil e repleto de criaturas exóticas. Munido de uma sabedoria ímpar, mas dotado de uma inocência rara, ele agora precisará colocar em prática todo o conhecimento que adquiriu em seu isolamento para descobrir quem são seus inimigos. Mesmo que isso possa comprometer alguns dos segredos mais antigos de Kurgala.',
      autores: ["Affonso Solano"],
    }
  ]
  
  constructor() { }

  obterlivros() : Livro[]{
    return this.livros
  }

  incluir (livro: Livro) : void{
    const posicao = this.livros.length + 1;
    livro.codigo = posicao;
    this.livros.push(livro);
  }

  excluir(codigo:number):void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo)
    if (indice !== -1){
      this.livros.splice(indice, 1)
    }
  }

}
