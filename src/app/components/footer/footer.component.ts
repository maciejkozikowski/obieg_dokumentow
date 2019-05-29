import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div>
  <footer class="page-footer font-small  text-center bg-dark">
    <div class="footer-copyright py-2 ">Obieg dokumentów © 2019 Copyright: na potrzeby projektu dla firmy
      <a href="https://billennium.pl/"> Billennium.pl</a>
    </div>
  </footer>
</div>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
