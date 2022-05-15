import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '맛집추천']);
  let [따봉, 따봉변경] = useState(0);
  // let [따봉1, 따봉변경1] = useState(0);
  // let [따봉2, 따봉변경2] = useState(0);
  let [modal, setModal] = useState(true); //state 상태 저장
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
  // map 사용법 1. array자료 갯수만큼 함수안 코드 실행해줌 2. 함수의 파라미터는 array안에 있던 자료임 3. return에 뭐 적으면 array로 담아줌
  // [1,2,3].map(function(a){
  //   console.log(a);
  //   return '12342411'
  // })

  // Destructuring 문법. 각각 변수로 뺴주는 문법
  // let num = [1,2];
  // let [a,c] = [1,2]; 
  // let a = num[0];
  // let c = num[1];

  // function 함수(){
  //     console.log(1);
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={ {fontSize: '16px'} }>React Blog</h4>
      </div>

      {/* <button onClick={()=>{
        let arr = 글제목;
        arr[0] = '여자코트추천';
        // console.log(arr == 글제목);
        글제목변경(arr);
      }}>array/object특징</button> */}

      {/* <button onClick={()=>{글제목변경(글제목[1])}}>변경</button>  이렇게 하면 안됨! */}
      <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      } }>변경</button>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      } }>정렬</button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{
          따봉변경(따봉+1)
        }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={ ()=>{ setModal(true) } }>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        글제목.map(function(a, i){ //실제 글개수만큼 추가 // 두번째 파라미터(i) = 반복문 돌 때마다 0부터 1씩 증가하는 정수
          return (
          //   <div className='list'>
          //   {/* <h4>{ a }</h4> */}
          //   <h4>{ 글제목[i] }</h4>
          //   <p>2월 17일 발행</p>
          // </div>
          <div className='list' key={i}>
            <h4 onClick={ ()=>{ setModal(true); setTitle(i); } }>{ 글제목[i] } <span onClick={()=>{
              따봉변경(따봉+1)
            }}>👍</span> {따봉} </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              // state에서 자료 삭제하면 됨
              let copy = [...글제목];
              // copy 원하는 자료 삭제
              copy.splice(i, 1);
              글제목변경(copy)
            }}>삭제</button>
          </div>
          )
        })
      } 

      {/* <button onClick={()=>{ setTitle(0)} }>글제목0</button>
      <button onClick={()=>{ setTitle(1)} }>글제목1</button>
      <button onClick={()=>{ setTitle(2)} }>글제목2</button> */}
      
      {/* input에 뭔가 입력시 코드실행하고 싶으면 onChange . onInput */}
      {/* e 는 이벤트 객체. 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음 */}
      <input onChange={(e)=>{ 
        입력값변경(e.target.value) //input에 입력한 값 어딘가에 저장
        console.log(입력값) 
        }}>
      </input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>글발행</button>



      {/* <Modal/> 도 가능 */}
      {
        // 조건문 쓰고 싶을 때 삼항연산자 사용
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal color={'skyblue'} title={title} 글제목 = {글제목}/> : null
      }
      {/* <Modal></Modal> */}
      

      {/* <h4> { post } </h4> */}
    </div>
  );
}

// const Modal = () => {}
function Modal(props){
    return(
      // 의미없는 div 대신 쓰는 거 
      <>
      <div className='modal' style={{background: props.color}}>
        {/* <h4>{저 title state가 0이면 props.글제목[0]}</h4> */}
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {/* <button onClcik={()=>{ props.글제목변경(['여자 코트 추천']) }}>글수정</button> */}
        <button>변경</button>
      </div>
      <div></div>
      </>
    )
}

export default App;
