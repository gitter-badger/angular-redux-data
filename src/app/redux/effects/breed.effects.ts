import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AngularReduxDataEffect} from '../../../../projects/angular-redux-data/src/lib/redux-data-utilities/redux-data.effects';
import {ReduxDataActionsService} from '../../../../projects/angular-redux-data/src/lib/redux-data-services/redux-data.actions.service';
import {DataLayerService} from '../../../../projects/angular-redux-data/src/lib/data-services/data-layer.service';

@Injectable()
export class BreedEffects extends AngularReduxDataEffect {
    @Effect() findAll$;
    @Effect() findRecord$;
    @Effect() create$;
    @Effect() delete$;
    @Effect() update$;
    @Effect() queryAll$;
    constructor(protected actions$: Actions, protected actionsService: ReduxDataActionsService,
                protected dataLayerService: DataLayerService) {
        super(actions$, actionsService, dataLayerService, 'breeds');
    }
}
