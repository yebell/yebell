//예전 리액트 문법
//class: 변수/함수 보관하는 덩어리
//extends: 오른쪽에 있는 놈의 성질을 물려받겠습니다
//constructor: class의 변수/초기값 저장할 때 사용
class Profile extends React.Component {
  constructor(){
    super();
    //state는 constructor 안에 작성
    this.state = {name: 'Kim', age: '30'}
  }

  //함수 만들기
  changeName(){
    this.setState({name:'Park'})
  }
  //bind 함수를 쓰기 싫으면 arrow function으로 만들면 됨 
  // changeName = () => {
  //   this.setState({name:'Park'})
  // }

  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p> 저는 { this.state.name } 입니다.</p>
        <button onClick = { ()=>{ this.setState( {name: 'Park'} ) } }>이름만 변경</button>
        <button onClick = { this.changeName.bind(this) }>이름변경 함수로</button>
      </div>
    )
  }
}