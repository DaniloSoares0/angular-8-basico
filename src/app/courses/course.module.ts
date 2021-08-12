import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PipeModule } from "../shared/components/pipe/pipe.module";
import { StarModule } from "../shared/components/star/star.module";
import { CourseListComponent } from "./course-list-component";
import { CourseInfoComponent } from "./course.info.component";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    StarModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'course/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule {

}
