import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'add-options', loadChildren: './add-options/add-options.module#AddOptionsPageModule' },
  { path: 'template-edit', loadChildren: './template-edit/template-edit.module#TemplateEditPageModule' },
  { path: 'addtemplate', loadChildren: './addtemplate/addtemplate.module#AddtemplatePageModule' },
  { path: 'delete-project', loadChildren: './delete-project/delete-project.module#DeleteProjectPageModule' },
  { path: 'templatedetails/:id', loadChildren: './templatedetails/templatedetails.module#TemplatedetailsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
