import * as twgl from '../twgl-full.module.js';

const v3 = twgl.v3; // https://twgljs.org/docs/module-twgl_v3.html

// 버텍스당 position과 color를 갖고,
// gl.TRIANGLES 모드로 삼각형들을 추가하는 메시 빌더
export class MeshBuilder {
    constructor() {
        this.position = [];
        this.color = [];
        this.indices = []; // indices는 index의 복수형이다;;
    }

    addVertex(position, color) {
        let index = Math.abs(this.position.length / 3);
        this.position.push(position[0]);
        this.position.push(position[1]);
        this.position.push(position[2]);
        this.color.push(color[0]);
        this.color.push(color[1]);
        this.color.push(color[2]);
        this.color.push(color[3]);
        return index;
    }

    addTriangle(i1, i2, i3) {
        this.indices.push(i1);
        this.indices.push(i2);
        this.indices.push(i3);
    }

    getArrays() {
        return {
            position: this.position,
            color: this.color,
            indices: this.indices
        }        
    }
}