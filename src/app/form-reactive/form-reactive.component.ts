import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup,  Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../forbidden-name.directive";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  powers = ['xxx', 'bbb', 'fff'];
  hero = {name: 'xubingf' , alterEgo: 'lizhij', power: this.powers[0]};
  heroForm: FormGroup;
  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo, Validators.required),
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }
  get name() {
    return this.heroForm.get('name');
  }
  get alterEgo() {
    return this.heroForm.get('alterEgo');
  }
  get power() {
    return this.heroForm.get('power');
  }
}
