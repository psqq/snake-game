import * as $ from 'jquery';
import * as Mainloop from 'mainloop.js';

class GameCanvas {
    readonly WIDTH_IN_CELLS = 20;
    readonly HEIGHT_IN_CELLS = 20;
    readonly CELL_SIZE = 10;

    private canvas: JQuery;

    constructor() {
        this.canvas = $(".gameCanvas");
        this.setDefaultSize();
    }

    setDefaultSize() {
        this.canvas.attr({
            width: this.WIDTH_IN_CELLS * this.CELL_SIZE,
            height: this.HEIGHT_IN_CELLS * this.CELL_SIZE
        });
    }

    getCanvasContext(): CanvasRenderingContext2D {
        return (this.canvas.get(0) as HTMLCanvasElement).getContext('2d');
    }
}

let gameCanvas = new GameCanvas();

function update(delta: number) {
}

function draw() {
    let ctx = gameCanvas.getCanvasContext();
}

function end(fps: number, panic: boolean) {
    $(".fps").text(`FPS: ${fps}`);
}

Mainloop.setUpdate(update).setDraw(draw).setEnd(end).start();