import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // optional 2nd argument of @viewChild()
  // 1. read: use it to red the different token from the queried elements
  // 2. static: determines when the query is rredolved.
  //     True is when the view is initialized (before the fist change detection) for the first time
  //     False of you want to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {}

  updateSearchText() {
    //this.searchText = e.target.value;
    //console.log(inputEl.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
