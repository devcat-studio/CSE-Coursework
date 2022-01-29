import * as twgl from '../twgl-full.module.js';

const v3 = twgl.v3; // https://twgljs.org/docs/module-twgl_v3.html

//-----------------------------------------------------------------------------------
// 주어진 선과 점의 거리를 잰다
// * line1, line2: 선을 이루는 두 점
// * p: 선과의 거리를 재고 싶은 점
export function lineToPointDistance(lineP1, lineP2, p) {
    // https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html 의 식과
    // 변수 이름을 맞추기 위해 일단 대입
    const x0 = p;
    const x1 = lineP1;
    const x2 = lineP2;

    const boonja = v3.length(v3.cross(v3.subtract(x0, x1), v3.subtract(x0, x2)));
    const boonmo = v3.length(v3.subtract(x2, x1));
    return boonja / boonmo;
}

//-----------------------------------------------------------------------------------
// 버텍스당 position과 color를 갖고,
// gl.TRIANGLES 모드로 삼각형들을 관리하는 메시
export class Mesh {
    constructor() {
        this.position = [];
        this.color = [];
        this.indices = []; // indices는 index의 복수형이다;;
        this.arrays = {
            position: this.position,
            color: this.color,
            indices: this.indices
        };
        this.vertexCount = 0;
    }

    addVertex(position, color) {
        this.position.push(position[0]);
        this.position.push(position[1]);
        this.position.push(position[2]);
        this.color.push(color[0]);
        this.color.push(color[1]);
        this.color.push(color[2]);
        this.color.push(color[3]);
        return this.vertexCount++;
    }

    addTriangle(i1, i2, i3) {
        this.indices.push(i1);
        this.indices.push(i2);
        this.indices.push(i3);
    }

    getPosition(i) {
        return v3.create(
            this.position[i * 3],
            this.position[i * 3 + 1],
            this.position[i * 3 + 2]
        );
    }
};

//-----------------------------------------------------------------------------------
// 버텍스당 position과 color를 갖고,
// gl.LINES 모드로 선들을 관리하는 메시
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

//-----------------------------------------------------------------------------------
// red, green, blue는 각각 0.0에서 1.0 사이.
export function rgb(red, green, blue)
{
    return [red, green, blue, 1.0]
}

//-----------------------------------------------------------------------------------
// red, green, blue, alpha는 각각 0.0에서 1.0 사이.
export function rgba(red, green, blue, alpha)
{
    return [red, green, blue, alpha]
}
