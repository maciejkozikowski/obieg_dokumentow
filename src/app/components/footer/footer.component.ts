import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
<<<<<<< HEAD
  templateUrl: './footer.component.html',
=======
  template: `<div>
  <footer class="page-footer font-small  text-center bg-dark">
    <div class="footer-copyright py-2 ">Obieg dokumentów © 2019 Copyright: na potrzeby projektu dla firmy
      <a href="https://billennium.pl/"> Billennium.pl</a>
    </div>
  </footer>
</div>`,
>>>>>>> 2382618f1589595ce4dc2640a512ecf2b9110312
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
