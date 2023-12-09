import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements  OnInit {
  email = '';
  password = '';
  token : string | null = null;
  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit(): void {
      this.token = localStorage.getItem('authToken');
      if(this.token != null){
        this.router.navigate(['/admin-dashboard']);
      }
  }


  login() {
    this.adminService.login(this.email, this.password).subscribe(res => {
      
      Swal.fire({
        icon:'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500,
        
      }).then(() => {
        this.router.navigate(['/admin-dashboard']);
      });
    }, 
    
    error => {
      console.log(error);
    });
  }

  

}
