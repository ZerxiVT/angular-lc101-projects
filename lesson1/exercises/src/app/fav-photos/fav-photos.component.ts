import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'PhotoName';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_FMjpg_UX1000_.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPugWzSnX3TWCYO-KlF4f5VF2JeMp6VGdAi2lQTLzsqHq00dW';

  constructor() { }

  ngOnInit() {
  }

}