import { Pipe, PipeTransform } from '@angular/core';
import { MobileService } from './mobile.service';
import { Mobile } from '../app/mobile';

@Pipe({
    name: 'myfilter',
    pure: false
})

export class MyFilterPipe implements PipeTransform {

    mobile: Mobile[] = [];

    constructor(private Service: MobileService) {
        this.mobile = this.Service.getMobile();
        console.log("my data in pipe", JSON.stringify(this.mobile));
    }


    transform(items: any[], Mobile: Mobile): any {
        if (!items || !Mobile) {
            console.log("filter is", Mobile)
            console.log("item is", items);
            return items;
        }
        return items.filter(item => item.name.indexOf(Mobile.mobilename) !== -1);
    }
}









