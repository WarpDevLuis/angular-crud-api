import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ProdutoService } from './services/produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.html', 
  styleUrls: ['./app.css']  
})
export class App implements OnInit { 
  produtos: any[] = [];
  
  novoProduto = { 
    nome: '', 
    preco: 0 
  }; 

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: (dados: any) => { 
        this.produtos = dados;
      },
      error: (erro: any) => { 
        console.error('Erro ao listar produtos:', erro);
      }
    });
  }

  adicionarProduto() {
    this.produtoService.cadastrar(this.novoProduto).subscribe({
      next: (resposta: any) => { 
        alert('Produto cadastrado com sucesso!');
        this.carregarProdutos(); 
        this.novoProduto = { nome: '', preco: 0 }; 
      },
      error: (erro: any) => { 
        console.error('Erro ao cadastrar produto:', erro);
      }
    });
  }

  excluirProduto(id: number | string) {
    this.produtoService.excluir(id).subscribe({
      next: (resposta: any) => { 
        alert('Produto excluído do sistema!');
        this.carregarProdutos(); 
      },
      error: (erro: any) => { 
        console.error('Erro ao excluir:', erro);
      }
    });
  }
}