import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa, createITarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-atualiza',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './tarefa-atualiza.component.html',
  styleUrl: './tarefa-atualiza.component.css'
})
export class TarefaAtualizaComponent implements OnInit {
  tarefa: ITarefa = createITarefa();

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const tarefa = this.tarefaService.buscarPorId(id);
      if (tarefa) {
        this.tarefa = { ...tarefa };
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  setCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  atualizar(): void {
    this.tarefaService.editar(this.tarefa);
    this.router.navigate(['/']);
  }
}
