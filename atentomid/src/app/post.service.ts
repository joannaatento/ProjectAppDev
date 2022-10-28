import { Injectable } from "@angular/core"; /*import - para maimport lahat ng class */ /*export - pag tigimport mo su class kadtong export class makukuha su laog 
kadtong export class */
/*basically this file continas the values of the objects na nandun sa post.model.ts. Na dapat kung ano ung pagkakasunod sunod na nilagay
 dun sa object na nasa post.model.ts. amo man adto su pasunod sunod kang pag declare mo dd sa post.service.ts*/

import { Papasa } from "./post.model";

@Injectable ({providedIn: 'root'}) /*para ma bigay mo sa ibang page yung class Kung sain hali an na table*/
/*nagaimplement siya kang metadata sa ibang components*/ /*para magenerate mo su metadata kang class*/

/*the root used is the referenced and hosted in the index.html, pagkaintindi ko kasi is file directory sya ng mga data na ginagamit
 natin*/

export class PostService{ /*para makacreate ako or malagyan ko ki value, the first thing I did is to export a class again which was named 
as PostService*/

    listOfPosts: Papasa[]=[  /* nagcreate ako ki array na listOfPosts na may class na Papasa na galing sa post.model.ts*/
        new Papasa( 
            'OBSESSION', /*yang orange na yan are the values kang mga objects na nasa post.model.ts*/
            'https://www.goodinfonet.com/uploads/news/goodinfonet_exo_for_beginners_100_facts_about_exo_1600280289_0.jpg',
            'exo is the best'
        ),

        new Papasa(
            'POWER',
            'https://www.billboard.com/wp-content/uploads/media/exo-power-2017-vid-billboard-1548.jpg',
            'POWER IS THE BEST'

        )
    ];
/*so pano makuha su value kang array na listOfPosts? Magacreate ako dyan ki new method na getPost, then irereturn niya su laman kang
 listOfPosts*/
    getPost(){ 
        return this.listOfPosts /*this. tigahapod mo su variable*/
    }
}

