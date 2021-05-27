import { Usuario } from './estado/general.state';
import { StateService } from './estado/state.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usuario: Usuario;
  userSubs: Subscription;
  constructor(private estado: StateService) {}

  ngOnInit(): void {
    this.userSubs = this.estado.stateChanged.subscribe((state) => {
      if (state) {
        this.usuario = state.usuario;
      }
    });
  }
}
