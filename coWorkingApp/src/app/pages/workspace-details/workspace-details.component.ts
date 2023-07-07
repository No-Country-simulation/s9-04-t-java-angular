import { Component } from '@angular/core';
import { faArrowLeft, faShareNodes, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent {

  faArrowLeft = faArrowLeft;
  faShareNodes = faShareNodes;
  faLocationDot = faLocationDot;
  faStar = faStar;
  faHeart = faHeart;

}
