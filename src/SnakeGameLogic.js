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
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 4, y: 0},
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};

  this.memory = '';

}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
   console.log('up');
   this.memory = 'up';
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
  this.memory = "down";
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  this.memory = "left";
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.memory = "right";
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  if (this.memory === 'up' ) {
  this.joints.pop();
  this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 })
  }

  if (this.memory === 'down' ) {
    this.joints.pop();
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 })
  }
  if (this.memory === 'left' ) {
    this.joints.pop();
    this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y })
  }
  if (this.memory === 'right') {
    this.joints.pop();
    this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
  }

  
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
