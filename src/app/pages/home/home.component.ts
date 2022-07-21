import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';
import { IPost } from 'src/app/interfaces/IPost';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: IPost [] = [];
  public comments: IComment [] = [];
  public messageButton: string = 'Ver comentarios';
  public comentariosFiltrados: IComment [] = [];
  public isVisible: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => this.posts =  data);
    this.dataService.getComments().subscribe(commentsData => this.comments = commentsData);
  }

  comentariosId(id: number) {
    this.comentariosFiltrados = this.comments.filter( comentarios => comentarios.postId === id);
    this.isVisible = !this.isVisible;
    this.isVisible == false? this.messageButton = 'Ver comentarios': this.messageButton = 'Ocultar comentarios';
    console.log(this.comentariosFiltrados);
  }

}
