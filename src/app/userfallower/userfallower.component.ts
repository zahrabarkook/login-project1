import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FallowerService } from '../fallower.service';

@Component({
  selector: 'app-userfallower',
  templateUrl: './userfallower.component.html',
  styleUrls: ['./userfallower.component.scss']
})
export class userfallowerComponent implements OnInit {

  userName:string='';
  fallowerservice: any;
  parameterValue: any;
  user:any;
  constructor(private FallowerService:FallowerService,
    private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.queryParams.subscribe(parametrs=> this.parameterValue =parametrs);
    console.log(this.parameterValue)
    this.FallowerService.getUserFollowers(this.parameterValue.username).subscribe((data: any)=>{
      this.user=data})
           console.log(this.user);
                    }
}