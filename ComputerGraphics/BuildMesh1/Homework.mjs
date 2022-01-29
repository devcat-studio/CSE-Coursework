import { Mesh, rgb } from './Helper.mjs';
import { v3 } from '../twgl-full.module.js'; // https://twgljs.org/docs/module-twgl_v3.html

export class Homework {
    // 이 메서드를 수정해서 정육면체가 화면에 그려지도록 합시다.
    // 정육면체는 X축, Y축, Z축 각각 -1에서 1까지 위치를 차지하도록 합시다.
    // 정육면체의 각 면마다 다른 색을 부여합시다.

    // ### 참고
    //
    // * 버텍스(Vertex)는 3차원 공간의 어떤 한 '점' 입니다.
    //   각각의 버텍스마다 3차원 벡터(x, y, z)로 나타낸 위치가 있으며,
    //   그 외에 버텍스마다 컬러 등의 정보를 추가로 가질 수 있습니다.
    //   이 과제에서는 버텍스마다 위치와 컬러를 가지게 했습니다.
    //
    // * 3D 그래픽스에서 화면을 그리는 가장 기초가 되는 요소는 삼각형입니다.
    //   버텍스들을 등록하고, <몇번째, 몇번째, 몇번째> 버텍스를 이어서 삼각형을 만들지를 등록합니다.
    //
    // * 사각형은 삼각형 두 개로 표현합니다.
    //
    // * 3D 그래픽스 코드는 실수했을 때 내가 무엇을 잘못했는지 알기가 대단히 어렵습니다.
    //   잘못한 곳에서 에러메시지가 나오는 게 아니라, 그냥 화면에 아무것도 나오지 않는 경우가 많기 때문입니다.
    //   따라서 중간중간 웹브라우저에서 새로고침해서 결과를 확인하고,
    //   로컬 커밋을 통해 중간저장을 하며 진행하는 것을 추천합니다.
    //
    // * 보통은 3차원 벡터 p로부터 x, y, z 좌표를 꺼낼 때 p.X, p.Y, p.Z 등의 표현을 사용하지만
    //   이 과제에서 사용하는 라이브러리에서는 p[0], p[1], p[2] 를 사용합니다. 놀라지 마세요~
    // 
    // * 정육면체에는 꼭지점이 8개 있지만, 이 과제에서는 버텍스를 8개보다 더 많이 등록해야 합니다.
    //   왜냐하면 같은 꼭지점이라도 어느 삼각형에 속해 있느냐에 따라 색을 다르게 지정하기 위해서입니다.
    //   이 과제에서는 똑같은 위치에 버텍스가 여럿 위치하게 될 것이며,
    //   적어도 24개의 버텍스를 등록해야 할 것입니다.

    buildMesh() {
        const mesh = new Mesh();

        let i1 = mesh.addVertex(v3.create(0, 0, 1), rgb(1, 0, 0));
        let i2 = mesh.addVertex(v3.create(1, 0, -1), rgb(0, 1, 0));
        let i3 = mesh.addVertex(v3.create(-1, 0, -1), rgb(0, 0, 1));
        mesh.addTriangle(i1, i2, i3);

        return mesh;
    }

    getRotateSpeed() {
        return 0.0; // 0을 리턴하면 회전하지 않습니다.
    }
}