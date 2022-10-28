import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CompanyComponent } from "./company/company.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post/post.component";


const routes: Routes=[
    {path: 'post', component: PostComponent},
    {path: 'post-list', component: PostListComponent},
    {path: 'authentication', component: AuthenticationComponent},
    {path: 'company', component: CompanyComponent},
    {path: ' ', redirectTo: '/header', pathMatch: 'full'}

];

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponent = [PostComponent, PostListComponent,AuthenticationComponent];