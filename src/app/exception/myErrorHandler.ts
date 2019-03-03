import { ErrorHandler, NgModule } from '@angular/core';


class MyErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        throw new Error('Method not implemented.');
    }

}

@NgModule({
    providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})

class MyModule {

}
