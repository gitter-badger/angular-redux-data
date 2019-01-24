import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule, StoreDevtoolsOptions} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {RxDataReducerFactory} from '../../projects/angular-redux-data/src/lib/rx-data-factories/rx-data-reducer.factory';
import {entities} from './rx-data.config';
import {uiState} from './redux/features/uiState/uiStateReducer';
import {RxDataModule} from '../../projects/angular-redux-data/src/lib/rx-data.module';
import {EffectsModule} from '@ngrx/effects';
import {DataLayerModule} from '../../projects/angular-redux-data/src/lib/data-layer.module';
import {CommentEffects} from './redux/effects/comment.effects';
import {PostEffects} from './redux/effects/post.effects';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(RxDataReducerFactory.getReducers(entities, {uiState: uiState})),
        EffectsModule.forRoot([
            CommentEffects,
            PostEffects
        ]),
        RxDataModule.forRoot({
            entityNameSpaces: entities
        }),
        DataLayerModule.forRoot({
            entities: entities,
            entityAdapterMappings: {},
            defaultHost: environment.host,
            defaultPath: environment.path
        }),
        StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{maxAge: 25}),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
