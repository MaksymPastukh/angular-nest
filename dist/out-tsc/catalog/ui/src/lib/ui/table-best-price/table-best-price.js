import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
let TableBestPrice = class TableBestPrice {
    itemsTableBestPrice = input([]);
};
TableBestPrice = __decorate([
    Component({
        selector: 'app-table-best-price',
        imports: [CommonModule, RouterLink],
        templateUrl: './table-best-price.html',
        styleUrl: './table-best-price.scss',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], TableBestPrice);
export { TableBestPrice };
