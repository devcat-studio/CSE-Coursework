import * as twgl from '../twgl-full.module.js';

const v3 = twgl.v3; // https://twgljs.org/docs/module-twgl_v3.html

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

