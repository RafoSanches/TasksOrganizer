import { Injectable } from '@angular/core';
import { ITarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: ITarefa[] = [];

  listar(): ITarefa[] {
    return this.tarefas;
  }

  cadastrar(tarefa: ITarefa): void {
    tarefa.id = crypto.randomUUID();
    this.tarefas.push({ ...tarefa });
  }

  editar(tarefa: ITarefa): void {
    const index = this.tarefas.findIndex(t => t.id === tarefa.id);
    if (index !== -1) {
      this.tarefas[index] = { ...tarefa };
    }
  }

  deletar(id: string): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  buscarPorId(id: string): ITarefa | undefined {
    return this.tarefas.find(t => t.id === id);
  }
}
