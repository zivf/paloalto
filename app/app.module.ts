/**
 * Created by Eyal on 24/04/2017.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";

@NgModule({
    declarations:[
        AppComponent,
        CounterComponent
    ],
    providers   :[],
    bootstrap   :[
        AppComponent
    ],
    imports     :[
        BrowserModule
    ],
    exports     :[]
})
export class AppModule{}