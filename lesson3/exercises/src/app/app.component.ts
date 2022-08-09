import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleLand(rocketImage) {
    let result = window.confirm('The shuttle is landing, Landing gear engaged');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle landed.';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleMissionAbort(rocketImage) {
    let result = window.confirm ('Are you sure you want ')
    this.color = 'red';
    this.height = 0;
    this.width = 0;
    this.message = 'Mission aborted';
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.checkBounds(rocketImage, direction)) {
       let movement = parseInt(rocketImage.style.left || '0') + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
    }
    else if (direction === 'left' && this.checkBounds(rocketImage, direction)) {
      let movement = parseInt(rocketImage.style.left || '0') - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    else if (direction === 'down' && this.checkBounds(rocketImage, direction)) {
      let movement = parseInt(rocketImage.style.bottom || '0') - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    else if (direction === 'up' && this.checkBounds(rocketImage, direction)) {
      let movement = parseInt(rocketImage.style.bottom || '0') + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
 }

 checkBounds(rocketImage, direction) {
  const left = parseInt(rocketImage.style.left || '0')
  const bottom = parseInt(rocketImage.style.bottom || '0')
  const width = 525;
  const height = 400;
  if(left <= 10 && direction === 'left') {
    this.color = 'yellow';
    return false;
  }
  else if(left >= width - 10 - 75 && direction === 'right') {
    this.color = 'yellow';
    return false;
  }
  else if(bottom <= 10 && direction === 'down') {
    this.color = 'yellow';
    return false;
  }
  else if(bottom >= height - 10 - 75 && direction === 'up') {
    this.color = 'yellow';
    return false;
  }
  else {
    this.color = 'blue';
    return true;
  }
 }

}
