import {connect} from 'react-redux';
import type {Dispatch} from 'redux';
import React from 'react';

// function home (props: UsedReduxState & {readonly dispatch: Dispatch}): JSX.Element{
//   return <div>
//     {props.todo}
//     <button 
//       onClick={(): void=>{
//         props.dispatch({type:'todo'});
//       }}
//     >click</button>
//   </div>;
// }

class home extends React.Component<UsedReduxState & {readonly dispatch: Dispatch}>{
  render(){
    return <div>
      {this.props.todo}
      <button 
        onClick={(): void=>{
          this.props.dispatch({type:'todo'});
        }}
      >click</button>
    </div>;
  }
}


interface UsedReduxState{
  readonly todo: string;
}
function mapStateToProps (state: UsedReduxState): UsedReduxState{
  return {
    todo:state.todo
  };
}

export default connect(mapStateToProps)(home);