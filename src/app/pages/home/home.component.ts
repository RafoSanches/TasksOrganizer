import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tarefas: ITarefa[] = [];
  today: Date = new Date();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listar();
  }

  deletar(id: string): void {
    this.tarefaService.deletar(id);
    this.tarefas = this.tarefaService.listar();
  }

  editar(id: string): void {
    this.router.navigate(['/tarefa-atualiza', id]);
  }

  getPrioridadeClass(prioridade: string): string {
    switch (prioridade.toLowerCase()) {
      case 'alto': return 'text-danger fw-bold text-uppercase small';
      case 'médio':
      case 'medio': return 'text-warning fw-bold text-uppercase small';
      case 'baixo': return 'text-primary fw-bold text-uppercase small';
      default: return 'fw-bold text-uppercase small';
    }
  }
}
