import { Routes } from '@angular/router';
import { CapturaComponent } from './captura/captura.component';
import { BackgroundComponent } from './background/background.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
  {
    path: '',
    component: BackgroundComponent,
  },
  {
    path: 'captura',
    component: CapturaComponent,
  },
  {
    path: 'consulta',
    component: ConsultaComponent,
  },
  {
    path: 'editar/:id/:nombre/:paterno/:materno/:cargo/:telefono/:username',
    component: EditarComponent,
  },
];
