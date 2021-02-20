import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Weberti'
  employees = [] as any

  constructor() { 
    setTimeout( () => {
      this.name = 'Barbosa'
    }, 3000)
  }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employees.push(this.name)
    console.log(this.employees)
  }

}
