import {Colors} from "../Colors";
import logo from '../../assets/Chess_black-king.svg'
import {Cell} from "../Cell";

export enum FigureNames {
    "FIGURE" = "Фигура",
    "KING" = "Король",
    "KNIGHT" = "Конь",
    "QUEEN" = "Королева",
    "BISHOP" = "Слон",
    "ROOK" = "Ладья",
    "PAWN" = "Пешка",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(taget: Cell): boolean {
        return true
    }

    moveFigure(target: Cell) {

    }
}