import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {

start_but: boolean = false;

start_game(){
  this.start_but = true;
}

user:number=0;
num:number=0;
res:number=0;

t_match:number=0;

h_win:number=0;
h_draw:number=0;
h_lost:number=0;

m_win:number=0;
m_draw:number=0;
m_lost:number=0;

OverallWinner:string="";
human_res:string="";
machine_res:string="";




l_img_url:string="assets/images/L_paper.jpeg";
r_img_url:string="assets/images/R_paper.jpeg";



paper(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user = 10;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
rock(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user = 20;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
sci(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user = 30;
  this.res=this.user+this.num;
  this.final_result(this.res);
}

hwin:string="";
mwin:string="";
draw:string="";







final_result(a:number){
    switch(a){
      case 11: alert("Paper Wins");
              this.pap_win();
              break;
      case 12: alert("Paper Loss");
              this.pap_loss();
              break;
      case 13: alert("Draw");
              this.pap_draw();
              break;
      case 21: alert("Rock Wins");
              this.rock_win();
              break;
      case 22: alert("Rock Loss");
              this.rock_loss();
              break;
      case 23: alert("Draw");
              this.rock_draw();
              break;
      case 31: alert("Scissor Wins");
              this.sci_win();
              break;
      case 32: alert("Scissor Loss");
              this.sci_loss();
              break;
      case 33: alert("Draw");
              this.sci_draw();
              break;

              }
}


pap_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_lost=this.m_lost+1;
  this.hwin="yellow";
  this.mwin="white";
  this.l_img_url="assets/images/L_paper.jpeg";
  this.r_img_url="assets/images/R_rock.jpeg";
}
pap_draw(){
        this.t_match=this.t_match+1;
        this.m_draw=this.m_draw+1;
        this.h_draw=this.h_draw+1;
        this.hwin="orange";
        this.mwin="orange";
        this.l_img_url="assets/images/L_paper.jpeg";
        this.r_img_url="assets/images/R_paper.jpeg";
}
pap_loss(){
        this.t_match=this.t_match+1;
        this.m_win=this.m_win+2;
        this.h_lost=this.h_lost+1;
        this.hwin="white";
        this.mwin="yellow";
        this.l_img_url="assets/images/L_paper.jpeg";
        this.r_img_url="assets/images/R_scissor.jpeg";
}
rock_win(){
        this.t_match=this.t_match+1;
        this.h_win=this.h_win+2;
        this.hwin="yellow";
        this.mwin="white";
        this.m_lost=this.m_lost+1;
        this.l_img_url="assets/images/L_rock.jpeg";
        this.r_img_url="assets/images/R_scissor.jpeg";
}
rock_draw(){
        this.t_match=this.t_match+1;
        this.m_draw=this.m_draw+1;
        this.h_draw=this.h_draw+1;
        this.hwin="orange";
        this.mwin="orange";
        this.l_img_url="assets/images/L_rock.jpeg";
        this.r_img_url="assets/images/R_rock.jpeg";
}
rock_loss(){
        this.t_match=this.t_match+1;
        this.m_win=this.m_win+2;
        this.h_lost=this.h_lost+1;
        this.hwin="white";
        this.mwin="yellow";
        this.l_img_url="assets/images/L_rock.jpeg";
        this.r_img_url="assets/images/R_paper.jpeg";
}
sci_win(){
        this.t_match=this.t_match+1;
        this.h_win=this.h_win+2;
        this.hwin="yellow";
        this.mwin="white";
        this.m_lost=this.m_lost+1;
        this.l_img_url="assets/images/L_scissor.jpeg";
        this.r_img_url="assets/images/R_paper.jpeg";
}
sci_loss(){
        this.hwin="white";
        this.mwin="yellow";
        this.t_match=this.t_match+1;
        this.m_win=this.m_win+2;
        this.h_lost=this.h_lost+1;
        this.l_img_url="assets/images/L_scissor.jpeg";
        this.r_img_url="assets/images/R_rock.jpeg";
}
sci_draw(){
        this.t_match=this.t_match+1;
        this.m_draw=this.m_draw+1;
        this.h_draw=this.h_draw+1;
        this.hwin="orange";
        this.mwin="orange";
        this.l_img_url="assets/images/L_scissor.jpeg";
        this.r_img_url="assets/images/R_scissor.jpeg";
}




}