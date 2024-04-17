import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repoitem',
  templateUrl: './repoitem.component.html',
  styleUrl: './repoitem.component.css'
})
export class RepoitemComponent 
{
    @Input() repository : any ;
}
