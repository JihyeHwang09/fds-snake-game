import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

// 위쪽으로 이동할 경우,꼬리 지우고 원래 머리를 기준으로 위쪽에 새로운 마디를 붙여준다.
// 오른쪽 화살표, 꼬리 지우고 원래 있던 머리를 기준으로 오른쪽에 머리를 붙여주면 된다.
// 왼쪽 화살표, 꼬리 지우고 원래 있떤 머리를 기준으로 왼쪽에 새로운 마디를 붙여준다.
// 아래쪽 화살표, 




/*
뱀게임 힌트:
- 화살표 키를 눌렀을 때 뱀이 움직이도록 만들어보세요.
- 화살표 키를 눌렀을 때 뱀이 자연스럽게 움직이도록 만들어보세요(힌트: 꼬리를 떼서 머리 앞에 갖다붙이면..?)
  - 화살표 키를 누르지 않아도 주기적으로 뱀이 움직이도록 만들어보세요. (힌트 1: 방금 전에 무슨 키를 눌렀더라..? 힌트 2: `nextState`가 언제 호출되는지 알아보기 위해 개발자 도구의 콘솔을 확인하세요!)
    - 먹이를 먹었을 때 뱀의 길이가 늘어나게 만들어보세요. (힌트: 꼬리를 떼지 않으면..?)
      - 먹이를 먹었을 때 다른 곳에 먹이가 생성되게 만들어보세요.
- 뱀의 머리가 벽에 부딪혔을 때 게임이 끝나게 만들어보세요.
- 뱀의 머리가 자기 몸에 부딪혔을 때 게임이 끝나도록 만들어보세요.
- 설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.


도전 과제:

- 먹이가 뱀의 몸과 겹쳐져 생성되는 일이 없게 만들어보세요.
*/
import { ROWS, COLS } from "./config";

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

// - 설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
  // 키보드를 누르지 않아도 이동할 수 있도록 방향 상태를 저장
  this.direction = "right";
  // 먹이의 좌표
  this.fruit = { x: 3, y: 5 };
}

SnakeGameLogic.prototype.up = function () {
  // 방향 상태 변경
  this.direction = "up";
};

SnakeGameLogic.prototype.down = function () {
  // 방향 상태 변경
  this.direction = "down";
};

SnakeGameLogic.prototype.left = function () {
  // 방향 상태 변경
  this.direction = "left";
};

SnakeGameLogic.prototype.right = function () {
  // 방향 상태 변경
  this.direction = "right";
};

// 한 번 움직여야 할 타이밍마다 실행되는 함수
SnakeGameLogic.prototype.nextState = function () {
  console.log(`nextState`);
  // 새로 추가할 머리를 선언
  let newHead;
  // 새로 추가할 먹이를 선언 
  let newFruit = {};
// 키보드를 누르지 않아도 이동할 수 있도록 방향 상태를 저장하는 this.direction의 값이 "up"이라면,
// 뱀의 머리를 새로 만드는데, 기존에 있던 머리를 기준으로 x좌표는 그대로 같은 값으로, y좌표는 -1한 값을 넣어준다. 
  if (this.direction === "up") {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    };
    // 뱀이 기존에 가지고 있던 위치값이 "down"이라면
  } else if (this.direction === "down") {
    // 뱀의 머리를 새로 만드는데, 기존에 있던 머리를 기준으로 x좌표는 그대로 같은 값으로, y좌표는 +1한 값을 넣어준다. 
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    };
    // 뱀이 기존에 가지고 있떤 위치값이 "right"이라면
  } else if (this.direction === "right") {
    // 뱀의 머리를 새로 만드는데, 기존에 있던 머리를 기준으로 x좌표는 +1한 값으로, y좌표는 그대로 같은 값으로 넣어준다.
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    };
    // 뱀이 기존에 가지고 있던 위치값이 "left"라면
  } else if (this.direction === "left") {
    // 뱀의 머리를 새로 만드는데, 기존에 있던 머리를 기준으로 x좌표는 -1한 값으로, y좌표는 그대로 같은 값으로 넣어준다. 
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    };
  }

  // 새로 만드는 머리의 좌표값이 게임판의 범위를 벗어날 경우, false를 반환한다. 
  if (
    // 새로 만드는 머리의 y값이 y축의 최대값보다 크거나 같을 경우 
    newHead.y >= ROWS ||
    // or 새로 만드는 머리의 y값이 0보다 작을 경우
    newHead.y < 0 ||
    // or 새로 만드는 머리의 x값이 x축의 최대값보다 크거나 같을 경우
    newHead.x >= COLS ||
    // or 새로 만드는 머리의 x값이 0보다 작을 경우
    newHead.x < 0 ||
    // or 뱀의 관절들의 요소들을 하나씩 꺼내서 그 x값과 새로 만드는 머리의 x값이 같고 && 기존의 y값과 새로 만드는 머리의 y값이 같으면
    this.joints.some(joint => joint.x === newHead.x && joint.y === newHead.y)
    // false를 반환한다. 
  ) {
    return false;
  }
// 새로 생기는 머리의 x좌표와 먹이의 x좌표가 일치 && 새로 생기는 머리의 y좌표와 먹이의 y좌표가 일치하면,
  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    // do ~ while 구문을 쓰는 이유?
    do {
      // 새로 생기는 먹이의 x좌표에 랜덤으로 생성된 x좌표를 넣고,
      newFruit.x = Math.ceil(Math.random() * COLS);
      // 새로 생기는 먹이의 y좌표에 랜덤으로 생성된 y좌표를 넣는다.
      newFruit.y = Math.ceil(Math.random() * ROWS);
      // 새로 생긴 먹이의 좌표를 기존에 있던 먹이의 좌표에 대입해서 값을 바꿔준다. 
      this.fruit = newFruit;
      // 
    } while (
      // (새로 생기는 먹이의 x좌표가 새로 생기는 머리의 x좌표와 같고 && 새로 생기는 먹이의 x좌표와 새로 생기는 머리의 y좌표가 같거나)
      // or (뱀의 관절들에 저장되어 있는 좌표들을 하나씩 꺼내서 그 x좌표와 새로 만든 먹이의 x자표와 같고 
      // && 관절들에 저장되어 있는 y좌표를 하나씩 꺼내서 새로 만든 먹이의 y좌표와 같은지 비교해서 같다면), true 값 반환. 다르면, false값 반환. 
      // 이 조건식을 만족하면, do{}안에 있는 코드가 반복된다. 'do ~ while'구문은 무조건 1번은 실행된다!!!!!(조건을 만족하지 않더라도)
      (newFruit.x === newHead.x && newFruit.y === newHead.y) ||
      this.joints.some(
        joint => joint.x === newFruit.x && joint.y === newFruit.y
      )
    );

    // 새로 생기는 머리의 x좌표와 먹이의 x좌표가 일치하지 않거나, 새로 생기는 머리의 y좌표와 먹이의 y좌표가 일치하지 않는다면
    // ->새로 생기는 머리의  x좌표나 y좌표 둘 중 하나라도 먹이의 x, y 좌표와 일치하지 않으면,
  } else {
    // 뱀의 기존에 있던 꼬리를 뗀다.
    this.joints.pop();
  }
// 뱀의 관절에 새로운 머리를 기존 머리를 기준으로 맨 앞에(배열의 가장 왼쪽에) 붙여준다. 
  this.joints.unshift(newHead);
  // true를 반환한다.
  return true;
};

export default SnakeGameLogic;
