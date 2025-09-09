import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";
import {Colors} from "../Colors";
import blackLogo from '../../assets/Chess_black-king.svg'
import whiteLogo from '../../assets/Chess_white-king.svg'

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(target.x - this.cell.x);
        const dy = Math.abs(target.y - this.cell.y);

        return (dx === 1 && dy === 0) ||
            (dx === 0 && dy === 1) ||
            (dx === 1 && dy === 1);
    }
}