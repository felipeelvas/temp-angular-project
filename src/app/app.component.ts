import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
@ViewChild('meuInput', {static: true,} )
meuInputEl!: ElementRef<HTMLInputElement>;

@ViewChild('minhaDiv')
minhaDivEl!: ElementRef<HTMLDivElement>;

@ViewChild(FilhoComponent)
  filhoCompRef!: FilhoComponent;


updateInputText(){
    console.log(this.meuInputEl)
    this.meuInputEl.nativeElement.value = 'Texto Atualizado!';
  }

  focus(){
      this.meuInputEl.nativeElement.focus();
    }

    updateDivContent(){
        this.minhaDivEl.nativeElement.textContent = 'Conteúdo Atualizado!';
      }

      hello(){
          this.filhoCompRef.dizerOi();
          this.filhoCompRef.message = 'Eu disse "Oi"'
        }

        constructor(){
          console.log('constructor')
        }

        ngOnInit() {
            console.log('ngOnInit', this.meuInputEl);

          }

        // ngAfterViewInit(): void {
        //   console.log('ngAfterViewInit', this.meuInputEl);
        //   this.meuInputEl.nativeElement.focus();

        //   }

  buttonList =[
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ];

  @ViewChildren('meuButton')
      buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

      ngAfterViewInit() {
        console.log(this.buttonsEl);

        this.buttonsEl.changes.subscribe((result) => {
          console.log(result);
        })
      }

      changeColor(event: Event){
        console.log(event);

        const btnElement = event.target as HTMLButtonElement;
        btnElement.style.backgroundColor = 'orange';
        btnElement.style.color = 'white';
      }
      resetButtons(){
        this.buttonsEl.forEach((btnEl) => {
          console.log(btnEl);
          btnEl.nativeElement.style.backgroundColor = '';
          btnEl.nativeElement.style.color = '';
        })
      }

      first(){
        //const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');
        const primeiro = this.buttonsEl.toArray()[0];
        console.log(primeiro);
      }

      remove(){
        this.buttonList.shift();
      }


}
