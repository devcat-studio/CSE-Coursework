import * as twgl from '../twgl-full.module.js';

const vertexShader = `
    // uniform: 모든 버텍스에 대해 동일하게 들어오는 입력
    uniform mat4 u_worldViewProjection;

    // attribute: 각 버텍스마다 다른 입력
    attribute vec4 position;
    attribute vec3 color;
    attribute vec3 normal;

    // varying: 프래그먼트 셰이더로 전달할 출력
    varying vec4 v_color;
    varying vec3 v_normal;

    void main() {
        v_color = vec4(color, 1.0);
        v_normal = normal;

        // 3D API에 전달하는 버텍스별 위치 출력
        gl_Position = u_worldViewProjection * position;
    }
`;

const pixelShader = `
    precision mediump float;

    // uniform: 모든 프래그먼트에 대해 동일하게 들어오는 입력
    // (지금은 없다)

    // varying: 프래그먼트 셰이더로부터 받은 입력
    varying vec4 v_color;
    varying vec3 v_normal;

    void main() {
        // 3D API에 전달하는 프래그먼트(픽셀)별 컬러 출력.
        gl_FragColor = v_color;
    }
`;

export function createProgramInfo(gl) {
    return twgl.createProgramInfo(gl, [vertexShader, pixelShader]);
}
