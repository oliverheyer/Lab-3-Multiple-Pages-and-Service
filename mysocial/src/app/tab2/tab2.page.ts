import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../services/data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  model = new Post();

  constructor(private data: DataService, private sahred : SharedService) {

  }

  sendPost(){
    //validation
    if (!this.model.message && !this.model.imageUrl) return;

    this.model.createdOn = new Date(); // set this moment on time
    this.model.from = this.sahred.userName;
    this.model.from ="Oliver";
    console.log("Post Saved", this.model);

    // save the onject
    this.data.savePost(this.model);

    // clear new model (clear form)
    this.model = new Post();
  }

}
