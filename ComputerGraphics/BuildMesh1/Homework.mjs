import { Mesh, rgb } from './Helper.mjs';
import { v3 } from '../twgl-full.module.js'; // https://twgljs.org/docs/module-twgl_v3.html

export class Homework {
    buildMesh() {
        const mesh = new Mesh();

        let vertex1 = mesh.addVertex(v3.create(0, 0, 1), rgb(1, 0, 0));
        let vertex2 = mesh.addVertex(v3.create(1, 0, -1), rgb(0, 1, 0));
        let vertex3 = mesh.addVertex(v3.create(-1, 0, -1), rgb(0, 0, 1));
        mesh.addTriangle(vertex1, vertex2, vertex3);

        return mesh;
    }

    getRotateSpeed() {
        return 1.0; // 0을 리턴하면 회전하지 않음
    }
}