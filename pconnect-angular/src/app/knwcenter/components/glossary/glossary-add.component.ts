import { Location }               from '@angular/common';
import {Component, OnInit, enableProdMode} from '@angular/core';
import {Glossary} from "./glossary";
import {GlossaryService} from "./glossary.service";
enableProdMode();
@Component({
  templateUrl: './glossary-add.component.html',
})
export class GlossaryAddComponent implements OnInit {

  msg:string;
  tUser:any = new Glossary();
  data:any;
  errorMessage:any;
  firstName:string = '基础配置';
  secondName:string = '用户管理';
  constructor(private tUserService:GlossaryService,
              private location:Location) {
  }

  ngOnInit():void {
  }
  msg_(msg_:string) {
    this.msg = msg_;
  }
  checkUser(user:Glossary){
    let result =true;
    if(!user.name){
      this.msg = '姓名不能为空';
      result = false;
    }
    if(!user.username){
      this.msg = '用户名不能为空';
      result = false;
    }
    if(!user.password){
      this.msg = '密码不能为空';
      result = false;
    }
    if(!user.mobilePhone){
      this.msg = '手机号不能为空';
      result = false;
    }
    if(!user.email ){
      this.msg = '邮箱不能为空';
      result = false;
    }
    return result;
  }
  onSubmit(){
    if(!this.checkUser(this.tUser)){
      return;
    }
    this.tUserService.add(this.tUser).subscribe( data =>{
      if(data.code == 0){
        this.msg = "添加成功";
        setTimeout(() => {this.goBack()},1000);
      }else{
        this.msg = "添加失败";
      }
    })
  }
  goBack(): void {
    this.location.back();
  }
}

