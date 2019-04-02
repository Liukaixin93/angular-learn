import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { WordComponent } from './word/word.component';

export const homeRoutes = [
	{
		path: '',
		component: HomeComponent,
    	children: [
			{
				path: '',
				component: PictureComponent
			},
			{
				path: 'pictures',
				component: PictureComponent
			},
			{
				path: 'word',
				component: WordComponent
			},
		]
	},
];

