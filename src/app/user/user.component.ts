import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FallowerService } from '../fallower.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class userComponent implements OnInit {
  userName:string='';
  user:any=[];
  constructor(private fallowerservice:FallowerService, 
    private router:Router,
    private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllFollower();
  }

  getAllFollower(){
    this.fallowerservice.getConfig().subscribe((data: any)=>
    {
     this.user=data
    console.log(data);
    })

}
   follower(user:string)
        {
            this.router.navigate(
              ['/userfallower'],
              { queryParams: { username: user } }
            );

        }


      
      

}
