import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarefaNovaComponent } from './pages/tarefa-nova/tarefa-nova.component';
import { TarefaAtualizaComponent } from './pages/tarefa-atualiza/tarefa-atualiza.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefa-nova', component: TarefaNovaComponent },
  { path: 'tarefa-atualiza/:id', component: TarefaAtualizaComponent },
  { path: '**', redirectTo: '' }
];
