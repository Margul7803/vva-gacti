# Popin Module

First import the PopinModule

```ts
import { PopinModule } from "popin";

@NgModule({
  declarations: [
    // ...
  ],
  imports: [PopinModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Then create a component to be placed inside the popin

```ts
import { Component } from "@angular/core";
import { PopinContentComponent } from "popin";

@Component({
  selector: "app-component-a",
  template: ` <h1 class="h1-a">Composant A</h1> `,
  styles: [
    `
      .h1-a {
        color: red;
      }
    `,
  ],
})
export class ComponentAComponent implements PopinContentComponent {}
```

Then build your popin using the PopinBuilderService

```ts
import { Component } from "@angular/core";
import { ComponentAComponent } from "component-a.component";
import { PopinBuilderService } from "popin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ap-studio";

  constructor(private popinBuilder: PopinBuilderService) {
    const myBuilder = this.popinBuilder.getBuilder();
    const popinRef = myBuilder
      .setTitle("Component A")
      .setComponent(ComponentAComponent)
      .build();
    popinRef
      .afterClosed()
      .subscribe(() => console.log("popin for component A closed"));
  }
}
```
