import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  interval = "poop";
  constructor() {}

  ngOnInit(): void {}

  onStartGame = () => {
    setInterval(() => {
      console.log(this.interval), 1000;
    });
  };
}
