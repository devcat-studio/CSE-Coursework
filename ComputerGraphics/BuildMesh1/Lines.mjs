import * as twgl from '../twgl-full.module.js';

const v3 = twgl.v3; // https://twgljs.org/docs/module-twgl_v3.html

// 버텍스당 position과 color를 갖고,
// gl.TRIANGLES 모드로 삼각형들을 관리하는 메시
export class Lines {
    constructor() {
        this.position = [];
        this.color = [];
        this.indices = []; // indices는 index의 복수형이다;;
        this.arrays = {
            position: this.position,
            color: this.color,
            indices: this.indices
        };
        this.lineCount = 0;
    }

    addVertex(position, color) {
        this.position.push(position[0]);
        this.position.push(position[1]);
        this.position.push(position[2]);
        this.color.push(color[0]);
        this.color.push(color[1]);
        this.color.push(color[2]);
        this.color.push(color[3]);
        return this.lineCount++;
    }

    addLine(i1, i2) {
        this.indices.push(i1);
        this.indices.push(i2);
    }

    getPosition(i) {
        return v3.create(
            this.position[i * 3],
            this.position[i * 3 + 1],
            this.position[i * 3 + 2]
        );
    }
};