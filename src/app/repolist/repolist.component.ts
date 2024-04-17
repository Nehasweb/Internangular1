import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrl: './repolist.component.css'
})
export class RepolistComponent implements OnInit
 {
     repositories!: any[];
     currentPage : number = 1 ;
     itemsPerPage : number = 10 ;

     constructor (private http : HttpClient) { }

     ngOnInit(): void
      {
         this.fetchRepositories() ;

     }

     fetchRepositories() 
     {
      const url = 'https://api.github.com/repositories?page=${this.currentPage}&per_page=${this.itemsPerPage}';
      this.http.get<any[]>(url).subscribe(data =>{
        this.repositories = data ;
      });
     }

     onPageChange(pageNumber : number)
     {
      this.currentPage = pageNumber ;

      this.fetchRepositories();
     }
}
