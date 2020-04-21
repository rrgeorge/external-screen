import { NumberValueAccessor } from '@angular/forms';
import { Tile } from './tile';

export class Map {
    id: string;
    gridVisible: boolean;
    gridColor: string;
    gridSize: number;
    gridOffsetX: number;
    gridOffsetY: number;
    image: string;
    canvas: string;
    fog: string;
    scale: number;
    x: number;
    y: number;
    zoom: number;

    tiles: Array<Tile> = [];
}