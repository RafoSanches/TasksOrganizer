import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa, createITarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-nova',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './tarefa-nova.component.html',
  styleUrl: './tarefa-nova.component.css'
})
export class TarefaNovaComponent {
  tarefa: ITarefa = createITarefa();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  setCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  salvar(): void {
    if (this.tarefa.nome.trim()) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/']);
    }
  }
}
